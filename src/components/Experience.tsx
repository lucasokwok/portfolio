import { Building2, MapPin } from 'lucide-react'
import { experiences } from '../data'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from './LanguageProvider'

function getLocalizedValue(value: string | { pt: string; en: string }, language: 'pt' | 'en') {
  return typeof value === 'string' ? value : value[language]
}

function getCompanyInitials(value: string | { pt: string; en: string }, language: 'pt' | 'en') {
  const company = getLocalizedValue(value, language)
  return company
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

export function Experience() {
  const { language, t } = useLanguage()
  const [ref, isVisible] = useReveal<HTMLDivElement>()

  return (
    <section
      ref={ref}
      id="experience"
      className="section-divider section-surface section-surface--experience py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div
          className={`reveal ${isVisible ? 'is-visible' : ''} lg:col-span-4`}
          style={{ transitionDelay: '40ms' }}
        >
          <p className="mb-3 text-sm font-mono uppercase tracking-[0.2em] text-primary">04</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t.experience.title}
          </h2>
          <p className="text-muted-foreground">{t.experience.subtitle}</p>
        </div>

        <div className="lg:col-span-8">
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/70 via-sky-500/35 to-transparent" />

            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <article
                  key={experience.id}
                  className={`reveal ${isVisible ? 'is-visible' : ''} relative pl-12`}
                  style={{ transitionDelay: `${120 + index * 120}ms` }}
                >
                  <div
                    className={`absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                      index === 0 ? 'border-primary bg-primary shadow-[0_0_20px_rgba(56,189,248,0.18)]' : 'border-border bg-background'
                    }`}
                  >
                    <Building2
                      className={`h-3.5 w-3.5 ${index === 0 ? 'text-primary-foreground' : 'text-muted-foreground'}`}
                    />
                  </div>

                  <div className="interactive-card rounded-xl border border-border bg-card p-6">
                    <div className="mb-4 grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-start">
                      <div className="flex items-start">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background/70 text-sm font-semibold tracking-[0.2em] text-primary/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                          {getCompanyInitials(experience.company, language)}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {getLocalizedValue(experience.role, language)}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                          <span className="font-medium text-foreground/80">
                            {getLocalizedValue(experience.company, language)}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" />
                            {experience.location}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-mono whitespace-nowrap sm:justify-self-end ${
                          index === 0 ? 'border border-primary/20 bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {experience.period[language]}
                      </span>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {experience.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="tech-chip rounded-md bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
