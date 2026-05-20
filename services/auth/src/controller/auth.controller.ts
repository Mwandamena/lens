import type { Request, Response } from "express"
import { createWorkspace, getWorkspacesForUser } from "../services/workspace.service"
import { auth } from "../auth.config"
import { log } from "../index"
import { sendValidationError } from "@social-lens/utils"
import { sendError, sendSuccess } from "../lib/respond"

export async function getMe(req: Request, res: Response): Promise<void> {
  const session = await auth.api.getSession({ headers: req.headers as any })

  if (!session) {
    sendError(res, {
      code: "UNAUTHORIZED",
      message: "No active session",
      status: 401,
      requestId: req.requestId,
      duration: Date.now() - req.startTime,
    })
    return
  }

  log.info({ userId: session.user.id, requestId: req.requestId }, "getMe")

  const workspaces = await getWorkspacesForUser(session.user.id)

  sendSuccess(res, { user: session.user, workspaces }, {
    requestId: req.requestId,
    duration: Date.now() - req.startTime,
  })
}

export async function handleCreateWorkspace(
  req: Request,
  res: Response
): Promise<void> {
  const session = await auth.api.getSession({ headers: req.headers as any })

  if (!session) {
    sendError(res, {
      code: "UNAUTHORIZED",
      message: "No active session",
      status: 401,
      requestId: req.requestId,
      duration: Date.now() - req.startTime,
    })
    return
  }

  log.info(
    { userId: session.user.id, name: req.body.name, requestId: req.requestId },
    "createWorkspace"
  )

  const workspace = await createWorkspace(session.user.id, req.body.name)

  sendSuccess(res, workspace, {
    status: 201,
    requestId: req.requestId,
    duration: Date.now() - req.startTime,
  })
}
