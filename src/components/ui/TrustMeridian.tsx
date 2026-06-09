import { cn } from '@/lib/utils'

interface TrustMeridianProps {
  className?: string
}

export function TrustMeridian({ className }: TrustMeridianProps) {
  return (
    <span
      className={cn('trust-meridian', className)}
      aria-hidden="true"
    />
  )
}

export default TrustMeridian
