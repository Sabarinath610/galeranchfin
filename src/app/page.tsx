import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ServicesStrip } from '@/components/sections/ServicesStrip'
import { WhyGovind } from '@/components/sections/WhyGovind'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Testimonials } from '@/components/sections/Testimonials'
import { NRICommunity } from '@/components/sections/NRICommunity'
import { FAQ } from '@/components/sections/FAQ'
import { CTAStrip } from '@/components/sections/CTAStrip'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description:
    'Life insurance, will & trust, travel insurance, and apostille services for Bay Area NRI families. Free consultation. San Ramon, CA.',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FinancialService',
            name: SITE_CONFIG.name,
            description: SITE_CONFIG.tagline,
            url: SITE_CONFIG.url,
            telephone: SITE_CONFIG.phone,
            email: SITE_CONFIG.email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: SITE_CONFIG.address.city,
              addressRegion: SITE_CONFIG.address.state,
              postalCode: SITE_CONFIG.address.zip,
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 37.7799,
                longitude: -121.9780,
              },
              geoRadius: '50000',
            },
            openingHours: 'Mo-Fr 09:00-18:00',
            priceRange: 'Free consultation',
            founder: {
              '@type': 'Person',
              name: SITE_CONFIG.owner.name,
              jobTitle: SITE_CONFIG.owner.title,
            },
          }),
        }}
      />
      <Hero />
      <ServicesStrip />
      <WhyGovind />
      <HowItWorks />
      <Testimonials />
      <NRICommunity />
      <FAQ />
      <CTAStrip />
    </>
  )
}
