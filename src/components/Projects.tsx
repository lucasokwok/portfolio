import { ArrowUpRight, Layers, Lock } from 'lucide-react'
import { projects } from '../data'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from './LanguageProvider'

function getLocalizedTitle(title: string | { pt: string; en: string }, language: 'pt' | 'en') {
  return typeof title === 'string' ? title : title[language]
}

export function Projects() {
  const { language, t } = useLanguage()
  const featuredProject = projects[0]
  const remainingProjects = projects.slice(1)
  const [ref, isVisible] = useReveal<HTMLDivElement>()

  return (
    <section
      ref={ref}
      id="projects"
      className="section-divider section-surface section-surface--projects py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div
            className={`reveal ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '40ms' }}
          >
            <p className="mb-3 text-sm font-mono uppercase tracking-[0.2em] text-primary">02</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t.projects.title}
            </h2>
          </div>
          <p
            className={`reveal max-w-md text-muted-foreground ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '120ms' }}
          >
            {t.projects.subtitle}
          </p>
        </div>

        <article
          className={`interactive-card reveal mb-8 overflow-hidden rounded-2xl border border-border bg-card ${isVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '180ms' }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border bg-muted/20 p-5 lg:border-b-0 lg:border-r lg:p-6">
              <div className="project-preview project-preview--feature">
                <div className="project-preview__label">
                  <span className="project-preview__badge">01</span>
                  <span>{t.projects.preview}</span>
                </div>
                <div className="absolute inset-x-6 top-6 z-[1] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                      <Layers className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
                        {t.projects.corporateProject}
                      </p>
                      <p className="text-xs text-muted-foreground">Preview maior para a tela principal</p>
                    </div>
                  </div>
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="absolute inset-x-6 bottom-6 z-[1] rounded-xl border border-border/60 bg-background/45 p-4 backdrop-blur-sm">
                  <div className="grid gap-2 sm:grid-cols-3">
                    <div className="rounded-lg border border-border/60 bg-card/65 p-2">
                      <div className="h-2 w-12 rounded-full bg-primary/50" />
                      <div className="mt-2 h-16 rounded-md border border-border/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" />
                    </div>
                    <div className="rounded-lg border border-border/60 bg-card/65 p-2">
                      <div className="h-2 w-10 rounded-full bg-cyan-300/50" />
                      <div className="mt-2 h-16 rounded-md border border-border/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" />
                    </div>
                    <div className="rounded-lg border border-border/60 bg-card/65 p-2">
                      <div className="h-2 w-14 rounded-full bg-sky-400/50" />
                      <div className="mt-2 h-16 rounded-md border border-border/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-8 lg:p-10">
              <div className="mb-4 flex items-start justify-between gap-4">
                <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-mono text-primary">
                  {t.projects.featured}
                </span>
                <Lock className="h-4 w-4 text-muted-foreground" />
              </div>

              <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary lg:text-3xl">
                {getLocalizedTitle(featuredProject.title, language)}
              </h3>

              <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                {featuredProject.description[language]}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 text-sm text-muted-foreground"
              >
                {t.projects.restricted}
              </button>
            </div>
          </div>
        </article>

        <div className="grid gap-6 md:grid-cols-2">
          {remainingProjects.map((project, index) => (
            <article
              key={project.id}
              className={`interactive-card reveal overflow-hidden rounded-xl border border-border bg-card ${
                isVisible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${260 + index * 110}ms` }}
            >
              <div className="px-6 pt-6">
                <div className="project-preview project-preview--thumb">
                  <div className="project-preview__label">
                    <span className="project-preview__badge">0{index + 2}</span>
                    <span>Screenshot</span>
                  </div>
                  <div className="absolute inset-x-5 top-5 z-[1] flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
                        {t.projects.corporateProject}
                      </p>
                      <p className="max-w-[16rem] text-xs text-muted-foreground">
                        Thumbnail compacta da tela do projeto
                      </p>
                    </div>
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 pb-0">
                <span className="text-6xl font-bold text-muted/30">0{index + 2}</span>
                <Lock className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="space-y-4 p-6 pt-4">
                <h3 className="text-xl font-semibold text-foreground transition-colors hover:text-primary">
                  {getLocalizedTitle(project.title, language)}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 ? (
                    <span className="rounded-md bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">
                      +{project.tags.length - 4}
                    </span>
                  ) : null}
                </div>

                <div className="border-t border-border pt-4">
                  <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <ArrowUpRight className="h-3 w-3" />
                    {t.projects.corporateProject}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
