const STATUS_STYLES: Record<string, string> = {
  NEW: 'bg-gray-100 text-gray-700',
  WAITING_FOR_DETAILS: 'bg-yellow-100 text-yellow-800',
  SLOT_PROPOSED: 'bg-blue-100 text-blue-800',
  RESERVED: 'bg-indigo-100 text-indigo-800',
  PAYMENT_PENDING: 'bg-orange-100 text-orange-800',
  PAYMENT_VERIFICATION_PENDING: 'bg-amber-100 text-amber-800',
  CONFIRMED: 'bg-green-100 text-green-800',
  RESCHEDULED: 'bg-purple-100 text-purple-800',
  CANCELLED: 'bg-red-100 text-red-700',
  NO_SHOW: 'bg-red-100 text-red-700',
  CLOSED: 'bg-gray-100 text-gray-500',
}

const PAYMENT_STYLES: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-800',
  PAID: 'bg-green-100 text-green-800',
  FAILED: 'bg-red-100 text-red-700',
  REFUNDED: 'bg-purple-100 text-purple-800',
}

export function AppointmentStatusBadge({ status }: { status: string }) {
  const style = STATUS_STYLES[status] ?? 'bg-gray-100 text-gray-700'
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${style}`}>
      {status.replace(/_/g, ' ')}
    </span>
  )
}

export function PaymentStatusBadge({ status }: { status: string }) {
  const style = PAYMENT_STYLES[status] ?? 'bg-gray-100 text-gray-700'
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${style}`}>
      {status}
    </span>
  )
}
