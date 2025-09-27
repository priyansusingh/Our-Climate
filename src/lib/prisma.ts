import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

// Use SSL mode explicitly if connecting to Neon
export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
