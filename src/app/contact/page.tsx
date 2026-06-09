import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { ContactForm } from '@/components/contact/ContactForm'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Reach out to ${SITE_CONFIG.owner.name} for a free consultation on life insurance, estate planning, or apostille services. ${SITE_CONFIG.responseTime}.`,
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
