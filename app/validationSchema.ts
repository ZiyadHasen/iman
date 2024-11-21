import { z } from 'zod'
export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  name: z.string().min(5).max(100),
  phoneNumber1: z.string().regex(/^(?:\+251[1-9]\d{8}|09\d{8})$/, {
    message: 'Invalid Ethiopian phone number format.',
  }),
  phoneNumber2: z
    .string()
    .regex(/^(?:\+251[1-9]\d{8}|09\d{8})$/, {
      message: 'Invalid Ethiopian phone number format.',
    })
    .optional(),
})
