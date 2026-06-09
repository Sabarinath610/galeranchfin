import { Shield, FileText, Plane, Stamp } from 'lucide-react'

export const SITE_CONFIG = {
  name: 'Gale Ranch Finance',
  tagline: 'Your Financial Security, Simplified.',
  url: 'https://galeranchfin.com',
  phone: '(925) 858-2284',
  phoneHref: 'tel:+19258582284',
  email: 'govind@galeranchnotary.com',
  emailHref: 'mailto:govind@galeranchnotary.com',
  address: {
    city: 'San Ramon',
    state: 'CA',
    zip: '94582',
    full: 'San Ramon, CA 94582',
    region: 'Tri-Valley, Bay Area',
  },
  owner: {
    name: 'Govind Gopal',
    title: 'Financial Advisor & NNA-Certified Notary',
    credentials: [
      'NNA Certified Signing Agent',
      'Licensed Life & Health Insurance Agent (CA)',
      'Estate Planning Consultant',
    ],
    languages: ['English', 'Hindi', 'Tamil'],
  },
  social: {
    linkedin: 'https://linkedin.com/in/govindgopal',
    google: 'https://g.page/galeranchfinance',
  },
  hours: 'Mon–Fri: 9AM – 6PM PST',
  responseTime: 'Typically within 4 business hours',
  booking: 'https://calendly.com/govindgopal',
} as const

