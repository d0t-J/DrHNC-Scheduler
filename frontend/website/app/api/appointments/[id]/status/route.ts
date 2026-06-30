import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db'
import { getAuthSession, unauthorized, forbidden } from '@/lib/session'

const DOCTOR_ONLY_ACTIONS = ['approve_payment', 'reject_payment', 'resolve_escalation']

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getAuthSession()
  if (!session) return unauthorized()

  const body = await req.json()
  const { action, newDate, newTime } = body as {
    action: string
    newDate?: string
    newTime?: string
  }

  if (!action) return Response.json({ error: 'action required' }, { status: 400 })

  if (DOCTOR_ONLY_ACTIONS.includes(action) && session.user.role !== 'doctor') {
    return forbidden()
  }

  const appointment = await prisma.appointments.findUnique({
    where: { id: params.id },
    include: { payments: { orderBy: { created_at: 'desc' }, take: 1 } },
  })

  if (!appointment) return Response.json({ error: 'Not found' }, { status: 404 })

  let result: unknown

  switch (action) {
    case 'reschedule': {
      if (!newDate || !newTime) {
        return Response.json({ error: 'newDate and newTime required' }, { status: 400 })
      }
      const slotDate = new Date(newDate)
      const slotTime = new Date(`1970-01-01T${newTime}:00.000Z`)

      const conflict = await prisma.appointments.count({
        where: {
          appointment_date: slotDate,
          appointment_time: slotTime,
          status: { notIn: ['CANCELLED', 'CLOSED'] },
          id: { not: params.id },
        },
      })
      if (conflict > 0) return Response.json({ error: 'Slot already booked' }, { status: 409 })

      result = await prisma.appointments.update({
        where: { id: params.id },
        data: { status: 'RESCHEDULED', appointment_date: slotDate, appointment_time: slotTime },
      })
      break
    }

    case 'cancel':
      result = await prisma.appointments.update({
        where: { id: params.id },
        data: { status: 'CANCELLED' },
      })
      break

    case 'no_show':
      result = await prisma.appointments.update({
        where: { id: params.id },
        data: { status: 'NO_SHOW' },
      })
      break

    case 'escalate': {
      const conv = await prisma.conversations.findFirst({
        where: { patient_id: appointment.patient_id, status: { not: 'CLOSED' } },
        orderBy: { created_at: 'desc' },
      })
      if (conv) {
        result = await prisma.conversations.update({
          where: { id: conv.id },
          data: { status: 'ESCALATED' },
        })
      } else {
        result = await prisma.conversations.create({
          data: {
            patient_id: appointment.patient_id,
            status: 'ESCALATED',
            priority: 'HIGH',
          },
        })
      }
      break
    }

    case 'resolve_escalation': {
      const conv = await prisma.conversations.findFirst({
        where: { patient_id: appointment.patient_id, status: 'ESCALATED' },
        orderBy: { created_at: 'desc' },
      })
      if (!conv) return Response.json({ error: 'No escalated conversation found' }, { status: 404 })
      result = await prisma.conversations.update({
        where: { id: conv.id },
        data: { status: 'OPEN' },
      })
      break
    }

    case 'approve_payment': {
      const payment = appointment.payments[0]
      if (!payment) return Response.json({ error: 'No payment found' }, { status: 404 })
      await prisma.payments.update({
        where: { id: payment.id },
        data: { status: 'PAID', paid_at: new Date() },
      })
      result = await prisma.appointments.update({
        where: { id: params.id },
        data: { status: 'CONFIRMED', confirmed_at: new Date() },
      })
      break
    }

    case 'reject_payment': {
      const payment = appointment.payments[0]
      if (!payment) return Response.json({ error: 'No payment found' }, { status: 404 })
      result = await prisma.payments.update({
        where: { id: payment.id },
        data: { status: 'FAILED' },
      })
      break
    }

    default:
      return Response.json({ error: 'Unknown action' }, { status: 400 })
  }

  await prisma.audit_logs.create({
    data: {
      entity_type: 'appointment',
      entity_id: params.id,
      action: action.toUpperCase(),
      performed_by: session.user.email,
      details: { role: session.user.role, newDate, newTime },
    },
  })

  return Response.json(result)
}
