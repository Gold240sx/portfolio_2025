// DO NOT USE A "use client/server here"
import { z } from 'zod'

export const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})