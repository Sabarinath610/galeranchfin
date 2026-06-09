import { ButtonLink } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32 bg-cream">
      <span className="font-mono text-gold text-sm uppercase tracking-[0.2em] mb-4">404</span>
      <h1 className="font-display text-navy text-4xl lg:text-5xl tracking-tight mb-4">
        Page not found.
      </h1>
      <p className="text-ink-secondary max-w-sm leading-relaxed mb-8">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <ButtonLink href="/" variant="primary" size="md">Go home</ButtonLink>
        <ButtonLink href="/contact" variant="ghost" size="md">Contact us</ButtonLink>
      </div>
    </div>
  )
}
