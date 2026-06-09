'use client'
import { useEffect, useState, useCallback } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const SHOW_AFTER_PX = 400

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [announced, setAnnounced] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    window.addEventListener(
      'scroll',
      () => {
        const shouldShow = window.scrollY > SHOW_AFTER_PX
        setVisible(shouldShow)
        // Announce once when it first appears so screen readers know it's there
        if (shouldShow && !announced) setAnnounced(true)
      },
      { passive: true, signal: controller.signal }
    )

    return () => controller.abort()
  }, [announced])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        scrollToTop()
      }
    },
    [scrollToTop]
  )

  return (
    <>
      {/* Live region tells screen readers when the button appears */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announced ? 'Scroll to top button is now available' : ''}
      </div>

      <button
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
        aria-label="Scroll back to the top of the page"
        title="Back to top"
        className={cn(
          // Layout & shape
          'fixed bottom-6 right-6 z-50',
          'w-11 h-11 flex items-center justify-center',
          'rounded-full shadow-lg',
          // Colors
          'bg-navy border border-gold/30 text-gold',
          // Hover / active
          'hover:bg-navy-light hover:border-gold hover:shadow-gold/20 hover:shadow-xl',
          'active:scale-95',
          // Focus ring
          'focus-ring',
          // Transitions
          'transition-all duration-300 ease-out',
          // Visibility — slide up from below + fade in
          visible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none',
          // Reduce motion: skip the translate animation
          'motion-reduce:translate-y-0 motion-reduce:transition-opacity'
        )}
        tabIndex={visible ? 0 : -1}
      >
        <ArrowUp size={18} strokeWidth={2} aria-hidden="true" />
      </button>
    </>
  )
}

export default ScrollToTop
