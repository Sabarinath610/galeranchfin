import { cn } from '@/lib/utils'

interface FormFieldProps {
  label: string
  error?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}

export function FormField({ label, error, required, className, children }: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {children}
    </div>
  )
}

export default FormField
