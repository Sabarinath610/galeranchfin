import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'font-mono text-gold text-xs tracking-[0.12em] uppercase font-medium',
        className
      )}
    >
      {children}
    </span>
  )
}

export default SectionLabel
