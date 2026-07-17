import { useEffect, useMemo, useState } from 'react'

export type TimeParts = { days: number; hours: number; minutes: number; seconds: number }

const split = (milliseconds: number): TimeParts => {
  const total = Math.max(0, Math.floor(milliseconds / 1000))
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  }
}

export function useElapsed(date: string) {
  const start = useMemo(() => new Date(date).getTime(), [date])
  const [time, setTime] = useState(() => split(Date.now() - start))
  useEffect(() => {
    const timer = window.setInterval(() => setTime(split(Date.now() - start)), 1000)
    return () => window.clearInterval(timer)
  }, [start])
  return time
}

export function daysUntil(date: string) {
  const now = new Date()
  const target = new Date(`${date}T00:00:00`)
  while (target < now) target.setFullYear(target.getFullYear() + 1)
  return Math.max(0, Math.ceil((target.getTime() - now.getTime()) / 86400000))
}
