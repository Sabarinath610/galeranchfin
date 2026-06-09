import type { Metadata } from 'next'
import { Check, ArrowRight } from 'lucide-react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { ButtonLink } from '@/components/ui/Button'
import { CTAStrip } from '@/components/sections/CTAStrip'
import { SERVICES, SITE_CONFIG } from '@/constants'

const service = SERVICES[0]

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

const PLAN_TYPES = [
  {
    name: 'Term Life',
    description: 'Fixed coverage for 10, 20, or 30 years. The most affordable way to protect your family during your highest-earning, highest-obligation years.',
    best_for: 'Young families, mortgage holders, NRIs building US assets',
  },
  {
    name: 'Whole Life',
    description: 'Permanent coverage that never expires, with a guaranteed cash value component that grows tax-deferred over time.',
    best_for: 'Estate planning, business owners, wealth transfer strategies',
  },
  {
    name: 'Universal Life',
    description: 'Flexible premiums and adjustable death benefits. More control than whole life — ideal for complex financial situations.',
    best_for: 'High-income professionals, complex NRI asset structures',
  },
]

export default function LifeInsurancePage() {
  return (
    <PageWrapper>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-navy-deep text-cream">
        <div className="section-container">
          <ScrollReveal className="max-w-2xl">
            <SectionLabel className="mb-4">Life Insurance</SectionLabel>
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
            {PLAN_TYPES.map((plan) => (
              <div key={plan.name} className="p-8 bg-white border border-cream-mist rounded-sm">
                <h3 className="font-display text-xl text-navy tracking-tight mb-3">{plan.name}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed mb-4">{plan.description}</p>
                <p className="font-mono text-xs text-gold uppercase tracking-widest">{plan.best_for}</p>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-display text-2xl text-navy tracking-tight mb-6">Key benefits</h2>
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
              Get a Free Quote
            </ButtonLink>
          </ScrollReveal>
        </div>
      </section>

      <CTAStrip />
    </PageWrapper>
  )
}
