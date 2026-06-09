'use client'
import { useState } from 'react'
import { useForm, type UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '@/lib/validations'
import type { ContactFormData, FormState } from '@/types'

interface UseContactFormReturn {
  form: UseFormReturn<ContactFormData>
  formState: FormState
  onSubmit: (data: ContactFormData) => Promise<void>
  resetForm: () => void
}

export function useContactForm(): UseContactFormReturn {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' })

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      referral: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setFormState({ status: 'loading' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = (await response.json()) as { success: boolean; message?: string }

      if (!response.ok) {
        throw new Error(result.message ?? 'Something went wrong. Please try again.')
      }

      setFormState({ status: 'success', name: data.name.split(' ')[0] })
      form.reset()
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to send your message. Please call us directly.'
      setFormState({ status: 'error', message })
    }
  }

  const resetForm = () => {
    setFormState({ status: 'idle' })
    form.reset()
  }

  return { form, formState, onSubmit, resetForm }
}
