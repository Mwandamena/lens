import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const db = globalForPrisma.prisma ?? new PrismaClient({
  transactionOptions: {
    maxWait: 10000,
    timeout: 20000,
  },
  log: process.env.NODE_ENV === "development" ? ["query", "error"] : ["error"],
})

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db

export * from "@prisma/client"
