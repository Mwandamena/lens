export type UserRole = "owner" | "admin" | "analyst" | "viewer"

export type UserPlan = "free" | "pro" | "team" | "enterprise"

export interface User {
  id: string                    
  email: string
  displayName: string           
  avatarUrl: string | null      
  plan: UserPlan
  onboardingCompleted: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Member {
  id: string
  userId: string
  workspaceId: string
  role: UserRole
  joinedAt: Date
}

export interface Session {
  id: string
  userId: string
  expiresAt: Date
}