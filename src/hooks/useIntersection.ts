'use client'
import { useEffect, useRef, useState } from 'react'

interface UseIntersectionOptions extends IntersectionObserverInit {
  triggerOnce?: boolean
}

export function useIntersection<T extends Element>(
  options: UseIntersectionOptions = {}
): [React.RefObject<T | null>, boolean] {
  const { triggerOnce = true, threshold = 0.15, rootMargin = '0px', ...rest } = options
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) observer.unobserve(element)
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin, ...rest }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce, rest])

  return [ref, isVisible]
}
