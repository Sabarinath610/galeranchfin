import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, DM_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { ReadingProgress } from '@/components/ui/ReadingProgress'
import { SITE_CONFIG } from '@/constants'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Life insurance, will & trust, travel insurance, and apostille services for Bay Area families and NRI households. Based in San Ramon, CA.',
  keywords: [
    'life insurance San Ramon',
    'will and trust California',
    'NRI life insurance Bay Area',
    'apostille San Ramon',
    'estate planning Tri-Valley',
    'travel insurance NRI families',
    'Govind Gopal financial advisor',
    'Gale Ranch Finance',
  ],
  authors: [{ name: SITE_CONFIG.owner.name }],
  creator: SITE_CONFIG.owner.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description:
      'Life insurance, estate planning, and apostille services for Bay Area families and NRI households. San Ramon, CA.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: 'Financial protection for Bay Area families. San Ramon, CA.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1F3A',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <ReadingProgress />
        <Navbar />
        <div className="flex-1 flex flex-col" id="main-content">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
