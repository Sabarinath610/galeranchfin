import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS, SERVICES } from '@/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep text-cream/70" role="contentinfo">
      {/* Main footer */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block focus-ring rounded-sm mb-4">
              <span className="font-display text-2xl text-cream leading-none tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-cream/60 mt-3 mb-6">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-2.5 hover:text-gold transition-colors duration-150 focus-ring rounded-sm"
              >
                <Phone size={14} className="text-gold shrink-0" aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={SITE_CONFIG.emailHref}
                className="flex items-center gap-2.5 hover:text-gold transition-colors duration-150 focus-ring rounded-sm"
              >
                <Mail size={14} className="text-gold shrink-0" aria-hidden="true" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={SITE_CONFIG.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-gold transition-colors duration-150 focus-ring rounded-sm"
                aria-label="View on Google Maps"
              >
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                {SITE_CONFIG.address.full}
              </a>
              <span className="flex items-center gap-2.5">
                <Clock size={14} className="text-gold shrink-0" aria-hidden="true" />
                {SITE_CONFIG.hours}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.12em] uppercase text-gold mb-5">Services</h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-gold transition-colors duration-150 focus-ring rounded-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.12em] uppercase text-gold mb-5">Company</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.filter((l) => !('children' in l)).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors duration-150 focus-ring rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-mono text-xs tracking-[0.12em] uppercase text-gold mb-5">About Govind</h3>
            <p className="text-sm leading-relaxed text-cream/60 mb-4">
              {SITE_CONFIG.owner.title} serving the Bay Area&apos;s NRI community for over 15 years.
            </p>
            <ul className="flex flex-col gap-2">
              {SITE_CONFIG.owner.credentials.map((cred) => (
                <li key={cred} className="flex items-start gap-2 text-xs text-cream/50">
                  <span className="text-gold mt-0.5" aria-hidden="true">—</span>
                  {cred}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <span className="font-mono text-xs text-cream/40 uppercase tracking-widest">Languages:</span>
              {SITE_CONFIG.owner.languages.map((lang, i) => (
                <span key={lang} className="font-mono text-xs text-cream/60">
                  {lang}{i < SITE_CONFIG.owner.languages.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40 font-mono">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/sitemap.xml" className="text-xs text-cream/40 hover:text-gold transition-colors duration-150 focus-ring rounded-sm">
              Sitemap
            </Link>
            <span className="text-xs text-cream/40">
              CA License #{' '}
              <span className="text-cream/60">0F12345</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
