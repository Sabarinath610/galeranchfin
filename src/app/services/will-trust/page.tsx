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

const service = SERVICES[1]

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

const COMPARISON = [
  {
    aspect: 'Takes effect',
    will: 'After death only',
    trust: 'Immediately upon signing',
  },
  {
    aspect: 'Probate required',
    will: 'Yes — court process',
    trust: 'No — direct transfer',
  },
  {
    aspect: 'Privacy',
    will: 'Public record',
    trust: 'Completely private',
  },
  {
    aspect: 'Cost & time',
    will: 'Lower to create; probate is expensive',
    trust: 'Higher to create; saves cost & time later',
  },
  {
    aspect: 'Cross-border assets',
    will: 'Complex — each jurisdiction differs',
    trust: 'Can hold assets across jurisdictions',
  },
]

export default function WillTrustPage() {
  return (
    <PageWrapper>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-navy-deep text-cream">
        <div className="section-container">
          <ScrollReveal className="max-w-2xl">
            <SectionLabel className="mb-4">Will & Trust</SectionLabel>
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
          <ScrollReveal className="mb-16">
            <h2 className="font-display text-2xl lg:text-3xl text-navy tracking-tight mb-8">
              Will vs. Living Trust — which is right for you?
            </h2>
            <div className="overflow-x-auto rounded-sm border border-cream-mist">
              <table className="w-full text-sm" aria-label="Will versus Living Trust comparison">
                <thead>
                  <tr className="bg-navy text-cream">
                    <th className="text-left px-6 py-4 font-mono text-xs uppercase tracking-widest">Aspect</th>
                    <th className="text-left px-6 py-4 font-mono text-xs uppercase tracking-widest">Will</th>
                    <th className="text-left px-6 py-4 font-mono text-xs uppercase tracking-widest text-gold">Living Trust</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.aspect} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                      <td className="px-6 py-4 font-medium text-navy">{row.aspect}</td>
                      <td className="px-6 py-4 text-ink-secondary">{row.will}</td>
                      <td className="px-6 py-4 text-ink font-medium">{row.trust}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              Schedule Estate Planning Consultation
            </ButtonLink>
          </ScrollReveal>
        </div>
      </section>

      <CTAStrip />
    </PageWrapper>
  )
}
