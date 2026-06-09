import type { Metadata } from 'next'
import { ArrowRight, Check } from 'lucide-react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { ButtonLink } from '@/components/ui/Button'
import { CTAStrip } from '@/components/sections/CTAStrip'
import { SERVICES, SITE_CONFIG } from '@/constants'

const service = SERVICES[2]

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

const COVERAGE_TYPES = [
  {
    title: 'Visitor Insurance',
    description: "For your parents or family members visiting from India. US medical care is expensive — a single emergency room visit can cost tens of thousands of dollars without coverage.",
  },
  {
    title: 'Trip Cancellation',
    description: "Protect your non-refundable flights and hotel bookings. If your trip is disrupted by illness, family emergencies, or covered events, you're reimbursed.",
  },
  {
    title: 'International Medical',
    description: "For Bay Area residents traveling abroad. Medical coverage that works globally — including India — with emergency evacuation if needed.",
  },
]

export default function TravelInsurancePage() {
  return (
    <PageWrapper>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-navy-deep text-cream">
        <div className="section-container">
          <ScrollReveal className="max-w-2xl">
            <SectionLabel className="mb-4">Travel Insurance</SectionLabel>
            <TrustMeridian />
            <ServiceIcon icon={service.icon} size="md" className="mt-4 mb-6" />
            <h1
              className="font-display text-cream tracking-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: '1.05' }}
            >
              {service.tagline}
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed">{service.description}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="section-container">
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {COVERAGE_TYPES.map((type) => (
              <div key={type.title} className="p-8 bg-white border border-cream-mist rounded-sm">
                <h3 className="font-display text-xl text-navy tracking-tight mb-3">{type.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{type.description}</p>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-display text-2xl text-navy tracking-tight mb-6">What&apos;s covered</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-2xl">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check size={16} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-ink-secondary">{benefit}</span>
                </li>
              ))}
            </ul>
            <ButtonLink
              href={SITE_CONFIG.booking}
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight size={18} aria-hidden="true" />}
              external
            >
              Get Travel Insurance Quote
            </ButtonLink>
          </ScrollReveal>
        </div>
      </section>

      <CTAStrip />
    </PageWrapper>
  )
}
