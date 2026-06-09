import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { SERVICES } from '@/constants'

export function ServicesStrip() {
  return (
    <section
      className="py-20 lg:py-28 bg-cream"
      aria-labelledby="services-strip-heading"
    >
      <div className="section-container">
        <ScrollReveal className="text-center mb-14">
          <h2
            id="services-strip-heading"
            className="font-display text-3xl lg:text-4xl text-navy tracking-tight"
          >
            How We Protect Your Family
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group relative flex flex-col p-8 bg-white rounded-sm border border-cream-mist hover:border-gold/40 hover:shadow-lg transition-all duration-300 focus-ring"
              >
                <ServiceIcon icon={service.icon} size="md" className="mb-5" />
                <h3 className="font-display text-xl text-navy mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed flex-1 mb-4">
                  {service.tagline}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-gold uppercase tracking-widest transition-gap duration-200 group-hover:gap-2.5">
                  Learn more
                  <ArrowRight size={12} aria-hidden="true" />
                </span>

                {/* Hover accent */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-sm"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ServicesStrip
