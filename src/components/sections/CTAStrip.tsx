'use client'
import { ArrowRight, Phone } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button, ButtonLink } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/constants'

export function CTAStrip() {
  return (
    <section
      className="py-20 lg:py-24 bg-gold-gradient"
      aria-labelledby="cta-heading"
    >
      <div className="section-container">
        <ScrollReveal className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              id="cta-heading"
              className="font-display text-navy text-3xl lg:text-4xl tracking-tight mb-2"
            >
              Ready to protect your family?
            </h2>
            <p className="text-navy/70 text-lg">
              Free 30-minute consultation. No obligation. No hard sell.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button
              variant="outline"
              size="lg"
              className="border-navy/40 text-navy hover:bg-navy/10 hover:border-navy"
              rightIcon={<ArrowRight size={18} aria-hidden="true" />}
              onClick={() => window.open(SITE_CONFIG.booking, '_blank')}
            >
              Book Free Call
            </Button>
            <ButtonLink
              href={SITE_CONFIG.phoneHref}
              variant="ghost"
              size="lg"
              className="border-navy/30 text-navy hover:bg-navy/10"
              leftIcon={<Phone size={16} aria-hidden="true" />}
              external
            >
              {SITE_CONFIG.phone}
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CTAStrip
