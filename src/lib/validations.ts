import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .regex(/^[\d\s\(\)\-\+\.]*$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  service: z
    .string()
    .min(1, 'Please select a service'),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(2000, 'Message is too long')
    .trim(),
  referral: z
    .string()
    .optional()
    .or(z.literal('')),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>
