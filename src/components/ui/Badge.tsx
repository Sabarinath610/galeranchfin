import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'navy' | 'cream'
  className?: string
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  gold:  'bg-gold/10 text-gold border border-gold/30',
  navy:  'bg-navy text-cream border border-navy',
  cream: 'bg-cream text-ink-secondary border border-cream-mist',
}

export function Badge({ children, variant = 'gold', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge
