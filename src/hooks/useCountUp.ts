'use client'
import { useEffect, useState } from 'react'

export function useCountUp(
  target: number,
  duration: number = 1500,
  isActive: boolean = false
): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const startTime = performance.now()

    function easeOutQuart(t: number): number {
      return 1 - Math.pow(1 - t, 4)
    }

    function tick(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuart(progress)
      const current = Math.round((target - 0) * eased)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [target, duration, isActive])

  return count
}
