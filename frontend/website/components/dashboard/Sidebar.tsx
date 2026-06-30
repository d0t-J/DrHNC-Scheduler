'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

export default function DashboardSidebar({ role }: { role?: string }) {
  const pathname = usePathname()

  const links = [
    { href: '/dashboard/appointments', label: 'Appointments' },
    ...(role === 'doctor' ? [{ href: '/dashboard/settings', label: 'Settings' }] : []),
  ]

  return (
    <aside className="w-56 shrink-0 bg-white border-r border-gray-200 flex flex-col min-h-screen">
      <div className="px-4 py-5 border-b border-gray-200">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dashboard</p>
        <p className="text-sm font-medium text-gray-700 mt-1 capitalize">{role}</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map(({ href, label }) => {
          const active = pathname?.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                active
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="px-3 py-4 border-t border-gray-200">
        <button
          onClick={() => signOut({ callbackUrl: '/dashboard/login' })}
          className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          Sign out
        </button>
      </div>
    </aside>
  )
}
