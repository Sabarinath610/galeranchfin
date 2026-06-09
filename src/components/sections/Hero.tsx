'use client'
import { ArrowRight, Star } from 'lucide-react'
import { Button, ButtonLink } from '@/components/ui/Button'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SITE_CONFIG, STATS } from '@/constants'
import { useCountUp } from '@/hooks/useCountUp'
import { useIntersection } from '@/hooks/useIntersection'

function StatCounter({
  value,
  prefix,
  suffix,
  label,
}: {
  value: number
  prefix?: string
  suffix?: string
  label: string
}) {
  const [ref, isVisible] = useIntersection<HTMLDivElement>()
  const count = useCountUp(value, 1800, isVisible)

  const displayValue =
    value % 1 !== 0
      ? isVisible ? count.toFixed(1) : '0.0'
      : String(count)

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl lg:text-4xl text-cream font-light tracking-tight">
        {prefix}
        {displayValue}
        {suffix && <span className="text-gold">{suffix}</span>}
      </div>
      <div className="font-mono text-xs text-cream/50 uppercase tracking-wider mt-1">{label}</div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-navy hero-pattern overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 80% 20%, rgba(19,40,72,0.8) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-gold fill-gold"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="font-mono text-xs text-cream/60 tracking-widest uppercase">
              4.9 Stars · Google Verified
            </span>
          </div>

          <TrustMeridian />

          <h1
            id="hero-heading"
            className="font-display text-cream leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
          >
            Your Financial
            <br />
            <span className="text-gold-gradient">Security,</span>
            <br />
            Simplified.
          </h1>

          <p className="text-cream/70 text-lg lg:text-xl leading-relaxed max-w-xl mb-10 animate-fade-up">
            Life insurance, estate planning, and apostille services for Bay Area families
            and NRI households — from a trusted advisor based in{' '}
            <strong className="text-cream/90 font-normal">San Ramon, CA</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight size={18} aria-hidden="true" />}
              onClick={() => window.open(SITE_CONFIG.booking, '_blank')}
            >
              Book Free Consultation
            </Button>
            <ButtonLink href="/services" variant="ghost" size="lg">Explore Services</ButtonLink>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-cream))' }}
      />
    </section>
  )
}

export default Hero
