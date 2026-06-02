import { site } from '../data'
import { useLanguage } from './LanguageProvider'

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-black/10 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
              <span className="text-xs font-semibold text-primary">LO</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {site.name}. {t.footer.rights}
            </p>
          </div>
          <p className="text-xs font-mono text-muted-foreground/60">{t.footer.stack}</p>
        </div>
      </div>
    </footer>
  )
}
