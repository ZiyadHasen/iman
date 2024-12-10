import { z } from 'zod'

export const RegisterUserSchema = z.object({
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

  payingStyle: z.enum(['MONTHLY', 'QUARTERLY', 'YEARLY'], {
    message: 'Paying style must be either "Monthly" ,"Quarterly" or "Yearly".',
  }),

  pledgedAmount: z
    .number()
    .positive({ message: 'PledgedAmount must be a positive number.' })
    .min(100, { message: 'PledgedAmount must be at least 100.' }), // You can adjust this based on your business logic.

  location: z
    .string()
    .min(3, { message: 'Location must be at least 3 characters long.' })
    .max(100, { message: 'Location must not exceed 100 characters.' }),
})

//! the operator validation
export const RegisterOperatorSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),

  name: z
    .string()
    .min(5, { message: 'Name must be at least 5 characters long.' })
    .max(100, { message: 'Name must not exceed 100 characters.' }),

  password: z.string().min(5, {
    message: 'The length of the password must more that 5 character',
  }),
})
