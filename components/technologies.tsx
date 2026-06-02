'use client'

import { useLanguage } from './language-provider'
import { technologies } from '@/lib/data'

export function Technologies() {
  const { t } = useLanguage()

  const techCategories = [
    { 
      key: 'webDev', 
      title: t.technologies.webDev, 
      items: technologies.webDev,
      description: 'Interfaces modernas e responsivas'
    },
    { 
      key: 'dataAutomation', 
      title: t.technologies.dataAutomation, 
      items: technologies.dataAutomation,
      description: 'Processamento e automação de dados'
    },
    { 
      key: 'businessLowcode', 
      title: t.technologies.businessLowcode, 
      items: technologies.businessLowcode,
      description: 'Soluções corporativas rápidas'
    },
    { 
      key: 'databasesTools', 
      title: t.technologies.databasesTools, 
      items: technologies.databasesTools,
      description: 'Armazenamento e versionamento'
    },
  ]

  return (
    <section id="technologies" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary uppercase tracking-wider mb-3">03</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            {t.technologies.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ferramentas e tecnologias que utilizo para entregar soluções de qualidade.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={category.key}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              {/* Category number */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-muted/20">
                0{index + 1}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                
                <div className="h-px bg-border" />
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-mono bg-muted/50 rounded-lg text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
