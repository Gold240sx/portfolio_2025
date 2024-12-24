'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { cookies } from 'next/headers'
import { Customer } from '@/payload-types'

interface SignUpParams {
  firstName?: string
  lastName?: string
  email: string
  password: string
}

interface SignUpResponse {
  success: boolean
  error?: string
}

export type Result = {
  exp?: number
  token?: string
  user?: Customer
}

export async function SignUp({
  email,
  password,
  firstName,
  lastName,
}: SignUpParams): Promise<SignUpResponse> {
  const payload = await getPayload({ config })
  try {
    const result: Result = await payload.SignUp({
      collection: 'customers',
      data: { email, password },
    })

    if (result.token) {
      const cookieStore = await cookies()
      cookieStore.set('payload-token', result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
      })
      return { success: true }
    } else {
      return { success: false, error: 'Invalid email or password' }
    }
  } catch (error) {
    console.error('SignUp error', error)
    return { success: false, error: 'An error occurred' }
  }
}
