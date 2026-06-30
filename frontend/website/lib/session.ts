import { getServerSession } from 'next-auth'
import { authOptions } from './auth'

export async function getAuthSession() {
  return getServerSession(authOptions)
}

export function unauthorized() {
  return Response.json({ error: 'Unauthorized' }, { status: 401 })
}

export function forbidden() {
  return Response.json({ error: 'Forbidden' }, { status: 403 })
}
