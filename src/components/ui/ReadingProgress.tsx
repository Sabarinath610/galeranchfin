'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  // Reset on route change
  useEffect(() => { setProgress(0) }, [pathname])

  useEffect(() => {
    const controller = new AbortController()

    function update() {
      const scrollTop    = window.scrollY
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight
      const pct          = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
      setProgress(pct)
    }

    window.addEventListener('scroll', update, { passive: true, signal: controller.signal })
    update()

    return () => controller.abort()
  }, [])

  if (progress <= 0) return null

  return (
    <div
      role="progressbar"
      aria-label="Page reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-50 h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gold-gradient transition-[width] duration-100 ease-linear motion-reduce:transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ReadingProgress
