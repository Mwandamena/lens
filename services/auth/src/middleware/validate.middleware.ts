import type { Request, Response, NextFunction } from "express"
import { ZodSchema, ZodError } from "zod"
import { sendError } from "../lib/respond"

export function validate(
  schema: ZodSchema,
  source: "body" | "query" | "params" = "body"
) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[source])

    if (!result.success) {
      const details = formatZodErrors(result.error)
      sendError(res, {
        code: "VALIDATION_ERROR",
        message: "Request validation failed",
        status: 422,
        requestId: req.requestId,
        details,
      })
      return
    }

    req[source] = result.data
    next()
  }
}

function formatZodErrors(error: ZodError): Record<string, string[]> {
  return error.issues.reduce<Record<string, string[]>>((acc, issue) => {
    const key = issue.path.join(".") || "root"
    acc[key] = [...(acc[key] ?? []), issue.message]
    return acc
  }, {})
}