import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, MapPin, Users, Languages } from 'lucide-react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { CTAStrip } from '@/components/sections/CTAStrip'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'About Govind Gopal',
  description: `${SITE_CONFIG.owner.name} — ${SITE_CONFIG.owner.title} in San Ramon, CA. Serving Bay Area NRI families for 15+ years with life insurance, estate planning, and apostille services.`,
}

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-navy-deep text-cream">
        <div className="section-container">
          <ScrollReveal className="max-w-2xl">
            <SectionLabel className="mb-4">About</SectionLabel>
            <TrustMeridian />
            <h1
              className="font-display text-cream tracking-tight mt-4 mb-6"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', lineHeight: '1.05' }}
            >
              {SITE_CONFIG.owner.name}
            </h1>
            <p className="text-gold font-mono text-sm tracking-widest uppercase mb-6">
              {SITE_CONFIG.owner.title}
            </p>
            <p className="text-cream/60 text-lg leading-relaxed max-w-xl">
              A trusted financial advisor and notary serving the Bay Area&apos;s Indian
              community since 2009 — built on referrals, not ads.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h2 className="font-display text-2xl lg:text-3xl text-navy tracking-tight mb-6">
                15+ years of trust, built one family at a time.
              </h2>
              <div className="flex flex-col gap-4 text-ink-secondary leading-relaxed">
                <p>
                  Govind Gopal moved to the Bay Area in the early 2000s and quickly
                  recognized something that mainstream financial advisors often miss: NRI
                  families have a genuinely unique financial situation. Cross-border
                  assets, parents visiting on tourist visas, OCI documentation, and estate
                  plans that need to work across two legal systems.
                </p>
                <p>
                  He built his practice entirely around serving this community — becoming
                  licensed in life and health insurance, earning NNA certification as a
                  notary, and developing deep expertise in California apostille services
                  and estate planning for families with international ties.
                </p>
                <p>
                  Today, over 500 families in the Tri-Valley and Bay Area trust Govind
                  with their most important financial decisions. Most of his clients come
                  from referrals — a statistic he&apos;s proud of.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: Award, title: 'Credentials', items: SITE_CONFIG.owner.credentials },
                  { icon: Languages, title: 'Languages', items: SITE_CONFIG.owner.languages },
                  { icon: MapPin, title: 'Location', items: [`${SITE_CONFIG.address.full}`, SITE_CONFIG.address.region] },
                  { icon: Users, title: 'Clients served', items: ['500+ families protected', '15+ years experience', '$50M+ coverage placed'] },
                ].map(({ icon: Icon, title, items }) => (
                  <div key={title} className="p-6 bg-white border border-cream-mist rounded-sm">
                    <Icon size={20} className="text-gold mb-3" aria-hidden="true" strokeWidth={1.5} />
                    <h3 className="font-mono text-xs text-gold uppercase tracking-widest mb-3">{title}</h3>
                    <ul className="flex flex-col gap-1.5">
                      {items.map((item) => (
                        <li key={item} className="text-sm text-ink-secondary">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageWrapper>
  )
}
