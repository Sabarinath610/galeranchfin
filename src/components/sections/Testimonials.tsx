import { Star, Quote } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TESTIMONIALS } from '@/constants'

export function Testimonials() {
  return (
    <section
      className="py-section-sm lg:py-section bg-cream-mist"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-container">
        <ScrollReveal className="max-w-lg mb-14">
          <SectionLabel className="mb-4">Client stories</SectionLabel>
          <TrustMeridian />
          <h2
            id="testimonials-heading"
            className="font-display text-navy tracking-tight mt-4"
            style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: '1.1' }}
          >
            Trusted by Bay Area families.
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.id}
                className="flex flex-col p-8 bg-white border border-cream-mist rounded-sm hover:border-gold/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="flex">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-gold fill-gold"
                        aria-hidden="true"
                      />
                    ))}
                    <span className="sr-only">{t.rating} out of 5 stars</span>
                  </div>
                  <Quote
                    size={20}
                    className="text-gold/30"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                </div>

                <p className="text-ink-secondary leading-relaxed text-sm flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <footer className="flex items-center justify-between border-t border-cream-mist pt-5">
                  <div>
                    <cite className="not-italic font-display text-navy text-base tracking-tight">
                      {t.name}
                    </cite>
                    <p className="font-mono text-xs text-ink-tertiary mt-0.5">{t.location}</p>
                  </div>
                  <span className="font-mono text-xs text-gold uppercase tracking-wider">
                    {t.service}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Testimonials
