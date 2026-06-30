import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import './types'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const doctorEmail = process.env.DASHBOARD_DOCTOR_EMAIL
        const doctorHash = process.env.DASHBOARD_DOCTOR_PASSWORD_HASH
        const operatorEmail = process.env.DASHBOARD_OPERATOR_EMAIL
        const operatorHash = process.env.DASHBOARD_OPERATOR_PASSWORD_HASH

        if (credentials.email === doctorEmail && doctorHash) {
          const valid = await bcrypt.compare(credentials.password, doctorHash)
          if (valid) return { id: 'doctor', email: doctorEmail, role: 'doctor' }
        }

        if (credentials.email === operatorEmail && operatorHash) {
          const valid = await bcrypt.compare(credentials.password, operatorHash)
          if (valid) return { id: 'operator', email: operatorEmail, role: 'operator' }
        }

        return null
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/dashboard/login' },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = (user as { role: 'doctor' | 'operator' }).role
      return token
    },
    session({ session, token }) {
      if (session.user) session.user.role = token.role
      return session
    },
  },
}
