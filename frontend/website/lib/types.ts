export type DashboardRole = 'doctor' | 'operator'

declare module 'next-auth' {
  interface Session {
    user: {
      email: string
      role: DashboardRole
    }
  }
  interface User {
    id: string
    email: string
    role: DashboardRole
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: DashboardRole
  }
}
