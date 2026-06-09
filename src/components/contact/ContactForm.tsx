'use client'
import { CheckCircle2, AlertCircle, RefreshCw, Phone } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { useContactForm } from '@/hooks/useContactForm'
import { SERVICE_OPTIONS, REFERRAL_OPTIONS, SITE_CONFIG } from '@/constants'

export function ContactForm() {
  const { form, formState, onSubmit, resetForm } = useContactForm()
  const { register, handleSubmit, formState: { errors } } = form

  if (formState.status === 'success') {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-sm border border-cream-mist min-h-[520px]"
        role="status"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-green-500" aria-hidden="true" />
        </div>
        <h2 className="font-display text-2xl text-navy tracking-tight mb-3">
          Got it, {formState.name}!
        </h2>
        <p className="text-ink-secondary leading-relaxed max-w-sm mb-8">
          Your message has been sent. {SITE_CONFIG.owner.name.split(' ')[0]} will be in touch within 4 business hours.
        </p>
        <button
          onClick={resetForm}
          className="inline-flex items-center gap-2 font-mono text-xs text-gold uppercase tracking-widest hover:gap-3 transition-all duration-200 focus-ring rounded-sm"
        >
          <RefreshCw size={13} aria-hidden="true" />
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-sm border border-cream-mist p-8 lg:p-10"
      noValidate
      aria-label="Contact form"
    >
      {formState.status === 'error' && (
        <div
          className="flex items-start gap-3 p-4 mb-6 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-medium mb-1">Message not sent</p>
            <p>{formState.message}</p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center gap-1.5 mt-2 font-mono text-xs underline"
            >
              <Phone size={11} aria-hidden="true" />
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <Input
          label="Full name"
          autoComplete="name"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email address"
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <Input
          label="Phone number (optional)"
          type="tel"
          autoComplete="tel"
          error={errors.phone?.message}
          hint="For a faster response"
          {...register('phone')}
        />
        <Select
          label="Service of interest"
          options={SERVICE_OPTIONS}
          placeholder="Select a service"
          error={errors.service?.message}
          {...register('service')}
        />
      </div>

      <div className="mb-5">
        <Textarea
          label="Message"
          rows={5}
          error={errors.message?.message}
          hint="Min. 20 characters — tell us about your situation"
          {...register('message')}
        />
      </div>

      <div className="mb-8">
        <Select
          label="How did you find us? (optional)"
          options={REFERRAL_OPTIONS}
          placeholder="Select an option"
          {...register('referral')}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={formState.status === 'loading'}
        className="w-full justify-center"
      >
        {formState.status === 'loading' ? 'Sending…' : 'Send Message'}
      </Button>

      <p className="text-xs text-ink-tertiary text-center mt-4 font-mono">
        {SITE_CONFIG.responseTime}. No spam, ever.
      </p>
    </form>
  )
}

export default ContactForm
