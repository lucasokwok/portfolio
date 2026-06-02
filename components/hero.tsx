'use client'

import { ArrowRight, Github, Linkedin, MapPin, Briefcase } from 'lucide-react'
import { useLanguage } from './language-provider'
import { socialLinks } from '@/lib/data'

export function Hero() {
  const { t } = useLanguage()

  const metrics = [
    { value: '4+', label: 'Anos de Experiência' },
    { value: '5+', label: 'Projetos Corporativos' },
    { value: '3', label: 'Empresas' },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">EDP Brasil</span> — São José dos Campos
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground">
                Lucas Okwok
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium gradient-text">
                {t.hero.role}
              </p>
            </div>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 h-12 px-6 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-200"
              >
                {t.hero.viewProjects}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-card border border-border text-foreground font-medium rounded-xl hover:border-primary/50 hover:bg-card/80 transition-all duration-200"
              >
                Entrar em Contato
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-8">
                {/* Profile section */}
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 rounded-xl bg-muted border border-border flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">LO</span>
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="text-xl font-semibold text-foreground">Lucas Okwok</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm truncate">Full Stack Developer</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">São José dos Campos, SP</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-center space-y-1">
                      <p className="text-2xl lg:text-3xl font-bold text-foreground">{metric.value}</p>
                      <p className="text-xs text-muted-foreground leading-tight">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech stack preview */}
                <div className="space-y-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Stack Principal</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Python', 'Power BI', 'SQL'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-mono bg-muted/50 border border-border rounded-lg text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
