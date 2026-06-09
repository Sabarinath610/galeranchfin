'use client'
import { Globe, Users, Landmark, FileCheck } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button, ButtonLink } from '@/components/ui/Button'
import { SITE_CONFIG } from '@/constants'

const NRI_NEEDS = [
  {
    icon: Globe,
    title: 'Cross-border assets',
    description: 'US real estate, Indian property, NRE/NRO accounts — Govind builds plans that account for your full financial picture across both countries.',
  },
  {
    icon: Users,
    title: 'Parents visiting from India',
    description: 'Visitor and travel insurance that provides real medical coverage for your parents while they visit — not just the bare minimum.',
  },
  {
    icon: Landmark,
    title: 'Estate planning for NRIs',
    description: "Living trusts and wills designed for families with assets in multiple jurisdictions — so your wishes are honored regardless of where they're held.",
  },
  {
    icon: FileCheck,
    title: 'OCI & apostille documents',
    description: 'Govind specializes in apostille authentication for OCI applications, PIO cards, and other NRI documentation requiring California state certification.',
  },
]

export function NRICommunity() {
  return (
    <section
      className="py-section-sm lg:py-section bg-navy hero-pattern"
      aria-labelledby="nri-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)' }}
      />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <ScrollReveal>
            <SectionLabel className="mb-4 text-gold">NRI families</SectionLabel>
            <TrustMeridian className="mb-6" />
            <h2
              id="nri-heading"
              className="font-display text-cream tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', lineHeight: '1.1' }}
            >
              Built for the Bay Area&apos;s Indian community.
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed mb-8">
              Govind understands your world — managing assets in two countries, bringing
              parents to visit, navigating US immigration while building wealth here.
              He speaks {SITE_CONFIG.owner.languages.join(', ')} and has spent 15 years
              serving the Tri-Valley&apos;s South Asian diaspora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => window.open(SITE_CONFIG.booking, '_blank')}
              >
                Book a Call
              </Button>
              <ButtonLink href="/contact" variant="ghost" size="md">Send a Message</ButtonLink>
            </div>
          </ScrollReveal>

          {/* Right: needs grid */}
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NRI_NEEDS.map((need) => (
                <div
                  key={need.title}
                  className="p-6 border border-white/10 rounded-sm hover:border-gold/30 transition-colors duration-200"
                >
                  <need.icon
                    size={20}
                    className="text-gold mb-4"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-cream text-lg tracking-tight mb-2">
                    {need.title}
                  </h3>
                  <p className="text-sm text-cream/50 leading-relaxed">
                    {need.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default NRICommunity
