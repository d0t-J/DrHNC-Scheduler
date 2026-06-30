import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db'
import { getAuthSession, unauthorized } from '@/lib/session'

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getAuthSession()
  if (!session) return unauthorized()

  const { notes } = await req.json()

  const appointment = await prisma.appointments.update({
    where: { id: params.id },
    data: { notes: notes ?? null },
  })

  await prisma.audit_logs.create({
    data: {
      entity_type: 'appointment',
      entity_id: params.id,
      action: 'UPDATE_NOTES',
      performed_by: session.user.email,
      details: { role: session.user.role },
    },
  })

  return Response.json(appointment)
}
