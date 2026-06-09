export interface SiteConfig {
  name: string
  tagline: string
  url: string
  phone: string
  email: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  service: string
  message: string
  referral?: string
}

export type FormState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; name: string }
  | { status: 'error'; message: string }

export interface ApiResponse<T = void> {
  success: boolean
  message: string
  data?: T
}

export interface Service {
  id: string
  title: string
  href: string
  tagline: string
  description: string
  benefits: readonly string[]
  metaTitle: string
  metaDescription: string
}

export interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  service: string
  quote: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface NavChild {
  label: string
  href: string
}

export interface NavLink {
  label: string
  href: string
  children?: readonly NavChild[]
}

export interface Stat {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  duration: string
}

export interface SelectOption {
  value: string
  label: string
}
