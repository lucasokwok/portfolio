'use client'

import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { useLanguage } from './language-provider'
import { education } from '@/lib/data'

export function Education() {
  const { language, t } = useLanguage()

  const getStatusLabel = (status: string) => {
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

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'inProgress':
        return 'text-primary bg-primary/10 border-primary/20'
      case 'complete':
        return 'text-accent bg-accent/10 border-accent/20'
      case 'highlight':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20'
      default:
        return 'text-muted-foreground bg-muted border-border'
    }
  }

  const getIcon = (status: string) => {
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
    <section id="education" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary uppercase tracking-wider mb-3">05</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            {t.education.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Formação acadêmica sólida com foco em tecnologia e computação.
          </p>
        </div>

        {/* Education cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((edu) => {
            const Icon = getIcon(edu.status)
            const isHighlight = edu.status === 'highlight'
            
            return (
              <article
                key={edu.id}
                className={`relative bg-card border rounded-2xl p-6 transition-all duration-300 ${
                  isHighlight 
                    ? 'border-amber-400/30 hover:border-amber-400/50' 
                    : 'border-border hover:border-primary/30'
                }`}
              >
                {/* Icon and status */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isHighlight 
                      ? 'bg-amber-400/10 border border-amber-400/20' 
                      : 'bg-primary/10 border border-primary/20'
                  }`}>
                    <Icon className={`w-5 h-5 ${isHighlight ? 'text-amber-400' : 'text-primary'}`} />
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${getStatusStyle(edu.status)}`}>
                    {getStatusLabel(edu.status)}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground leading-snug">
                    {edu.degree[language]}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
