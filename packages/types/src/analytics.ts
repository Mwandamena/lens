import type { SocialPlatform } from "./social"

export type JobStatus = "queued" | "processing" | "completed" | "failed"

export interface AnalysisJob {
  id: string
  socialAccountId: string
  workspaceId: string
  status: JobStatus
  requestedBy: string   // userId
  startedAt: Date | null
  completedAt: Date | null
  error: string | null
}

export interface InsightReport {
  id: string
  socialAccountId: string
  workspaceId: string
  jobId: string
  generatedAt: Date
  summary: string          // AI-generated plain english summary
  metrics: CoreMetrics
  topCreators: CreatorStat[]      // for watch history analysis
  topTopics: TopicStat[]
  audienceInsights: AudienceInsights
  contentInsights: ContentInsights | null  // null if analyzing someone else's account
  predictions: Prediction[]
}

export interface CoreMetrics {
  totalWatchTimeMinutes: number
  totalVideosWatched: number
  averageSessionMinutes: number
  mostActiveHour: number          // 0-23
  mostActiveDayOfWeek: number     // 0-6
  dateRangeStart: Date
  dateRangeEnd: Date
}

export interface CreatorStat {
  platformAccountId: string
  handle: string
  displayName: string
  platform: SocialPlatform
  watchCount: number
  estimatedWatchMinutes: number
  niche: string             // AI-classified: "fitness", "tech", "comedy"
}

export interface TopicStat {
  topic: string             // AI-classified topic label
  intent: ContentIntent     // see below
  videoCount: number
  watchTimeMinutes: number
  trendDirection: "rising" | "stable" | "falling"
}

export type ContentIntent =
  | "educational"
  | "entertainment"
  | "inspirational"
  | "promotional"
  | "news"
  | "controversial"
  | "community"

export interface AudienceInsights {
  topCountries: CountryStat[]
  topLanguages: LanguageStat[]
  ageRangeEstimate: string | null    // "18-24" — only available via OAuth on own account
  genderSplit: GenderSplit | null    // same — API only
}

export interface CountryStat {
  countryCode: string      // "ZM", "US", "NG"
  percentage: number
}

export interface LanguageStat {
  languageCode: string
  percentage: number
}

export interface GenderSplit {
  male: number
  female: number
  other: number
}

export interface ContentInsights {
  averageEngagementRate: number
  topPerformingContentType: string
  bestPostingHour: number
  bestPostingDayOfWeek: number
  averageRetentionRate: number | null
  hookEffectivenessScore: number | null    // 0-100, AI-scored
}

export interface Prediction {
  id: string
  type: "best_time_to_post" | "trending_topic" | "engagement_forecast" | "churn_risk"
  confidence: number     // 0-1
  summary: string        // "Posting Tuesday at 7pm could increase reach by ~32%"
  validUntil: Date
}