'use client'

import { ArrowUpRight, Layers, Lock } from 'lucide-react'
import { useLanguage } from './language-provider'
import { projects } from '@/lib/data'

export function Projects() {
  const { language, t } = useLanguage()

  const getTitle = (title: string | { pt: string; en: string }) => {
    return typeof title === 'string' ? title : title[language]
  }

  // Featured project (first one)
  const featuredProject = projects[0]
  const otherProjects = projects.slice(1)

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="text-sm font-mono text-primary uppercase tracking-wider mb-3">02</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              {t.projects.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Projetos desenvolvidos em ambientes corporativos com foco em automação, análise de dados e aplicações web.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-8">
          <article className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image/Preview area */}
              <div className="relative aspect-video lg:aspect-auto bg-muted/50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative text-center space-y-4 p-8">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Layers className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-primary uppercase tracking-wider">{t.projects.corporateProject}</p>
                    <p className="text-sm text-muted-foreground">Interface protegida</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md">Destaque</span>
                  </div>
                  <Lock className="w-4 h-4 text-muted-foreground" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {getTitle(featuredProject.title)}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {featuredProject.description[language]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-mono bg-muted border border-border rounded-lg text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  disabled
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground cursor-not-allowed"
                >
                  Projeto interno — acesso restrito
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Header with number */}
              <div className="flex items-center justify-between p-6 pb-0">
                <span className="text-6xl font-bold text-muted/30">0{index + 2}</span>
                <Lock className="w-4 h-4 text-muted-foreground" />
              </div>

              {/* Content */}
              <div className="p-6 pt-4 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {getTitle(project.title)}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description[language]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono bg-muted/50 rounded-md text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-mono bg-muted/50 rounded-md text-muted-foreground">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-border">
                  <button
                    disabled
                    className="inline-flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <ArrowUpRight className="w-3 h-3" />
                    {t.projects.corporateProject}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
