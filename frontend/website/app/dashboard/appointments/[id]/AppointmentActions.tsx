'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

const TIME_SLOTS: string[] = []
for (let h = 12; h <= 14; h++) {
  for (let m = 0; m < 60; m += 10) {
    if (h === 14 && m > 20) break
    TIME_SLOTS.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
  }
}

const TERMINAL_STATUSES = ['CANCELLED', 'NO_SHOW', 'CLOSED']

type Props = {
  appointmentId: string
  status: string
  role: string
  conversationStatus: string | null
  hasPayment: boolean
  notes: string
}

export default function AppointmentActions({ appointmentId, status, role, conversationStatus, hasPayment, notes }: Props) {
  const router = useRouter()
  const [notesValue, setNotesValue] = useState(notes)
  const [notesSaving, setNotesSaving] = useState(false)
  const [actionLoading, setActionLoading] = useState('')
  const [error, setError] = useState('')
  const [showReschedule, setShowReschedule] = useState(false)
  const [newDate, setNewDate] = useState('')
  const [newTime, setNewTime] = useState('')
  const notesTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isTerminal = TERMINAL_STATUSES.includes(status)
  const isDoctor = role === 'doctor'

  async function doAction(action: string, extra?: { newDate?: string; newTime?: string }) {
    setError('')
    setActionLoading(action)
    const res = await fetch(`/api/appointments/${appointmentId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...extra }),
    })
    setActionLoading('')
    if (!res.ok) {
      const data = await res.json()
      setError(data.error || 'Action failed.')
      return
    }
    router.refresh()
  }

  async function saveNotes(value: string) {
    setNotesSaving(true)
    await fetch(`/api/appointments/${appointmentId}/notes`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ notes: value }),
    })
    setNotesSaving(false)
  }

  function handleNotesChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const val = e.target.value
    setNotesValue(val)
    if (notesTimer.current) clearTimeout(notesTimer.current)
    notesTimer.current = setTimeout(() => saveNotes(val), 1200)
  }

  async function handleReschedule(e: React.FormEvent) {
    e.preventDefault()
    await doAction('reschedule', { newDate, newTime })
    setShowReschedule(false)
  }

  const btn = (label: string, action: string, style = 'default') => {
    const styles = {
      default: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
      danger: 'border border-red-300 text-red-700 hover:bg-red-50',
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      success: 'bg-green-600 text-white hover:bg-green-700',
    }[style]

    return (
      <button
        key={action}
        onClick={() => doAction(action)}
        disabled={!!actionLoading}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 ${styles}`}
      >
        {actionLoading === action ? 'Working…' : label}
      </button>
    )
  }

  return (
    <div className="space-y-4">
      {/* Notes */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Internal Notes</h2>
          {notesSaving && <span className="text-xs text-gray-400">Saving…</span>}
        </div>
        <textarea
          rows={4}
          value={notesValue}
          onChange={handleNotesChange}
          placeholder="Add notes visible to clinic staff only…"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      {/* Actions */}
      {!isTerminal && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Actions</h2>

          {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowReschedule(true)}
              disabled={!!actionLoading}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Reschedule
            </button>

            {btn('Cancel', 'cancel', 'danger')}
            {btn('No-Show', 'no_show', 'danger')}

            {conversationStatus !== 'ESCALATED'
              ? btn('Escalate', 'escalate', 'default')
              : isDoctor && btn('Resolve Escalation', 'resolve_escalation', 'success')}

            {isDoctor && hasPayment && (
              <>
                {btn('Approve Payment', 'approve_payment', 'success')}
                {btn('Reject Payment', 'reject_payment', 'danger')}
              </>
            )}
          </div>
        </div>
      )}

      {/* Reschedule modal */}
      {showReschedule && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Reschedule Appointment</h3>
            <form onSubmit={handleReschedule} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Date</label>
                <input
                  type="date"
                  required
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Time Slot</label>
                <select
                  required
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select slot</option>
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2 pt-1">
                <button
                  type="submit"
                  disabled={!!actionLoading}
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {actionLoading === 'reschedule' ? 'Saving…' : 'Confirm'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowReschedule(false)}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
