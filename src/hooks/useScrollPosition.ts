'use client'
import { useState, useEffect } from 'react'

export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const controller = new AbortController()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
      signal: controller.signal,
    })

    return () => controller.abort()
  }, [])

  return scrollY
}
