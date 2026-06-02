'use client'

import { useLanguage } from './language-provider'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Section header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-mono text-primary uppercase tracking-wider mb-3">01</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                {t.about.title}
              </h2>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-8 space-y-8">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {t.about.content}
            </p>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {t.about.education}
            </p>
            
            {/* Quick facts */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-sm font-mono text-primary mb-2">Localização</p>
                <p className="text-foreground font-medium">São José dos Campos, SP</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-sm font-mono text-primary mb-2">Disponibilidade</p>
                <p className="text-foreground font-medium">Aberto a oportunidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
