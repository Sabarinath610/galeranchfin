import { cn } from '@/lib/utils'
import { type LucideIcon } from 'lucide-react'

interface ServiceIconProps {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap: Record<NonNullable<ServiceIconProps['size']>, { wrapper: string; icon: number }> = {
  sm: { wrapper: 'w-10 h-10',  icon: 18 },
  md: { wrapper: 'w-14 h-14',  icon: 24 },
  lg: { wrapper: 'w-18 h-18',  icon: 30 },
}

export function ServiceIcon({ icon: Icon, size = 'md', className }: ServiceIconProps) {
  const { wrapper, icon } = sizeMap[size]
  return (
    <div
      className={cn(
        wrapper,
        'flex items-center justify-center rounded-sm',
        'bg-gold/10 border border-gold/20 text-gold',
        'transition-colors duration-200 group-hover:bg-gold/20',
        className
      )}
      aria-hidden="true"
    >
      <Icon size={icon} strokeWidth={1.5} />
    </div>
  )
}

export default ServiceIcon
