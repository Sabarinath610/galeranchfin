import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  size?: Size
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  external?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold text-navy font-semibold hover:bg-gold-light active:scale-[0.98] shadow-sm hover:shadow-md',
  ghost:
    'bg-transparent text-gold border border-gold/40 hover:bg-gold/10 hover:border-gold active:scale-[0.98]',
  outline:
    'bg-transparent text-navy border border-navy/30 hover:bg-navy/5 hover:border-navy active:scale-[0.98]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-6 text-sm gap-2',
  lg: 'h-13 px-8 text-base gap-2.5',
}

const baseClasses =
  'inline-flex items-center justify-center rounded-sm tracking-widest uppercase font-body transition-all duration-200 focus-ring'

export function buttonClass(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className)
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        baseClasses,
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="animate-spin-slow" size={16} aria-hidden="true" />
      ) : (
        leftIcon
      )}
      {children}
      {!isLoading && rightIcon}
    </button>
  )
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className,
  children,
  external,
  ...props
}: ButtonLinkProps) {
  const cls = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    )
  }

  return (
    <Link href={href} className={cls} {...(props as object)}>
      {leftIcon}
      {children}
      {rightIcon}
    </Link>
  )
}

export default Button
