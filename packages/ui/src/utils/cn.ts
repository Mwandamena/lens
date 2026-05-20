import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"

/**
 * Merges Tailwind classes safely.
 * - clsx handles conditionals and arrays
 * - twMerge resolves conflicting Tailwind classes (e.g. p-2 + p-4 → p-4)
 *
 * Usage:
 *   cn("px-4 py-2", isActive && "bg-brand", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}