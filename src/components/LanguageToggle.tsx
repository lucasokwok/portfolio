import { useLanguage } from './LanguageProvider'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-card/70 px-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
      aria-label="Toggle language"
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}
