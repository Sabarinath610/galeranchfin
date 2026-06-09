'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { SITE_CONFIG, NAV_LINKS } from '@/constants'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

export function Navbar() {
  const scrollY    = useScrollPosition()
  const pathname   = usePathname()
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const mobileNavRef = useRef<HTMLDivElement>(null)
  const menuBtnRef   = useRef<HTMLButtonElement>(null)

  // Only the homepage hero is dark — every other page has a light background.
  // On non-home pages always show the opaque navy bar so text stays readable.
  const isHomePage  = pathname === '/'
  const isScrolled  = scrollY > 20
  const showSolid   = !isHomePage || isScrolled

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Return focus to menu button when mobile nav closes
  useEffect(() => {
    if (!mobileOpen) menuBtnRef.current?.focus()
  }, [mobileOpen])

  // Trap focus inside mobile nav while it is open
  useEffect(() => {
    if (!mobileOpen) return
    const nav = mobileNavRef.current
    if (!nav) return

    const focusable = nav.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last  = focusable[focusable.length - 1]

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { setMobileOpen(false); return }
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus() }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    first?.focus()
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  return (
    <>
      {/* Skip-to-content — first focusable element in the document */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:outline-none"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          showSolid
            ? 'bg-navy-solid shadow-lg'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center focus-ring rounded-sm"
              aria-label={`${SITE_CONFIG.name} — go to homepage`}
            >
              <Logo width={110} height={36} onDark priority />
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) =>
                'children' in link ? (
                  <div key={link.label} className="relative group">
                    <button
                      className="flex items-center gap-1 text-cream/80 hover:text-gold text-sm font-body tracking-wide transition-colors duration-200 focus-ring rounded-sm py-1"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180"
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className="absolute top-full left-0 mt-2 w-52 bg-navy-deep border border-gold/20 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      role="menu"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
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
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className={cn(
                      'text-sm font-body tracking-wide transition-colors duration-200 focus-ring rounded-sm py-1',
                      pathname === link.href ? 'text-gold' : 'text-cream/80 hover:text-gold'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-2 text-cream/70 hover:text-gold text-sm font-mono transition-colors duration-200 focus-ring rounded-sm"
                aria-label={`Call us at ${SITE_CONFIG.phone}`}
              >
                <Phone size={14} aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open(SITE_CONFIG.booking, '_blank')}
                aria-label="Book a free consultation call"
              >
                Book Free Call
              </Button>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              ref={menuBtnRef}
              className="lg:hidden text-cream p-2 focus-ring rounded-sm"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen
                ? <X size={22} aria-hidden="true" />
                : <Menu size={22} aria-hidden="true" />
              }
            </button>
          </div>
        </div>

        {/* ── Mobile nav ── */}
        <div
          id="mobile-nav"
          ref={mobileNavRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={cn(
            'lg:hidden bg-navy-deep border-t border-white/10 overflow-hidden transition-all duration-300',
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          )}
        >
          <div className="section-container py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={cn(
                    'block py-3 px-2 font-body transition-colors duration-150 focus-ring rounded-sm',
                    pathname === link.href ? 'text-gold' : 'text-cream/80 hover:text-gold'
                  )}
                  onClick={() => setMobileOpen(false)}
                  tabIndex={mobileOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
                {'children' in link && link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    aria-current={pathname === child.href ? 'page' : undefined}
                    className={cn(
                      'block py-2.5 pl-6 pr-2 text-sm font-body transition-colors duration-150 focus-ring rounded-sm',
                      pathname === child.href ? 'text-gold' : 'text-cream/60 hover:text-gold'
                    )}
                    onClick={() => setMobileOpen(false)}
                    tabIndex={mobileOpen ? 0 : -1}
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
                tabIndex={mobileOpen ? 0 : -1}
              >
                <Phone size={14} aria-hidden="true" />
                {SITE_CONFIG.phone}
              </a>
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                tabIndex={mobileOpen ? 0 : -1}
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
