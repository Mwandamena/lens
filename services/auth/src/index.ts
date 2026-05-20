import express from "express"
import { Request, Response } from "express"
import { createLogger, createHttpLogger } from "@social-lens/logger"
import { requestIdMiddleware } from "./middleware/request-id.middleware"
import { errorMiddleware } from "./middleware/error.middleware"
import { authRouter } from "./routes/auth.routes"
import { sendNotFound } from "@social-lens/utils"
import { sendSuccess } from "./lib/respond"

const log = createLogger("auth")
const app = express()
const PORT = process.env.PORT ?? 3001

app.use(express.json())
app.use(createHttpLogger(log))
app.use(requestIdMiddleware)


app.get("/health", (_req: Request, res: Response) => {
  sendSuccess(res, { status: "ok", service: "auth", uptime: process.uptime() }, { requestId: _req.requestId })
})

app.use("/", authRouter)


// not found response
app.use((req: Request, res: Response) => {
  sendNotFound(res, req.originalUrl, { requestId: req.requestId })
})

// error response
app.use(errorMiddleware)

app.listen(PORT, () => {
  log.info({ port: PORT }, "Auth service running")
})

export { log }