import { CheckCircle2, Languages, Heart, Award } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SITE_CONFIG } from '@/constants'

const REASONS = [
  {
    icon: Award,
    title: 'Multi-licensed expertise',
    description:
      'NNA-certified notary, licensed life & health insurance agent (CA), and estate planning consultant — all in one trusted advisor.',
  },
  {
    icon: Languages,
    title: 'Speaks your language',
    description: `Fluent in ${SITE_CONFIG.owner.languages.join(', ')}. Govind understands the unique financial and legal needs of NRI families.`,
  },
  {
    icon: Heart,
    title: 'Community-first approach',
    description:
      "No hard sell. Govind's goal is to educate and empower — helping you make confident decisions for your family's future.",
  },
  {
    icon: CheckCircle2,
    title: 'End-to-end support',
    description:
      'From the first consultation through policy review and annual check-ins — Govind stays your dedicated point of contact.',
  },
]

export function WhyGovind() {
  return (
    <section
      className="py-section-sm lg:py-section bg-navy-deep text-cream"
      aria-labelledby="why-govind-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: copy */}
          <ScrollReveal>
            <SectionLabel className="mb-4">Why Gale Ranch Finance</SectionLabel>
            <TrustMeridian className="mb-6" />
            <h2
              id="why-govind-heading"
              className="font-display text-cream mb-6 tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', lineHeight: '1.1' }}
            >
              A trusted advisor,
              <br />
              not just an agent.
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed max-w-lg">
              Govind Gopal spent 15+ years building relationships with Bay Area families
              — not selling policies. Every recommendation starts with understanding
              your family&apos;s full picture: assets in India, children in US schools,
              parents visiting from abroad.
            </p>
          </ScrollReveal>

          {/* Right: reasons grid */}
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REASONS.map((reason) => (
                <div key={reason.title} className="flex flex-col gap-3 p-6 border border-white/10 rounded-sm hover:border-gold/30 transition-colors duration-200">
                  <reason.icon
                    size={22}
                    className="text-gold"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-lg text-cream tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-cream/60 leading-relaxed">
                    {reason.description}
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

export default WhyGovind
