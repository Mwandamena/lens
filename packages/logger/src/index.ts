import pino, { type Logger, type LoggerOptions } from "pino"
import { pinoHttp, type HttpLogger } from "pino-http"
import type { ServiceName } from "@social-lens/types"

const isDev = process.env.NODE_ENV !== "production"

const devOptions: LoggerOptions = {
  level: process.env.LOG_LEVEL ?? "info",
  formatters: {
    level: (label) => ({ level: label }),
  },
  base: {
    env: "development",
    version: process.env.npm_package_version ?? "0.0.1",
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  redact: {
    paths: [
      "*.password",
      "*.accessToken",
      "*.refreshToken",
      "*.secret",
      "*.token",
      "req.headers.authorization",
      "req.headers.cookie",
    ],
    censor: "[REDACTED]",
  },
}

const prodOptions: LoggerOptions = {
  level: process.env.LOG_LEVEL ?? "info",
  formatters: {
    level: (label) => ({ level: label }),
  },
  base: {
    env: "production",
    version: process.env.npm_package_version ?? "0.0.1",
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  redact: {
    paths: [
      "*.password",
      "*.accessToken",
      "*.refreshToken",
      "*.secret",
      "*.token",
      "req.headers.authorization",
      "req.headers.cookie",
    ],
    censor: "[REDACTED]",
  },
}

export function createLogger(service: ServiceName): Logger {
  const options = isDev ? devOptions : prodOptions
  return pino({
    ...options,
    base: {
      ...options.base,
      service,
    },
  })
}

export function createHttpLogger(logger: Logger): HttpLogger {
  return pinoHttp({
    logger,
    autoLogging: {
      ignore: (req) => req.url === "/health",
    },
    customSuccessMessage: (req, res) =>
      `${req.method} ${req.url} ${res.statusCode}`,
    customErrorMessage: (_req, _res, err) =>
      `${err.message}`,
    customProps: (req) => ({
      requestId: (req as any).requestId,
    }),
  })
}

export type { Logger }