import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type LanguageCode, type TranslationKey } from '../data'

type LanguageContextValue = {
  language: LanguageCode
  t: TranslationKey
  setLanguage: (language: LanguageCode) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>('pt')

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  const value = useMemo(
    () => ({
      language,
      t: translations[language],
      setLanguage,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
