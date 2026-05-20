// src/api.ts

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export type ServiceName =
  | "auth"
  | "analytics"
  | "social"
  | "reports"
  | "gateway"

export interface ApiResponse<T> {
  success: true
  data: T
  meta: ResponseMeta
}

export interface ApiErrorResponse {
  success: false
  error: ApiError
  meta: ResponseMeta
}

export interface ResponseMeta {
  requestId: string         
  service: ServiceName      
  timestamp: string         
  version: string           
  duration?: number         
  pagination?: Pagination   
}

export interface Pagination {
  page: number
  pageSize: number
  total: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface ApiError {
  code: ErrorCode
  message: string           
  details?: Record<string, string[]> 
  stack?: string            
}

export type ErrorCode =
  | "UNAUTHORIZED"           
  | "FORBIDDEN"              
  | "NOT_FOUND"              
  | "VALIDATION_ERROR"       
  | "RATE_LIMITED"           
  | "PLAN_LIMIT_REACHED"     
  | "CONFLICT"               
  | "PLATFORM_API_ERROR"     
  | "ANALYSIS_FAILED"        
  | "INTERNAL_ERROR"         

export type ApiResult<T> = ApiResponse<T> | ApiErrorResponse