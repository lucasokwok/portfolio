'use client'

import { MapPin, Building2 } from 'lucide-react'
import { useLanguage } from './language-provider'
import { experiences } from '@/lib/data'

export function Experience() {
  const { language, t } = useLanguage()

  const getCompany = (company: string | { pt: string; en: string }) => {
    return typeof company === 'string' ? company : company[language]
  }

  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-mono text-primary uppercase tracking-wider mb-3">04</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
                {t.experience.title}
              </h2>
              <p className="text-muted-foreground">
                Trajetória profissional com foco em desenvolvimento de sistemas e análise de dados.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <article
                    key={exp.id}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-6 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      index === 0 
                        ? 'bg-primary border-primary glow-sm' 
                        : 'bg-background border-border'
                    }`}>
                      <Building2 className={`w-3.5 h-3.5 ${index === 0 ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold text-foreground">
                            {exp.role[language]}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                            <span className="font-medium text-foreground/80">
                              {getCompany(exp.company)}
                            </span>
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <span className={`inline-flex items-center px-3 py-1 text-xs font-mono rounded-full whitespace-nowrap ${
                          index === 0 
                            ? 'bg-primary/10 text-primary border border-primary/20' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {exp.period[language]}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {exp.description[language]}
                      </p>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-mono bg-muted/50 rounded-md text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
