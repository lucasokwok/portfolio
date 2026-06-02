'use client'

import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { useLanguage } from './language-provider'
import { socialLinks } from '@/lib/data'

export function Contact() {
  const { t } = useLanguage()

  const contactLinks = [
    {
      name: 'LinkedIn',
      description: 'Conecte-se profissionalmente',
      icon: Linkedin,
      href: socialLinks.linkedin,
      color: 'group-hover:text-[#0A66C2]',
    },
    {
      name: 'GitHub',
      description: 'Veja meus repositórios',
      icon: Github,
      href: socialLinks.github,
      color: 'group-hover:text-foreground',
    },
    {
      name: 'E-mail',
      description: 'contato@lucasokwok.dev',
      icon: Mail,
      href: 'mailto:contato@lucasokwok.dev',
      color: 'group-hover:text-primary',
    },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary uppercase tracking-wider mb-3">06</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center ${link.color} transition-colors`}>
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:scale-110 transition-transform" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="mailto:contato@lucasokwok.dev"
              className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
