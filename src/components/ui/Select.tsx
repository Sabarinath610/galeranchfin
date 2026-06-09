import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import type { SelectOption } from '@/types'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: readonly SelectOption[]
  placeholder?: string
  error?: string
}

export function Select({
  label,
  options,
  placeholder = 'Select an option',
  error,
  id,
  className,
  ...props
}: SelectProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  const errorId  = `${selectId}-error`

  return (
    <div className="relative">
      <div className="relative">
        <select
          id={selectId}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'peer w-full appearance-none rounded-sm border bg-white/60 px-4 pt-6 pb-2',
            'text-ink text-sm font-body',
            'transition-colors duration-200',
            'focus-ring outline-none',
            error
              ? 'border-red-400 focus:border-red-500'
              : 'border-cream-mist focus:border-gold',
            className
          )}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <label
          htmlFor={selectId}
          className={cn(
            'absolute left-4 top-2 text-xs font-mono tracking-wide uppercase pointer-events-none',
            error ? 'text-red-500' : 'text-gold'
          )}
        >
          {label}
        </label>
        <ChevronDown
          size={16}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-tertiary pointer-events-none"
          aria-hidden="true"
        />
      </div>
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-500 font-body" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default Select
