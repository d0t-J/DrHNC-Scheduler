import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db'
import { getAuthSession, unauthorized } from '@/lib/session'

export async function GET() {
  const session = await getAuthSession()
  if (!session) return unauthorized()

  const appointments = await prisma.appointments.findMany({
    include: {
      patients: true,
      payments: { orderBy: { created_at: 'desc' }, take: 1 },
    },
    orderBy: [{ appointment_date: 'desc' }, { appointment_time: 'asc' }],
  })

  return Response.json(appointments)
}

export async function POST(req: NextRequest) {
  const session = await getAuthSession()
  if (!session) return unauthorized()

  const body = await req.json()
  const { phone_number, full_name, date_of_birth, gender, appointment_date, appointment_time, chief_complaint } = body

  if (!phone_number || !full_name || !appointment_date || !appointment_time) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Check slot availability
  const slotDate = new Date(appointment_date)
  const slotTime = new Date(`1970-01-01T${appointment_time}:00.000Z`)

  const existing = await prisma.appointments.count({
    where: {
      appointment_date: slotDate,
      appointment_time: slotTime,
      status: { notIn: ['CANCELLED', 'CLOSED'] },
    },
  })

  if (existing > 0) {
    return Response.json({ error: 'Slot already booked' }, { status: 409 })
  }

  // Find or create patient
  let patient = await prisma.patients.findFirst({
    where: { phone_number },
  })

  if (!patient) {
    patient = await prisma.patients.create({
      data: {
        channel: 'whatsapp',
        phone_number,
        full_name,
        date_of_birth: date_of_birth ? new Date(date_of_birth) : null,
        gender: gender || null,
      },
    })
  } else if (full_name) {
    patient = await prisma.patients.update({
      where: { id: patient.id },
      data: {
        full_name,
        ...(date_of_birth && { date_of_birth: new Date(date_of_birth) }),
        ...(gender && { gender }),
      },
    })
  }

  const appointment = await prisma.appointments.create({
    data: {
      patient_id: patient.id,
      appointment_date: slotDate,
      appointment_time: slotTime,
      status: 'NEW',
      notes: chief_complaint || null,
    },
    include: { patients: true },
  })

  await prisma.audit_logs.create({
    data: {
      entity_type: 'appointment',
      entity_id: appointment.id,
      action: 'CREATE',
      performed_by: session.user.email,
      details: { role: session.user.role },
    },
  })

  return Response.json(appointment, { status: 201 })
}