export const STATS = [
  { value: 500, suffix: '+',  label: 'Families Protected' },
  { value: 15,  suffix: '+',  label: 'Years of Experience' },
  { value: 50,  prefix: '$', suffix: 'M+', label: 'Coverage Placed' },
  { value: 4.9, suffix: '★', label: 'Google Rating' },
] as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Life Insurance',    href: '/services/life-insurance' },
      { label: 'Will & Trust',      href: '/services/will-trust' },
      { label: 'Travel Insurance',  href: '/services/travel-insurance' },
      { label: 'Apostille',         href: '/services/apostille' },
    ],
  },
  { label: 'About',   href: '/about' },
  { label: 'Blog',    href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const

export const SERVICES = [
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    href: '/services/life-insurance',
    icon: Shield,
    tagline: 'Tax-free protection for your family.',
    description:
      'Term, whole, and universal life insurance plans tailored for Bay Area families and NRI households with cross-border assets.',
    benefits: [
      'Tax-free death benefit for your beneficiaries',
      'Options for NRI families with US-based coverage',
      'Whole life plans that build cash value over time',
    ],
    metaTitle: 'Life Insurance in San Ramon, CA',
    metaDescription:
      'Govind Gopal offers personalized life insurance plans for Bay Area families. Term, whole, and universal life — tailored for NRI households.',
  },
  {
    id: 'will-trust',
    title: 'Will & Trust',
    href: '/services/will-trust',
    icon: FileText,
    tagline: 'Protect your estate. Honor your wishes.',
    description:
      'California-compliant will drafting and living trust setup — essential for families with real estate, retirement accounts, or overseas assets.',
    benefits: [
      'Avoid probate court — direct asset transfer',
      'Revocable living trusts for complete control',
      'Cross-border estate planning for NRI families',
    ],
    metaTitle: 'Will & Trust Services in San Ramon, CA',
    metaDescription:
      "Set up a will or living trust in California with Govind Gopal. Protect your family's estate and avoid probate. Serving San Ramon and the Tri-Valley.",
  },
  {
    id: 'travel-insurance',
    title: 'Travel Insurance',
    href: '/services/travel-insurance',
    icon: Plane,
    tagline: 'Coverage that follows you everywhere.',
    description:
      'Comprehensive travel protection for Bay Area families visiting India and beyond — medical coverage, trip cancellation, and evacuation.',
    benefits: [
      'International medical emergency coverage',
      'Trip cancellation and interruption protection',
      'Visitor insurance for parents visiting from India',
    ],
    metaTitle: 'Travel Insurance for NRI Families — San Ramon, CA',
    metaDescription:
      'Travel insurance for Bay Area NRI families visiting India and abroad. Medical coverage, trip cancellation, and visitor insurance. San Ramon, CA.',
  },
  {
    id: 'apostille',
    title: 'Apostille Services',
    href: '/services/apostille',
    icon: Stamp,
    tagline: 'Documents accepted worldwide.',
    description:
      'California apostille authentication for personal and business documents — fast, accurate, and ready for international use in 170+ countries.',
    benefits: [
      'Accepted in all Hague Convention countries',
      'Same-day and expedited service available',
      'OCI, PIO, and NRI document specialization',
    ],
    metaTitle: 'Apostille Services in San Ramon, CA',
    metaDescription:
      'Fast apostille authentication in California. Govind Gopal specializes in NRI, OCI, and international document apostilles. Serving San Ramon and Tri-Valley.',
  },
] as const

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Mehta',
    location: 'Fremont, CA',
    rating: 5,
    service: 'Life Insurance',
    quote:
      'Govind took the time to explain every option clearly. We now have coverage that actually makes sense for our situation as an NRI family with assets in both countries. I can finally stop worrying.',
  },
  {
    id: 2,
    name: 'Rajesh & Sunita Krishnan',
    location: 'Dublin, CA',
    rating: 5,
    service: 'Will & Trust',
    quote:
      "Setting up our living trust was something we kept postponing for years. Govind made the whole process straightforward. Two weeks later, our estate plan was complete. We wished we'd done this sooner.",
  },
  {
    id: 3,
    name: 'Anand Nair',
    location: 'San Ramon, CA',
    rating: 5,
    service: 'Apostille',
    quote:
      "Needed apostille documents for my parents' visa process. Govind handled everything efficiently and explained exactly what was needed. Documents were ready in two days. Exceptional service.",
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'What types of life insurance do you offer in California?',
    answer:
      'Govind offers term life insurance (10, 20, or 30-year coverage), whole life insurance (permanent with cash value), and universal life insurance (flexible premiums and death benefit). The right type depends on your age, family situation, and financial goals. During a free consultation, Govind analyzes your needs and recommends the most cost-effective plan.',
  },
  {
    question: 'Do I need a will if I already have life insurance?',
    answer:
      "Yes — life insurance and a will serve different purposes. Life insurance pays a tax-free benefit to your named beneficiaries directly. A will governs everything else: your property, bank accounts, guardianship of minor children, and personal assets. Without a will, California's intestate succession laws decide who gets what, which may not reflect your wishes.",
  },
  {
    question: 'What is the difference between a will and a living trust in California?',
    answer:
      'A will takes effect after you pass away and must go through probate court — a public, often lengthy process. A living trust takes effect immediately, allows you to manage your assets during your lifetime, and bypasses probate entirely when you pass. For families with real estate or significant assets in California, a living trust is almost always the better choice.',
  },
  {
    question: 'Can NRI families get US life insurance coverage?',
    answer:
      'Yes, in most cases. NRIs with a US visa, green card, or H1-B status can qualify for US life insurance, which often offers better rates and higher coverage limits than Indian policies. The application process requires a US address, medical exam, and proof of insurable interest. Govind specializes in helping NRI families navigate this process.',
  },
  {
    question: 'How long does an apostille take in California?',
    answer:
      "Standard California apostille processing takes 5–10 business days through the Secretary of State's office. Expedited service can reduce this to 2–3 business days. For urgent situations, same-day rush service is sometimes available. Govind handles the entire submission process and keeps you updated at every step.",
  },
  {
    question: 'What documents do I need to set up a living trust in California?',
    answer:
      "To set up a living trust, you'll need: a list of all assets you want to include (real estate, bank accounts, investment accounts, vehicles), the names and contact information for your beneficiaries, your choice of successor trustee (the person who manages the trust after you pass), and for married couples, decisions about joint vs. separate trusts. Govind guides you through every decision during the process.",
  },
  {
    question: 'Do you serve clients outside of San Ramon?',
    answer:
      'Yes. While Govind is based in San Ramon, he serves clients throughout the Tri-Valley — Dublin, Pleasanton, Danville, Livermore — as well as Fremont, the broader Bay Area, and can work remotely with NRI clients across California. Many services, including insurance consultations and trust planning, can be completed entirely over video call.',
  },
  {
    question: 'Is the initial consultation free? Is there any obligation?',
    answer:
      "Yes, the first consultation is completely free and carries zero obligation. Govind's goal is to understand your situation and explain your options clearly. If you decide to move forward, he'll outline exactly what the next steps involve and what everything costs — upfront, with no surprises. You can book a 30-minute call directly from this website.",
  },
] as const

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Free Consultation',
    description:
      'A 30-minute call with Govind to understand your family situation, goals, and financial picture. Zero obligation, zero pressure.',
    duration: '30 min',
  },
  {
    number: '02',
    title: 'Personalized Plan',
    description:
      'Govind builds a custom recommendation — specific products, coverage amounts, and timelines — tailored to your exact needs.',
    duration: '2–3 days',
  },
  {
    number: '03',
    title: 'Protected for Life',
    description:
      'Once your plan is in place, Govind remains your point of contact for reviews, updates, and new needs as your life changes.',
    duration: 'Ongoing',
  },
] as const

export const SERVICE_OPTIONS = [
  { value: 'life-insurance',   label: 'Life Insurance' },
  { value: 'will-trust',       label: 'Will & Trust' },
  { value: 'travel-insurance', label: 'Travel Insurance' },
  { value: 'apostille',        label: 'Apostille Services' },
  { value: 'real-estate',      label: 'Real Estate' },
  { value: 'general',          label: 'General Inquiry' },
] as const

export const REFERRAL_OPTIONS = [
  { value: 'google',    label: 'Google Search' },
  { value: 'referral',  label: 'Friend or Family Referral' },
  { value: 'social',    label: 'Social Media' },
  { value: 'community', label: 'Community Event' },
  { value: 'other',     label: 'Other' },
] as const
