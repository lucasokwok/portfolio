import { technologies } from '../data'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from './LanguageProvider'

export function Technologies() {
  const { t } = useLanguage()
  const [ref, isVisible] = useReveal<HTMLDivElement>()

  const categories = [
    {
      key: 'webDev',
      title: t.technologies.webDev,
      description: t.technologies.webDevDescription,
      items: technologies.webDev,
    },
    {
      key: 'dataAutomation',
      title: t.technologies.dataAutomation,
      description: t.technologies.dataAutomationDescription,
      items: technologies.dataAutomation,
    },
    {
      key: 'businessLowcode',
      title: t.technologies.businessLowcode,
      description: t.technologies.businessLowcodeDescription,
      items: technologies.businessLowcode,
    },
    {
      key: 'databasesTools',
      title: t.technologies.databasesTools,
      description: t.technologies.databasesToolsDescription,
      items: technologies.databasesTools,
    },
  ]

  return (
    <section ref={ref} id="technologies" className="section-divider relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-mono uppercase tracking-[0.2em] text-primary">03</p>
          <h2
            className={`reveal ${isVisible ? 'is-visible' : ''} mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl`}
            style={{ transitionDelay: '40ms' }}
          >
            {t.technologies.title}
          </h2>
          <p
            className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-2xl text-muted-foreground`}
            style={{ transitionDelay: '120ms' }}
          >
            {t.technologies.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <article
              key={category.key}
              className={`interactive-card group relative overflow-hidden rounded-2xl border border-border bg-card p-6 ${
                isVisible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${180 + index * 90}ms` }}
            >
              <div className="absolute right-4 top-4 text-4xl font-bold text-muted/20">
                0{index + 1}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{category.title}</h3>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>

                <div className="h-px bg-border" />

                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <span
                      key={tech}
                      className="tech-chip rounded-lg bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground group-hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
