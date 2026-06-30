import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    if (req.nextUrl.pathname === '/dashboard/login') {
      return NextResponse.redirect(new URL('/dashboard/appointments', req.url))
    }
  },
  {
    callbacks: {
      authorized({ token, req }) {
        if (req.nextUrl.pathname === '/dashboard/login') return true
        return !!token
      },
    },
  }
)

export const config = {
  matcher: ['/dashboard/:path*'],
}
