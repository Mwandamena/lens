export type ReportFormat = "pdf" | "html" | "json" | "csv"

export type ReportFrequency = "once" | "weekly" | "monthly"

export interface ScheduledReport {
  id: string
  workspaceId: string
  name: string
  socialAccountIds: string[]
  frequency: ReportFrequency
  format: ReportFormat
  recipientEmails: string[]
  nextRunAt: Date
  lastRunAt: Date | null
  createdBy: string
}

export interface ReportDelivery {
  id: string
  scheduledReportId: string
  deliveredAt: Date
  fileUrl: string          // R2 presigned URL, expires
  status: "delivered" | "failed"
}