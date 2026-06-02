import { Award, BookOpen, GraduationCap } from 'lucide-react'
import { education } from '../data'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from './LanguageProvider'

export function Education() {
  const { language, t } = useLanguage()
  const [ref, isVisible] = useReveal<HTMLDivElement>()

  const getStatusLabel = (status: 'inProgress' | 'complete' | 'highlight') => {
    switch (status) {
      case 'inProgress':
        return t.education.inProgress
      case 'complete':
        return t.education.complete
      case 'highlight':
        return t.education.highlight
      default:
        return ''
    }
  }

  const getStatusClassName = (status: 'inProgress' | 'complete' | 'highlight') => {
    switch (status) {
      case 'inProgress':
        return 'border-primary/20 bg-primary/10 text-primary'
      case 'complete':
        return 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
      case 'highlight':
        return 'border-amber-400/20 bg-amber-400/10 text-amber-300'
      default:
        return 'border-border bg-muted text-muted-foreground'
    }
  }

  const getIcon = (status: 'inProgress' | 'complete' | 'highlight') => {
    switch (status) {
      case 'highlight':
        return Award
      case 'inProgress':
        return BookOpen
      default:
        return GraduationCap
    }
  }

  return (
    <section ref={ref} id="education" className="section-divider relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-mono uppercase tracking-[0.2em] text-primary">05</p>
          <h2
            className={`reveal ${isVisible ? 'is-visible' : ''} mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl`}
            style={{ transitionDelay: '40ms' }}
          >
            {t.education.title}
          </h2>
          <p
            className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-2xl text-muted-foreground`}
            style={{ transitionDelay: '120ms' }}
          >
            {t.education.subtitle}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {education.map((item, index) => {
            const Icon = getIcon(item.status)
            const isHighlight = item.status === 'highlight'

            return (
              <article
                key={item.id}
                className={`interactive-card reveal rounded-2xl border bg-card p-6 ${
                  isVisible ? 'is-visible' : ''
                } ${
                  isHighlight ? 'border-amber-400/30 hover:border-amber-400/50' : 'border-border hover:border-primary/30'
                }`}
                style={{ transitionDelay: `${180 + index * 100}ms` }}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      isHighlight ? 'border border-amber-400/20 bg-amber-400/10' : 'border border-primary/20 bg-primary/10'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isHighlight ? 'text-amber-300' : 'text-primary'}`} />
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-mono ${getStatusClassName(item.status)}`}
                  >
                    {getStatusLabel(item.status)}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-snug text-foreground">
                    {item.degree[language]}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.institution}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
