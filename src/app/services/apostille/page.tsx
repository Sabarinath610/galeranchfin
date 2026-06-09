import type { Metadata } from 'next'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { ButtonLink } from '@/components/ui/Button'
import { CTAStrip } from '@/components/sections/CTAStrip'
import { SERVICES, SITE_CONFIG } from '@/constants'

const service = SERVICES[3]

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

const PROCESS_STEPS = [
  { step: '01', title: 'Contact Govind', description: 'Send your documents or describe what you need. Govind confirms what type of apostille is required.' },
  { step: '02', title: 'Document prep', description: 'If notarization is needed before apostille, Govind handles that first as a certified NNA notary.' },
  { step: '03', title: 'Submission', description: "Documents are submitted to California's Secretary of State office. Govind handles the entire submission." },
  { step: '04', title: 'Delivery', description: 'Apostilled documents are delivered to you — by mail, pickup, or digital when applicable.' },
]

const TIMING = [
  { service: 'Standard processing', time: '5–10 business days' },
  { service: 'Expedited processing', time: '2–3 business days' },
  { service: 'Rush (when available)', time: 'Same day' },
]

export default function ApostillePage() {
  return (
    <PageWrapper>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-navy-deep text-cream">
        <div className="section-container">
          <ScrollReveal className="max-w-2xl">
            <SectionLabel className="mb-4">Apostille Services</SectionLabel>
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
          {/* Process */}
          <ScrollReveal className="mb-16">
            <h2 className="font-display text-2xl lg:text-3xl text-navy tracking-tight mb-10">
              How the process works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((s) => (
                <div key={s.step} className="flex flex-col">
                  <span className="font-mono text-3xl text-gold/30 font-bold mb-3">{s.step}</span>
                  <h3 className="font-display text-lg text-navy tracking-tight mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Timing */}
          <ScrollReveal className="mb-16">
            <h2 className="font-display text-2xl text-navy tracking-tight mb-6">Processing times</h2>
            <div className="overflow-hidden rounded-sm border border-cream-mist max-w-lg">
              {TIMING.map((t, i) => (
                <div key={t.service} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}>
                  <div className="flex items-center gap-3">
                    <Clock size={14} className="text-gold" aria-hidden="true" />
                    <span className="text-sm text-ink-secondary">{t.service}</span>
                  </div>
                  <span className="font-mono text-xs text-gold">{t.time}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-display text-2xl text-navy tracking-tight mb-6">Why choose Govind</h2>
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
              Request Apostille Service
            </ButtonLink>
          </ScrollReveal>
        </div>
      </section>

      <CTAStrip />
    </PageWrapper>
  )
}
