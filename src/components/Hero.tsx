import { useEffect, useState } from 'react'
import { ArrowRight, Github, Linkedin, MapPin } from 'lucide-react'
import { site } from '../data'
import { useLanguage } from './LanguageProvider'

export function Hero() {
  const { language, t } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsLoaded(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="hero-surface relative overflow-hidden pt-20 lg:pt-24">
      <div className="hero-grid" />
      <div className="hero-vignette" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <div
            className={`reveal ${isLoaded ? 'is-visible' : ''} mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-4 py-2`}
            style={{ transitionDelay: '60ms' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
            </span>
            <span className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">EDP Brasil</span> - São José dos Campos
            </span>
          </div>

          <div className="space-y-4">
            <h1
              data-reveal="hero-title"
              className={`reveal hero-title ${isLoaded ? 'is-visible' : ''} text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl`}
              style={{ transitionDelay: '140ms' }}
            >
              {site.name}
            </h1>
            <p
              data-reveal="hero-copy"
              className={`reveal hero-copy ${isLoaded ? 'is-visible' : ''} text-xl font-medium text-primary sm:text-2xl lg:text-3xl`}
              style={{ transitionDelay: '220ms' }}
            >
              {t.hero.role}
            </p>
          </div>

          <p
            data-reveal="hero-copy"
            className={`reveal hero-copy mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl ${
              isLoaded ? 'is-visible' : ''
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {t.hero.description}
          </p>

          <div
            className={`reveal mt-8 flex flex-col gap-4 sm:flex-row ${isLoaded ? 'is-visible' : ''}`}
            style={{ transitionDelay: '380ms' }}
          >
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-medium text-primary-foreground transition-transform transition-colors hover:-translate-y-0.5 hover:bg-primary/90"
            >
              {t.hero.viewProjects}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-card px-6 font-medium text-foreground transition-transform transition-colors hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/80"
            >
              {t.hero.contact}
            </a>
          </div>

          <div
            className={`reveal mt-8 flex flex-wrap items-center gap-3 ${isLoaded ? 'is-visible' : ''}`}
            style={{ transitionDelay: '460ms' }}
          >
            <a
              href={site.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-card/80 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={site.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-card/80 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            data-reveal="hero-card"
            className={`glass-panel reveal hero-card overflow-hidden rounded-2xl border border-border/80 ${isLoaded ? 'is-visible' : ''}`}
            style={{ transitionDelay: '180ms' }}
          >
            <div className="border-b border-border/70 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{site.name}</p>
                  <p className="text-sm text-muted-foreground">{site.role[language]}</p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {site.location}
                </div>
              </div>
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="overflow-hidden rounded-2xl border border-border bg-background">
                <img
                  src="/placeholder-user.jpg"
                  alt={t.hero.photoAlt}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 sm:max-w-[180px]">
                {site.heroMetrics.map((metric, index) => (
                  <div
                    key={metric.value}
                    className={`reveal ${isLoaded ? 'is-visible' : ''} rounded-xl border border-border bg-muted/40 p-4 text-center`}
                    style={{ transitionDelay: `${260 + index * 90}ms` }}
                  >
                    <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                    <div className="mt-1 text-xs leading-tight text-muted-foreground">
                      {metric.label[language]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.hero.metricsLabel}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {site.stackPreview.map((tech, index) => (
                  <span
                    key={tech}
                    className={`tech-chip reveal ${isLoaded ? 'is-visible' : ''} rounded-lg border border-border bg-background/70 px-3 py-1.5 text-xs text-muted-foreground`}
                    style={{ transitionDelay: `${340 + index * 70}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
