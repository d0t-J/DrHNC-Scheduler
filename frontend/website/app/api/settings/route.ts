import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db'
import { getAuthSession, unauthorized, forbidden } from '@/lib/session'

const DEFAULT_SETTINGS = {
  id: 1,
  consultation_start_time: new Date('1970-01-01T12:00:00.000Z'),
  consultation_end_time: new Date('1970-01-01T14:30:00.000Z'),
  slot_duration_minutes: 10,
  daily_patient_limit: 15,
}

export async function GET() {
  const session = await getAuthSession()
  if (!session) return unauthorized()

  let settings = await prisma.settings.findUnique({ where: { id: 1 } })

  if (!settings) {
    settings = await prisma.settings.create({ data: DEFAULT_SETTINGS })
  }

  return Response.json(settings)
}

export async function PATCH(req: NextRequest) {
  const session = await getAuthSession()
  if (!session) return unauthorized()
  if (session.user.role !== 'doctor') return forbidden()

  const body = await req.json()
  const { consultation_start_time, consultation_end_time, slot_duration_minutes, daily_patient_limit } = body

  if (slot_duration_minutes !== undefined && slot_duration_minutes <= 0) {
    return Response.json({ error: 'slot_duration_minutes must be positive' }, { status: 400 })
  }
  if (daily_patient_limit !== undefined && daily_patient_limit <= 0) {
    return Response.json({ error: 'daily_patient_limit must be positive' }, { status: 400 })
  }

  const data: Record<string, unknown> = {}
  if (consultation_start_time) data.consultation_start_time = new Date(`1970-01-01T${consultation_start_time}:00.000Z`)
  if (consultation_end_time) data.consultation_end_time = new Date(`1970-01-01T${consultation_end_time}:00.000Z`)
  if (slot_duration_minutes !== undefined) data.slot_duration_minutes = Number(slot_duration_minutes)
  if (daily_patient_limit !== undefined) data.daily_patient_limit = Number(daily_patient_limit)

  const settings = await prisma.settings.upsert({
    where: { id: 1 },
    create: { ...DEFAULT_SETTINGS, ...data },
    update: data,
  })

  await prisma.audit_logs.create({
    data: {
      entity_type: 'settings',
      entity_id: '00000000-0000-0000-0000-000000000001',
      action: 'UPDATE_SETTINGS',
      performed_by: session.user.email,
      details: { role: session.user.role, changes: JSON.parse(JSON.stringify(data)) },
    },
  })

  return Response.json(settings)
}
