import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export function calculateCarbonFootprint(data: {
  transportation: number
  energy: number
  waste: number
}): number {
  // Simplified calculation - you can make this more sophisticated
  const { transportation, energy, waste } = data
  return (transportation * 0.5) + (energy * 0.3) + (waste * 0.2)
}