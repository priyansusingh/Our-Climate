import { z } from 'zod'

export const pledgeSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().min(1, 'Description is required').max(500),
  category: z.string().min(1, 'Category is required')
})

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address')
})

export const carbonCalculatorSchema = z.object({
  transportation: z.number().min(0, 'Must be a positive number'),
  energy: z.number().min(0, 'Must be a positive number'),
  waste: z.number().min(0, 'Must be a positive number')
})