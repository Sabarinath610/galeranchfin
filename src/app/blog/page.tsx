import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { CTAStrip } from '@/components/sections/CTAStrip'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Financial insights for Bay Area NRI families — life insurance, estate planning, apostille services, and more.',
}

const COMING_SOON_POSTS = [
  {
    title: 'Do NRI families need a US will? Everything you need to know',
    category: 'Estate Planning',
    date: 'Coming soon',
  },
  {
    title: 'Term vs. whole life insurance: which is right for your Bay Area family?',
    category: 'Life Insurance',
    date: 'Coming soon',
  },
  {
    title: 'How to get an apostille in California: a step-by-step guide',
    category: 'Apostille',
    date: 'Coming soon',
  },
  {
    title: 'Travel insurance for your parents visiting from India',
    category: 'Travel Insurance',
    date: 'Coming soon',
  },
  {
    title: 'Living trust vs. will in California: which one does your family need?',
    category: 'Estate Planning',
    date: 'Coming soon',
  },
  {
    title: 'OCI card and US estate planning: what NRIs need to know',
    category: 'NRI Finance',
    date: 'Coming soon',
  },
]

export default function BlogPage() {
  return (
    <PageWrapper>
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-cream">
        <div className="section-container">
          <ScrollReveal className="max-w-lg mb-16">
            <SectionLabel className="mb-4">Resources</SectionLabel>
            <TrustMeridian />
            <h1
              className="font-display text-navy tracking-tight mt-4"
              style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: '1.1' }}
            >
              Financial insights for Bay Area families.
            </h1>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMING_SOON_POSTS.map((post) => (
                <article
                  key={post.title}
                  className="flex flex-col p-8 bg-white border border-cream-mist rounded-sm"
                >
                  <span className="font-mono text-xs text-gold uppercase tracking-widest mb-4">
                    {post.category}
                  </span>
                  <h2 className="font-display text-lg text-navy tracking-tight leading-snug flex-1 mb-4">
                    {post.title}
                  </h2>
                  <span className="font-mono text-xs text-ink-tertiary">{post.date}</span>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTAStrip />
    </PageWrapper>
  )
}
