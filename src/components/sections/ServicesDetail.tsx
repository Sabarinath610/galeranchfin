import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SERVICES } from '@/constants'

export function ServicesDetail() {
  return (
    <section
      className="py-section-sm lg:py-section bg-white"
      aria-labelledby="services-detail-heading"
    >
      <div className="section-container">
        <ScrollReveal className="max-w-lg mb-16">
          <SectionLabel className="mb-4">Full service details</SectionLabel>
          <TrustMeridian />
          <h2
            id="services-detail-heading"
            className="font-display text-navy tracking-tight mt-4"
            style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: '1.1' }}
          >
            Everything your family needs, under one roof.
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-20">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <ServiceIcon icon={service.icon} size="lg" className="mb-6" />
                  <h3 className="font-display text-2xl lg:text-3xl text-navy tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-ink-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <Check
                          size={16}
                          className="text-gold shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-ink-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-mono text-xs text-gold uppercase tracking-widest hover:gap-3 transition-all duration-200 focus-ring rounded-sm"
                  >
                    Learn more about {service.title}
                    <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>

                {/* Visual placeholder */}
                <div
                  className={`hidden lg:flex items-center justify-center rounded-sm bg-navy/5 border border-cream-mist min-h-[280px] ${
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                  aria-hidden="true"
                >
                  <ServiceIcon icon={service.icon} size="lg" className="scale-150 opacity-20" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesDetail
