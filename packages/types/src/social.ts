export type SocialPlatform = 
  | "tiktok" 
  | "instagram" 
  | "youtube" 
  | "twitter" 
  | "linkedin"

export type ConnectionMethod = "oauth" | "data_export"

export type AccountStatus = "active" | "expired" | "disconnected" | "pending"

export interface SocialAccount {
  id: string
  workspaceId: string
  userId: string
  platform: SocialPlatform
  platformAccountId: string   
  handle: string              
  displayName: string
  avatarUrl: string | null
  connectionMethod: ConnectionMethod
  status: AccountStatus
  connectedAt: Date
  lastSyncedAt: Date | null
}

export interface OAuthToken {
  id: string
  socialAccountId: string
  accessToken: string         
  refreshToken: string | null 
  scopes: string[]
  expiresAt: Date | null
}

export interface DataExport {
  id: string
  socialAccountId: string
  platform: SocialPlatform
  status: "uploading" | "processing" | "completed" | "failed"
  uploadedAt: Date
  processedAt: Date | null
  error: string | null
}