import { createMiddleware } from "hono/factory"
import { randomUUID } from "crypto"

export const requestIdMiddleware = createMiddleware<{
  Variables: {
    requestId: string
    startTime: number
  }
}>(async (c, next) => {
  const requestId = c.req.header("x-request-id") ?? randomUUID()
  const startTime = Date.now()

  c.set("requestId", requestId)
  c.set("startTime", startTime)

  c.res.headers.set("x-request-id", requestId)

  await next()
})