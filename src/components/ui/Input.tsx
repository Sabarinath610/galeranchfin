import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  hint?: string
}

export function Input({ label, error, hint, id, className, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  const errorId = `${inputId}-error`
  const hintId  = `${inputId}-hint`

  return (
    <div className="relative">
      <input
        id={inputId}
        placeholder=" "
        aria-invalid={!!error}
        aria-describedby={cn(error && errorId, hint && hintId) || undefined}
        className={cn(
          'peer w-full rounded-sm border bg-white/60 px-4 pt-6 pb-2',
          'text-ink text-sm font-body placeholder-transparent',
          'transition-colors duration-200',
          'focus-ring outline-none',
          error
            ? 'border-red-400 focus:border-red-500'
            : 'border-cream-mist focus:border-gold',
          className
        )}
        {...props}
      />
      <label
        htmlFor={inputId}
        className={cn(
          'absolute left-4 text-ink-tertiary text-xs font-mono tracking-wide uppercase',
          'transition-all duration-200 pointer-events-none',
          'top-2',
          'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-body',
          'peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wide peer-focus:font-mono',
          error ? 'text-red-500' : 'peer-focus:text-gold'
        )}
      >
        {label}
      </label>
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-500 font-body" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-xs text-ink-tertiary font-body">
          {hint}
        </p>
      )}
    </div>
  )
}

export default Input
