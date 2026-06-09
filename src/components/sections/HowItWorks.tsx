'use client'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button, ButtonLink } from '@/components/ui/Button'
import { PROCESS_STEPS, SITE_CONFIG } from '@/constants'

export function HowItWorks() {
  return (
    <section
      className="py-section-sm lg:py-section bg-cream"
      aria-labelledby="how-it-works-heading"
    >
      <div className="section-container">
        <ScrollReveal className="max-w-lg mb-14">
          <SectionLabel className="mb-4">The process</SectionLabel>
          <TrustMeridian />
          <h2
            id="how-it-works-heading"
            className="font-display text-navy tracking-tight mt-4"
            style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: '1.1' }}
          >
            From first call to fully protected.
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.number} className="relative flex flex-col">
                {/* Connector line (desktop) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-5 left-full w-8 h-px bg-gold/30 -translate-y-px"
                    aria-hidden="true"
                  />
                )}

                <div className="flex items-start gap-4 mb-5">
                  <span className="font-mono text-4xl text-gold/30 font-bold leading-none select-none">
                    {step.number}
                  </span>
                  <div className="flex-1 pt-1">
                    <div className="font-mono text-xs text-gold tracking-widest uppercase mb-1">
                      {step.duration}
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-xl text-navy tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight size={18} aria-hidden="true" />}
            onClick={() => window.open(SITE_CONFIG.booking, '_blank')}
          >
            Book Your Free Call
          </Button>
          <ButtonLink href="/contact" variant="outline" size="lg">Send a Message</ButtonLink>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default HowItWorks
