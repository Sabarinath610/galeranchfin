'use client'
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  stagger?: boolean
  delay?: number
}

export function ScrollReveal({
  children,
  className,
  stagger = false,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => element.classList.add('is-visible'), delay)
          } else {
            element.classList.add('is-visible')
          }
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(stagger ? 'reveal-children' : 'reveal', className)}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
