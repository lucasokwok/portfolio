import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { site } from '../data'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from './LanguageProvider'

export function Contact() {
  const { t } = useLanguage()
  const [ref, isVisible] = useReveal<HTMLDivElement>()

  const contactCards = [
    {
      name: 'LinkedIn',
      description: t.contact.linkedinDescription,
      icon: Linkedin,
      href: site.socialLinks.linkedin,
      accentClassName: 'group-hover:text-[#0A66C2]',
    },
    {
      name: 'GitHub',
      description: t.contact.githubDescription,
      icon: Github,
      href: site.socialLinks.github,
      accentClassName: 'group-hover:text-foreground',
    },
    {
      name: 'E-mail',
      description: t.contact.emailDescription,
      icon: Mail,
      href: `mailto:${site.email}`,
      accentClassName: 'group-hover:text-primary',
    },
  ] as const

  return (
    <section ref={ref} id="contact" className="section-divider py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-mono uppercase tracking-[0.2em] text-primary">06</p>
            <h2
              className={`reveal ${isVisible ? 'is-visible' : ''} mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl`}
              style={{ transitionDelay: '40ms' }}
            >
              {t.contact.title}
            </h2>
            <p
              className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-2xl text-lg text-muted-foreground`}
              style={{ transitionDelay: '120ms' }}
            >
              {t.contact.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {contactCards.map((card, index) => {
              const Icon = card.icon

              return (
                <a
                  key={card.name}
                  href={card.href}
                  target={card.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={card.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className={`interactive-card group rounded-xl border border-border bg-card p-6 ${
                    isVisible ? 'is-visible' : ''
                  }`}
                  style={{ transitionDelay: `${180 + index * 100}ms` }}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/50 transition-colors ${card.accentClassName}`}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground transition-transform group-hover:scale-110" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>

                  <h3 className="mb-1 text-lg font-semibold text-foreground">{card.name}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </a>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 font-medium text-primary-foreground transition-transform transition-colors hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              {t.contact.emailAction}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
