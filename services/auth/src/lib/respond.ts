import type { Response } from "express"
import { ApiResponse, ApiErrorResponse, ErrorCode, ServiceName, Pagination } from "@social-lens/types"


const SERVICE: ServiceName = "auth"
const VERSION = process.env.npm_package_version ?? "0.0.1"

export function sendSuccess<T>(
  res: Response,
  data: T,
  options: {
    status?: number
    requestId: string
    pagination?: Pagination
    duration?: number
  }
): void {
  const body: ApiResponse<T> = {
    success: true,
    data,
    meta: {
      requestId: options.requestId,
      service: SERVICE,
      timestamp: new Date().toISOString(),
      version: VERSION,
      duration: options.duration,
      pagination: options.pagination,
    },
  }
  res.status(options.status ?? 200).json(body)
}

export function sendError(
  res: Response,
  options: {
    code: ErrorCode
    message: string
    status: number
    requestId: string
    details?: Record<string, string[]>
    duration?: number
  }
): void {
  const body: ApiErrorResponse = {
    success: false,
    error: {
      code: options.code,
      message: options.message,
      details: options.details,
      stack: process.env.NODE_ENV === "development" ? new Error().stack : undefined,
    },
    meta: {
      requestId: options.requestId,
      service: SERVICE,
      timestamp: new Date().toISOString(),
      version: VERSION,
      duration: options.duration,
    },
  }
  res.status(options.status).json(body)
}