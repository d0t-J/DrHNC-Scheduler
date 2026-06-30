'use client'

import { useState } from 'react'

type Initial = {
  consultation_start_time: string
  consultation_end_time: string
  slot_duration_minutes: number
  daily_patient_limit: number
}

export default function SettingsForm({ initial }: { initial: Initial }) {
  const [form, setForm] = useState(initial)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  function set(field: string, value: string | number) {
    setForm((f) => ({ ...f, [field]: value }))
    setSuccess(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess(false)
    setLoading(true)

    const res = await fetch('/api/settings', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    setLoading(false)

    if (!res.ok) {
      const data = await res.json()
      setError(data.error || 'Failed to save.')
      return
    }

    setSuccess(true)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Consultation Start Time</label>
          <input
            type="time"
            required
            value={form.consultation_start_time}
            onChange={(e) => set('consultation_start_time', e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Consultation End Time</label>
          <input
            type="time"
            required
            value={form.consultation_end_time}
            onChange={(e) => set('consultation_end_time', e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slot Duration (minutes)</label>
          <input
            type="number"
            required
            min={1}
            max={60}
            value={form.slot_duration_minutes}
            onChange={(e) => set('slot_duration_minutes', Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Daily Patient Limit</label>
          <input
            type="number"
            required
            min={1}
            max={100}
            value={form.daily_patient_limit}
            onChange={(e) => set('daily_patient_limit', Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && <p className="text-sm text-green-600">Settings saved.</p>}

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        {loading ? 'Saving…' : 'Save Settings'}
      </button>
    </form>
  )
}
