export type WorkspacePlan = "free" | "pro" | "team" | "enterprise"

export interface Workspace {
  id: string
  name: string
  slug: string
  logoUrl: string | null
  plan: WorkspacePlan
  ownerId: string
  createdAt: Date
}

export interface WorkspaceBranding {
  workspaceId: string
  primaryColor: string
  logoUrl: string
  reportFooterText: string | null
}