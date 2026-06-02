'use client'

import { useLanguage } from './language-provider'

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-xs font-bold text-primary">LO</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Lucas Okwok. {t.footer.rights}
            </p>
          </div>
          <p className="text-xs font-mono text-muted-foreground/60">
            React + TypeScript + Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
