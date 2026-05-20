import { Hono } from "hono"
import { serve } from "@hono/node-server"
import { cors } from "hono/cors"
import { secureHeaders } from "hono/secure-headers"
import { createLogger } from "@social-lens/logger"
import { requestIdMiddleware } from "./middleware/request-id.middleware"
import { authMiddleware } from "./middleware/auth.middleware"
import { proxyRouter } from "./routes/proxy.routes"
import { freeTierRateLimit } from "./middleware/rate.limit.middleware"
import type { User } from "@social-lens/types"

export type Env = {
  Variables: {
    requestId: string;
    currentUser?: User;
  };
  Bindings: {
    PORT: string;
    WEB_URL: string;
    NODE_ENV: string;
  };
}

const log = createLogger("gateway")
const app = new Hono<Env>()
const PORT = Number(process.env.PORT ?? 4000)

app.use(secureHeaders())

app.use(cors({
  origin: process.env.WEB_URL ?? "http://localhost:3000",
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,  
}))

app.use(requestIdMiddleware)

app.use(freeTierRateLimit)

app.use(authMiddleware)


app.get("/health", (c) => {
  return c.json({
    status: "ok",
    service: "gateway",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  })
})

app.route("/", proxyRouter)

app.notFound((c) => {
  return c.json(
    {
      success: false,
      error: {
        code: "NOT_FOUND",
        message: `Route ${c.req.method} ${c.req.path} does not exist`,
      },
      meta: {
        requestId: c.get("requestId"),
        service: "gateway",
        timestamp: new Date().toISOString(),
        version: "0.0.1",
      },
    },
    404
  )
})


app.onError((err, c) => {
  log.error({ err, requestId: c.get("requestId") }, "Unhandled gateway error")

  return c.json(
    {
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Gateway error",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
      },
      meta: {
        requestId: c.get("requestId"),
        service: "gateway",
        timestamp: new Date().toISOString(),
        version: "0.0.1",
      },
    },
    500
  )
})

serve({ fetch: app.fetch, port: PORT }, () => {
  log.info({ port: PORT }, "Gateway running")
})
