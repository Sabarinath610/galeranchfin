'use client'
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SITE_CONFIG } from '@/constants'

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Phone & Text',
    value: SITE_CONFIG.phone,
    href: SITE_CONFIG.phoneHref,
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE_CONFIG.email,
    href: SITE_CONFIG.emailHref,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: `${SITE_CONFIG.address.full}\n${SITE_CONFIG.address.region}`,
    href: SITE_CONFIG.social.google,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: SITE_CONFIG.hours,
    href: null,
  },
]

export function ContactInfo() {
  return (
    <div className="flex flex-col">
      <SectionLabel className="mb-4">Get in touch</SectionLabel>
      <TrustMeridian />
      <h1
        className="font-display text-navy tracking-tight mt-4 mb-4"
        style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: '1.1' }}
      >
        Let&apos;s talk about your family&apos;s future.
      </h1>
      <p className="text-ink-secondary leading-relaxed mb-10">
        Fill out the form and {SITE_CONFIG.owner.name.split(' ')[0]} will get back to you{' '}
        <strong className="text-ink font-medium">{SITE_CONFIG.responseTime.toLowerCase()}</strong>.
        Or book a free 30-minute call directly.
      </p>

      <div className="flex flex-col gap-6 mb-10">
        {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-sm bg-gold/10 border border-gold/20 text-gold shrink-0"
              aria-hidden="true"
            >
              <Icon size={16} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-mono text-xs text-gold uppercase tracking-widest mb-1">{label}</p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm text-ink-secondary hover:text-gold transition-colors duration-150 focus-ring rounded-sm whitespace-pre-line"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm text-ink-secondary whitespace-pre-line">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="primary"
        size="lg"
        leftIcon={<Calendar size={16} aria-hidden="true" />}
        className="w-full sm:w-auto justify-center"
        onClick={() => window.open(SITE_CONFIG.booking, '_blank')}
      >
        Book Free 30-Min Call
      </Button>
    </div>
  )
}

export default ContactInfo
