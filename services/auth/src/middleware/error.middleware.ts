import type { Request, Response, NextFunction } from "express"
import { APIError } from "better-auth/api"
import {
  sendValidationError,
  sendInternalError,
  sendUnauthorized,
  sendForbidden,
  sendConflict,
  sendNotFound,
  sendRateLimited,
} from "@social-lens/utils"

export function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const duration = Date.now() - req.startTime
  const opts = { requestId: req.requestId, duration }

  if (err instanceof APIError) {
    switch (err.status) {
      case "UNAUTHORIZED":
        sendUnauthorized(res, { ...opts, message: err.message })
        return
      case "FORBIDDEN":
        sendForbidden(res, { ...opts, message: err.message })
        return
      case "NOT_FOUND":
        sendNotFound(res, err.message, opts)
        return
      case "UNPROCESSABLE_ENTITY":
        sendValidationError(res, {
          ...opts,
          message: err.message,
          details: { body: [err.message] },
        })
        return
      case "TOO_MANY_REQUESTS":
        sendRateLimited(res, { ...opts, message: err.message })
        return
      case "CONFLICT":
        sendConflict(res, err.message, opts)
        return
      default:
        sendInternalError(res, { ...opts, message: err.message })
        return
    }
  }

  if (err instanceof Error && err.name === "ZodError") {
    sendValidationError(res, {
      ...opts,
      details: { body: [err.message] },
    })
    return
  }

  if (isPrismaError(err)) {
    handlePrismaError(err, res, opts)
    return
  }

  console.error(err)
  sendInternalError(res, opts)
}


function isPrismaError(err: unknown): err is { code: string; meta?: { target?: string[] } } {
  return (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    typeof (err as any).code === "string" &&
    (err as any).code.startsWith("P")
  )
}

function handlePrismaError(
  err: { code: string; meta?: { target?: string[] } },
  res: Response,
  opts: { requestId: string; duration?: number }
): void {
  switch (err.code) {
    case "P2002": {
      const field = err.meta?.target?.[0] ?? "field"
      sendConflict(res, field, opts)
      return
    }
    case "P2025":
      sendNotFound(res, "Record", opts)
      return
    default:
      sendInternalError(res, opts)
  }
}
