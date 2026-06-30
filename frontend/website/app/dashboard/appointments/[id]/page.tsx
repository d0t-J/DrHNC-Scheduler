import { prisma } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import AppointmentActions from './AppointmentActions'
import { AppointmentStatusBadge, PaymentStatusBadge } from '@/components/dashboard/StatusBadge'

function formatDate(d: Date) {
  return new Date(d).toLocaleDateString('en-PK', { day: '2-digit', month: 'long', year: 'numeric' })
}

function formatTime(d: Date) {
  return new Date(d).toISOString().substring(11, 16)
}

function formatDateTime(d: Date) {
  return new Date(d).toLocaleString('en-PK', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

export default async function AppointmentDetailPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/dashboard/login')

  const appointment = await prisma.appointments.findUnique({
    where: { id: params.id },
    include: {
      patients: true,
      payments: { orderBy: { created_at: 'desc' } },
    },
  })

  if (!appointment) notFound()

  const conversation = await prisma.conversations.findFirst({
    where: { patient_id: appointment.patient_id, status: { not: 'CLOSED' } },
    orderBy: { created_at: 'desc' },
  })

  const latestPayment = appointment.payments[0] ?? null

  return (
    <div className="p-6 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/dashboard/appointments" className="text-sm text-gray-500 hover:text-gray-700">
          ← Appointments
        </Link>
        <span className="text-gray-300">/</span>
        <h1 className="text-xl font-semibold text-gray-900">Appointment Detail</h1>
      </div>

      <div className="space-y-4">
        {/* Status header */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">
                {formatDate(appointment.appointment_date)} at {formatTime(appointment.appointment_time)}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <AppointmentStatusBadge status={appointment.status} />
                {latestPayment && <PaymentStatusBadge status={latestPayment.status} />}
                {conversation?.status === 'ESCALATED' && (
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-red-100 text-red-700">
                    ESCALATED
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Patient info */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Patient</h2>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div>
              <dt className="text-gray-500">Name</dt>
              <dd className="text-gray-900 font-medium">{appointment.patients.full_name || '—'}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Phone (WhatsApp)</dt>
              <dd className="text-gray-900">{appointment.patients.phone_number || '—'}</dd>
            </div>
            {(appointment.patients as { date_of_birth?: Date | null }).date_of_birth && (
              <div>
                <dt className="text-gray-500">Date of Birth</dt>
                <dd className="text-gray-900">{formatDate((appointment.patients as { date_of_birth: Date }).date_of_birth)}</dd>
              </div>
            )}
            {(appointment.patients as { gender?: string | null }).gender && (
              <div>
                <dt className="text-gray-500">Gender</dt>
                <dd className="text-gray-900">{(appointment.patients as { gender: string }).gender}</dd>
              </div>
            )}
          </dl>
        </div>

        {/* Payment info */}
        {latestPayment && (
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Payment</h2>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <div>
                <dt className="text-gray-500">Amount</dt>
                <dd className="text-gray-900 font-medium">{String(latestPayment.amount)} {latestPayment.currency}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Status</dt>
                <dd><PaymentStatusBadge status={latestPayment.status} /></dd>
              </div>
              {latestPayment.paid_at && (
                <div>
                  <dt className="text-gray-500">Paid at</dt>
                  <dd className="text-gray-900">{formatDateTime(latestPayment.paid_at)}</dd>
                </div>
              )}
              {latestPayment.gopayfast_reference && (
                <div>
                  <dt className="text-gray-500">GoPayFast Ref</dt>
                  <dd className="text-gray-900 font-mono text-xs">{latestPayment.gopayfast_reference}</dd>
                </div>
              )}
            </dl>
          </div>
        )}

        {/* Actions + Notes (client component) */}
        <AppointmentActions
          appointmentId={params.id}
          status={appointment.status}
          role={session.user.role}
          conversationStatus={conversation?.status ?? null}
          hasPayment={!!latestPayment}
          notes={appointment.notes ?? ''}
        />
      </div>
    </div>
  )
}
