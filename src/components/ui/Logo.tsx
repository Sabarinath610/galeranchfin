'use client'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SITE_CONFIG } from '@/constants'

interface LogoProps {
  width?: number
  height?: number
  /** Wrap in a white container so logo reads on dark navy backgrounds */
  onDark?: boolean
  className?: string
  priority?: boolean
}

export function Logo({
  width = 130,
  height = 44,
  onDark = false,
  className,
  priority = false,
}: LogoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className={cn('inline-flex flex-col flex-shrink-0', className)}>
        <span
          className={cn(
            'font-display text-xl leading-none tracking-tight',
            onDark ? 'text-cream' : 'text-navy'
          )}
        >
          {SITE_CONFIG.name}
        </span>
        <span className="font-mono text-[10px] text-gold tracking-[0.15em] uppercase mt-0.5">
          {SITE_CONFIG.address.city}, CA
        </span>
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center flex-shrink-0',
        onDark && 'bg-white/95 rounded px-2 py-1 shadow-sm',
        className
      )}
    >
      <Image
        src="/logo.png"
        alt={SITE_CONFIG.name}
        width={width}
        height={height}
        className="object-contain"
        priority={priority}
        onError={() => setFailed(true)}
      />
    </span>
  )
}

export default Logo
