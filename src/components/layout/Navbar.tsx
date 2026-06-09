'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { SITE_CONFIG, NAV_LINKS } from '@/constants'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const scrollY = useScrollPosition()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const isScrolled = scrollY > 20

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col focus-ring rounded-sm"
              aria-label={`${SITE_CONFIG.name} — home`}
            >
              <span className="font-display text-xl text-cream leading-none tracking-tight">
                {SITE_CONFIG.name}
              </span>
              <span className="font-mono text-[10px] text-gold tracking-[0.15em] uppercase mt-0.5">
                {SITE_CONFIG.address.city}, CA
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) =>
                'children' in link ? (
                  <div key={link.label} className="relative group">
                    <button
                      className="flex items-center gap-1 text-cream/80 hover:text-gold text-sm font-body tracking-wide transition-colors duration-200 focus-ring rounded-sm py-1"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onBlur={() => setServicesOpen(false)}
                    >
                      {link.label}
                      <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-52 bg-navy-deep border border-gold/20 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-sm text-cream/80 hover:text-gold hover:bg-white/5 transition-colors duration-150 first:rounded-t-sm last:rounded-b-sm focus-ring"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-cream/80 hover:text-gold text-sm font-body tracking-wide transition-colors duration-200 focus-ring rounded-sm py-1"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-2 text-cream/70 hover:text-gold text-sm font-mono transition-colors duration-200 focus-ring rounded-sm"
                aria-label={`Call ${SITE_CONFIG.phone}`}
              >
                <Phone size={14} aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open(SITE_CONFIG.booking, '_blank')}
              >
                Book Free Call
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-cream p-2 focus-ring rounded-sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          id="mobile-nav"
          className={cn(
            'lg:hidden bg-navy-deep border-t border-white/10 overflow-hidden transition-all duration-300',
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          )}
          aria-hidden={!mobileOpen}
        >
          <div className="section-container py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 px-2 text-cream/80 hover:text-gold font-body transition-colors duration-150 focus-ring rounded-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {'children' in link && link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2.5 pl-6 pr-2 text-sm text-cream/60 hover:text-gold font-body transition-colors duration-150 focus-ring rounded-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-2 text-cream/70 text-sm font-mono focus-ring rounded-sm"
              >
                <Phone size={14} aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  window.open(SITE_CONFIG.booking, '_blank')
                  setMobileOpen(false)
                }}
              >
                Book Free Call
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
