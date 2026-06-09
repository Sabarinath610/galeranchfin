# Gale Ranch Finance

Professional financial services website for **Govind Gopal** — independent financial advisor, NNA-certified notary, and estate planning consultant based in San Ramon, CA.

**Live site:** [galeranchfin.com](https://galeranchfin.com)

---

## What this site does

- Presents Govind's services: Life Insurance, Will & Trust, Travel Insurance, Apostille
- Contact form that emails Govind via [Resend](https://resend.com) — no database, no storage
- Static-first: every page prerendered at build time except the `/api/contact` route
- Full SEO: `metadata` API, JSON-LD structured data, sitemap, robots

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript strict) |
| Styling | Tailwind CSS v4 — `@theme` in CSS, no config file |
| Fonts | `next/font` — Cormorant Garamond, Inter, DM Mono |
| Icons | lucide-react |
| Forms | react-hook-form + zod v4 |
| Email | Resend |
| Utilities | clsx + tailwind-merge via `cn()` |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              Root layout: fonts, metadata, Navbar, Footer
│   ├── globals.css             Tailwind v4 @theme design tokens + utilities
│   ├── page.tsx                Homepage (composes section components)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── blog/page.tsx
│   ├── services/
│   │   ├── life-insurance/page.tsx
│   │   ├── will-trust/page.tsx
│   │   ├── travel-insurance/page.tsx
│   │   └── apostille/page.tsx
│   ├── api/contact/route.ts    POST only — validates, sends 2 emails, no DB
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── ui/                     Dumb reusable primitives
│   │   ├── Button.tsx          variants: primary | ghost | outline
│   │   ├── ButtonLink.tsx      (exported from Button.tsx)
│   │   ├── Input.tsx           Floating label + error state
│   │   ├── Textarea.tsx        Floating label + error state
│   │   ├── Select.tsx          Custom styled dropdown
│   │   ├── Badge.tsx
│   │   ├── TrustMeridian.tsx   Signature 48px gold hairline
│   │   ├── SectionLabel.tsx    DM Mono eyebrow label
│   │   ├── ServiceIcon.tsx     Lucide icon wrapper with gold styling
│   │   ├── ScrollReveal.tsx    IntersectionObserver-powered fade-up
│   │   ├── ScrollToTop.tsx     Fixed button, appears after 400px scroll
│   │   └── ReadingProgress.tsx Thin gold progress bar at page top
│   │
│   ├── layout/
│   │   ├── Navbar.tsx          Sticky + scroll-aware + mobile menu (focus-trapped)
│   │   ├── Footer.tsx          4-column layout
│   │   └── PageWrapper.tsx
│   │
│   ├── sections/               Homepage sections (Hero → CTAStrip)
│   │   ├── Hero.tsx
│   │   ├── ServicesStrip.tsx
│   │   ├── WhyGovind.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ServicesDetail.tsx
│   │   ├── NRICommunity.tsx
│   │   ├── FAQ.tsx             Accordion + FAQ JSON-LD
│   │   └── CTAStrip.tsx
│   │
│   └── contact/
│       ├── ContactForm.tsx     'use client' — useContactForm hook
│       ├── ContactInfo.tsx     Address, phone, hours, Calendly CTA
│       └── FormField.tsx
│
├── hooks/
│   ├── useScrollPosition.ts
│   ├── useIntersection.ts
│   ├── useCountUp.ts
│   └── useContactForm.ts      All form logic + submission state machine
│
├── lib/
│   ├── utils.ts               cn(), formatPhone(), truncate(), slugify()
│   ├── validations.ts         Zod schema for contact form
│   └── email.ts               Resend — admin notification + auto-reply
│
├── constants/index.ts         ALL site data — zero magic strings in JSX
└── types/index.ts             Shared TypeScript interfaces
```

---

## Local development

### 1. Clone and install

```bash
git clone https://github.com/your-org/gale-ranch-finance.git
cd gale-ranch-finance
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

Get your API key at [resend.com/api-keys](https://resend.com/api-keys).

> **Domain verification required.**  
> Add `galeranchfin.com` as a verified domain in your Resend dashboard before emails will send. During local development you can use a Resend sandbox address for `to:`.

### 3. Run

```bash
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build locally
npm run lint       # ESLint
```

---

## Deployment (Vercel — recommended)

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add `RESEND_API_KEY` in **Project → Settings → Environment Variables**
4. Deploy — Vercel detects Next.js automatically

The contact API route (`/api/contact`) is serverless and works out of the box on Vercel's Edge/Node runtime.

---

## Design system

All tokens live in `src/app/globals.css` under `@theme inline`. Tailwind v4 reads them as utility classes automatically.

| Token | Value | Tailwind class |
|---|---|---|
| Navy (primary) | `#0B1F3A` | `bg-navy`, `text-navy` |
| Navy deep | `#060F1E` | `bg-navy-deep` |
| Gold (accent) | `#C9A84C` | `bg-gold`, `text-gold` |
| Gold light | `#E8C97A` | `bg-gold-light` |
| Cream (page bg) | `#FAF7F2` | `bg-cream` |
| Ink (body text) | `#0B1F3A` | `text-ink` |
| Ink secondary | `#4A5568` | `text-ink-secondary` |

**Fonts**

| Role | Face | CSS variable |
|---|---|---|
| Display / headings | Cormorant Garamond | `--font-cormorant` → `font-display` |
| Body | Inter | `--font-inter` → `font-body` |
| Mono / labels | DM Mono | `--font-dm-mono` → `font-mono` |

**Signature element:** `.trust-meridian` — a 48 × 1.5px gold hairline used above credentialed section headings.

---

## Contact form architecture

```
User submits form
  → react-hook-form + zod validation (client)
  → POST /api/contact
      → zod.safeParse (server — second validation)
      → Rate limit: 3 requests per IP per 10 min
      → Promise.allSettled([
          sendContactNotification(data),  // → Govind's inbox
          sendAutoReply(data),            // → visitor's inbox
        ])
      → Notification failure = 500 (critical)
      → Auto-reply failure   = logged, non-critical
  → FormState discriminated union drives UI:
      idle | loading | success | error
```

No database. No logging service. No third-party analytics. Just two emails.

---

## Accessibility

- Skip-to-content link (first focusable element)
- `aria-current="page"` on active nav links
- Focus trap + `Escape` key close on mobile menu
- `role="dialog" aria-modal="true"` on mobile nav
- `aria-live="polite"` status regions for form feedback and scroll-to-top
- `role="progressbar"` on reading progress indicator
- `tabIndex={-1}` on hidden mobile nav items (not reachable when closed)
- `prefers-reduced-motion` respected on all animations
- Colour contrast ≥ 4.5:1 on all text
- Heading hierarchy: `h1 → h2 → h3`, never skipped
- All icon-only buttons have `aria-label`

---

## Environment variables reference

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key — get from resend.com/api-keys |

---

## Content updates

All site content is centralised in [`src/constants/index.ts`](src/constants/index.ts). To update:

- **Phone / email / address** → `SITE_CONFIG`
- **Navigation** → `NAV_LINKS`
- **Service descriptions** → `SERVICES`
- **Testimonials** → `TESTIMONIALS`
- **FAQ answers** → `FAQ_ITEMS`
- **Stats (500+ families, etc.)** → `STATS`
- **Process steps** → `PROCESS_STEPS`

No JSX edits needed for content changes.
