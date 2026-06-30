import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import SettingsForm from './SettingsForm'

export default async function SettingsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/dashboard/login')
  if (session.user.role !== 'doctor') redirect('/dashboard/appointments')

  let settings = await prisma.settings.findUnique({ where: { id: 1 } })

  if (!settings) {
    settings = await prisma.settings.create({
      data: {
        id: 1,
        consultation_start_time: new Date('1970-01-01T12:00:00.000Z'),
        consultation_end_time: new Date('1970-01-01T14:30:00.000Z'),
        slot_duration_minutes: 10,
        daily_patient_limit: 15,
      },
    })
  }

  const initial = {
    consultation_start_time: new Date(settings.consultation_start_time).toISOString().substring(11, 16),
    consultation_end_time: new Date(settings.consultation_end_time).toISOString().substring(11, 16),
    slot_duration_minutes: settings.slot_duration_minutes,
    daily_patient_limit: settings.daily_patient_limit,
  }

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-xl font-semibold text-gray-900 mb-6">Settings</h1>
      <SettingsForm initial={initial} />
    </div>
  )
}
