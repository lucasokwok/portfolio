import { useReveal } from '../hooks/useReveal'
import { useLanguage } from './LanguageProvider'

export function About() {
  const { t } = useLanguage()
  const [ref, isVisible] = useReveal<HTMLDivElement>()

  return (
    <section ref={ref} id="about" className="section-divider relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-border/50" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div
          className={`reveal ${isVisible ? 'is-visible' : ''} lg:col-span-4`}
          style={{ transitionDelay: '40ms' }}
        >
          <p className="mb-3 text-sm font-mono uppercase tracking-[0.2em] text-primary">01</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t.about.title}
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <p
            className={`reveal ${isVisible ? 'is-visible' : ''} text-lg leading-relaxed text-muted-foreground lg:text-xl`}
            style={{ transitionDelay: '120ms' }}
          >
            {t.about.content}
          </p>
          <p
            className={`reveal ${isVisible ? 'is-visible' : ''} text-lg leading-relaxed text-muted-foreground lg:text-xl`}
            style={{ transitionDelay: '200ms' }}
          >
            {t.about.education}
          </p>

          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            <div
              className={`interactive-card reveal ${isVisible ? 'is-visible' : ''} rounded-xl border border-border bg-card p-6`}
              style={{ transitionDelay: '280ms' }}
            >
              <p className="mb-2 text-sm font-mono text-primary">{t.about.locationLabel}</p>
              <p className="font-medium text-foreground">{t.about.locationValue}</p>
            </div>
            <div
              className={`interactive-card reveal ${isVisible ? 'is-visible' : ''} rounded-xl border border-border bg-card p-6`}
              style={{ transitionDelay: '360ms' }}
            >
              <p className="mb-2 text-sm font-mono text-primary">{t.about.availabilityLabel}</p>
              <p className="font-medium text-foreground">{t.about.availabilityValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
