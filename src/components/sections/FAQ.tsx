'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TrustMeridian } from '@/components/ui/TrustMeridian'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FAQ_ITEMS } from '@/constants'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  const id = `faq-${index}`
  const panelId = `faq-panel-${index}`

  return (
    <div className="border-b border-cream-mist last:border-b-0">
      <h3>
        <button
          id={id}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={cn(
            'w-full flex items-center justify-between gap-4 py-6 text-left',
            'font-display text-navy text-lg tracking-tight transition-colors duration-150',
            'hover:text-gold focus-ring rounded-sm',
            isOpen && 'text-gold'
          )}
        >
          {question}
          {isOpen
            ? <Minus size={18} className="shrink-0 text-gold" aria-hidden="true" />
            : <Plus size={18} className="shrink-0" aria-hidden="true" />
          }
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
        )}
      >
        <p className="text-ink-secondary leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      className="py-section-sm lg:py-section bg-cream"
      aria-labelledby="faq-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: heading */}
          <ScrollReveal className="lg:col-span-4">
            <SectionLabel className="mb-4">Common questions</SectionLabel>
            <TrustMeridian />
            <h2
              id="faq-heading"
              className="font-display text-navy tracking-tight mt-4"
              style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: '1.1' }}
            >
              Answers to questions we hear every week.
            </h2>
            <p className="text-ink-secondary leading-relaxed mt-4 text-sm">
              Still have questions? The first consultation is free — no obligation, no pressure.
            </p>
          </ScrollReveal>

          {/* Right: accordion */}
          <ScrollReveal className="lg:col-span-8">
            <div className="bg-white rounded-sm border border-cream-mist px-8 divide-y-0">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  index={index}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}

export default FAQ
