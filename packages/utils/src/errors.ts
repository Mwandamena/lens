import type { Response } from "express"
import type { ErrorCode } from "@social-lens/types"

interface BaseErrorOptions {
  requestId: string
  duration?: number
  details?: Record<string, string[]>
}

interface ServiceErrorPayload {
  res: Response
  code: ErrorCode
  message: string
  status: number
  requestId: string
  duration?: number
  details?: Record<string, string[]>
}

// Internal — all named helpers delegate to this
function sendErrorResponse({
  res,
  code,
  message,
  status,
  requestId,
  duration,
  details,
}: ServiceErrorPayload): void {
  res.status(status).json({
    success: false,
    error: {
      code,
      message,
      details,
      stack: process.env.NODE_ENV === "development" ? new Error().stack : undefined,
    },
    meta: {
      requestId,
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version ?? "0.0.1",
      duration,
    },
  })
}

// ─── Named Error Helpers ───────────────────────────────────────────────────

export function sendNotFound(
  res: Response,
  resource: string,
  options: BaseErrorOptions
): void {
  sendErrorResponse({
    res,
    code: "NOT_FOUND",
    message: `${resource} not found`,
    status: 404,
    ...options,
  })
}

export function sendUnauthorized(
  res: Response,
  options: BaseErrorOptions & { message?: string }
): void {
  sendErrorResponse({
    res,
    code: "UNAUTHORIZED",
    message: options.message ?? "No active session",
    status: 401,
    ...options,
  })
}

export function sendForbidden(
  res: Response,
  options: BaseErrorOptions & { message?: string }
): void {
  sendErrorResponse({
    res,
    code: "FORBIDDEN",
    message: options.message ?? "You do not have permission to do this",
    status: 403,
    ...options,
  })
}

export function sendValidationError(
  res: Response,
  options: BaseErrorOptions & {
    details: Record<string, string[]>
    message?: string
  }
): void {
  sendErrorResponse({
    res,
    code: "VALIDATION_ERROR",
    message: options.message ?? "Request validation failed",
    status: 422,
    ...options,
  })
}

export function sendConflict(
  res: Response,
  resource: string,
  options: BaseErrorOptions
): void {
  sendErrorResponse({
    res,
    code: "CONFLICT",
    message: `${resource} already exists`,
    status: 409,
    ...options,
  })
}

export function sendRateLimited(
  res: Response,
  options: BaseErrorOptions & { message?: string }
): void {
  sendErrorResponse({
    res,
    code: "RATE_LIMITED",
    message: options.message ?? "Too many requests, slow down",
    status: 429,
    ...options,
  })
}

export function sendPlanLimitReached(
  res: Response,
  options: BaseErrorOptions & { message?: string }
): void {
  sendErrorResponse({
    res,
    code: "PLAN_LIMIT_REACHED",
    message: options.message ?? "You have reached your plan limit. Upgrade to continue.",
    status: 403,
    ...options,
  })
}

export function sendPlatformError(
  res: Response,
  platform: string,
  options: BaseErrorOptions & { message?: string }
): void {
  sendErrorResponse({
    res,
    code: "PLATFORM_API_ERROR",
    message: options.message ?? `${platform} returned an error, please try again`,
    status: 502,
    ...options,
  })
}

export function sendInternalError(
  res: Response,
  options: BaseErrorOptions & { message?: string }
): void {
  sendErrorResponse({
    res,
    code: "INTERNAL_ERROR",
    message: options.message ?? "Something went wrong",
    status: 500,
    ...options,
  })
}