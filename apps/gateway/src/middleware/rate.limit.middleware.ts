import { rateLimiter } from "hono-rate-limiter"
import type { Env } from "../index"

export const freeTierRateLimit = rateLimiter<Env>({
  windowMs: 60 * 1000,          
  limit: 60,                    
  standardHeaders: "draft-6",   
  keyGenerator: (c) => {
    // TypeScript now knows 'currentUser' exists and has its proper Type
    const user = c.get("currentUser")
    if (user) return `user_${user.id}`
    
    return c.req.header("x-forwarded-for") ?? "anonymous"
  },
})

export const analysisTierRateLimit = rateLimiter<Env>({
  windowMs: 60 * 60 * 1000,    
  limit: 10,                 
  keyGenerator: (c) => {
    const user = c.get("currentUser")
    return user ? `analysis_${user.id}` : "anonymous"
  },
})