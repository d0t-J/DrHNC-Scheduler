import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import SessionProviderWrapper from '@/components/dashboard/SessionProviderWrapper'
import DashboardSidebar from '@/components/dashboard/Sidebar'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  return (
    <SessionProviderWrapper session={session}>
      {session ? (
        <div className="flex min-h-screen bg-gray-50">
          <DashboardSidebar role={session.user.role} />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          {children}
        </div>
      )}
    </SessionProviderWrapper>
  )
}
