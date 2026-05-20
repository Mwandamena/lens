import { createMiddleware } from "hono/factory"
import type { User } from "@social-lens/types"

const AUTH_SERVICE = process.env.AUTH_SERVICE_URL ?? "http://localhost:3001"

const PUBLIC_ROUTES = [
  "/auth/sign-in",
  "/auth/sign-up",
  "/auth/callback",
  "/health",
]

export const authMiddleware = createMiddleware<{
  Variables: {
    currentUser: User
    requestId: string
    startTime: number
  }
}>(async (c, next) => {
  const path = new URL(c.req.url).pathname

  const isPublic = PUBLIC_ROUTES.some((route) => path.startsWith(route))
  if (isPublic) {
    await next()
    return
  }

  const sessionRes = await fetch(`${AUTH_SERVICE}/me`, {
    headers: {
      cookie: c.req.header("cookie") ?? "",
      "x-request-id": c.get("requestId"),
    },
  })

  if (!sessionRes.ok) {
    return c.json(
      {
        success: false,
        error: {
          code: "UNAUTHORIZED",
          message: "Invalid or expired session",
        },
        meta: {
          requestId: c.get("requestId"),
          service: "gateway",
          timestamp: new Date().toISOString(),
          version: "0.0.1",
        },
      },
      401
    )
  }

  const { data } = await sessionRes.json<{ data: { user: User } }>()

  c.set("currentUser", data.user)

  await next()
})