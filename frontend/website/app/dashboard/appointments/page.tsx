import Link from 'next/link'
import { prisma } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { AppointmentStatusBadge, PaymentStatusBadge } from '@/components/dashboard/StatusBadge'

function formatDate(d: Date) {
  return new Date(d).toLocaleDateString('en-PK', { day: '2-digit', month: 'short', year: 'numeric' })
}

function formatTime(d: Date) {
  return new Date(d).toISOString().substring(11, 16)
}

export default async function AppointmentsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/dashboard/login')

  const appointments = await prisma.appointments.findMany({
    include: {
      patients: true,
      payments: { orderBy: { created_at: 'desc' }, take: 1 },
    },
    orderBy: [{ appointment_date: 'desc' }, { appointment_time: 'asc' }],
  })

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-900">Appointments</h1>
        <Link
          href="/dashboard/appointments/new"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          + New Appointment
        </Link>
      </div>

      {appointments.length === 0 ? (
        <div className="text-center py-16 text-gray-400 text-sm">No appointments yet.</div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-4 py-3 font-medium text-gray-600">Date</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Time</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Patient</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Phone</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Payment</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {appointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-700">{formatDate(appt.appointment_date)}</td>
                  <td className="px-4 py-3 text-gray-700 font-mono">{formatTime(appt.appointment_time)}</td>
                  <td className="px-4 py-3 text-gray-900 font-medium">{appt.patients.full_name || '—'}</td>
                  <td className="px-4 py-3 text-gray-600">{appt.patients.phone_number || '—'}</td>
                  <td className="px-4 py-3">
                    <AppointmentStatusBadge status={appt.status} />
                  </td>
                  <td className="px-4 py-3">
                    {appt.payments[0] ? (
                      <PaymentStatusBadge status={appt.payments[0].status} />
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/dashboard/appointments/${appt.id}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
