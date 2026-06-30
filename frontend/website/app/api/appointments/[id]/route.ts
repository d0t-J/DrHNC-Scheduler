import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db'
import { getAuthSession, unauthorized } from '@/lib/session'

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getAuthSession()
  if (!session) return unauthorized()

  const appointment = await prisma.appointments.findUnique({
    where: { id: params.id },
    include: {
      patients: true,
      payments: { orderBy: { created_at: 'desc' } },
    },
  })

  if (!appointment) return Response.json({ error: 'Not found' }, { status: 404 })

  // Fetch most recent non-CLOSED conversation for patient
  const conversation = await prisma.conversations.findFirst({
    where: {
      patient_id: appointment.patient_id,
      status: { not: 'CLOSED' },
    },
    orderBy: { created_at: 'desc' },
  })

  return Response.json({ ...appointment, conversation })
}
