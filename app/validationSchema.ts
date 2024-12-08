import { z } from 'zod'

export const RegisterSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),

  name: z
    .string()
    .min(5, { message: 'Name must be at least 5 characters long.' })
    .max(100, { message: 'Name must not exceed 100 characters.' }),

  phoneNumber1: z.string().regex(/^(?:\+251[1-9]\d{8}|09\d{8})$/, {
    message: 'Invalid Ethiopian phone number format.',
  }),

  phoneNumber2: z
    .string()
    .regex(/^(?:\+251[1-9]\d{8}|09\d{8})$/, {
      message: 'Invalid Ethiopian phone number format.',
    })
    .optional(),

  // New Fields
  payingStyle: z.enum(['monthly', 'quarterly', 'yearly'], {
    message: 'Paying style must be either "Monthly" or "Yearly".',
  }),

  amount: z
    .number()
    .positive({ message: 'Amount must be a positive number.' })
    .min(100, { message: 'Amount must be at least 100.' }), // You can adjust this based on your business logic.

  role: z.enum(['OPERATOR', 'MEMBER'], {
    message: 'Invalid role type.',
  }),

  location: z
    .string()
    .min(3, { message: 'Location must be at least 3 characters long.' })
    .max(100, { message: 'Location must not exceed 100 characters.' }),
})
