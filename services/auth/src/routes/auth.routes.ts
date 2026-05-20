import { Router, type Request, type Response } from "express"
import { auth } from "../auth.config"
import { validate } from "../middleware/validate.middleware"
import { asyncHandler } from "@social-lens/utils"
import { toNodeHandler } from "better-auth/node";
import { z } from "zod"
import { getMe, handleCreateWorkspace } from "../controller/auth.controller"

const router: Router = Router()

router.all("/auth/*", asyncHandler(toNodeHandler(auth)))

router.get("/me", asyncHandler(getMe))

router.post(
  "/workspaces",
  validate(z.object({ name: z.string().min(2).max(50) })),
  asyncHandler(handleCreateWorkspace)
)

export { router as authRouter }