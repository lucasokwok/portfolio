export type LanguageCode = 'pt' | 'en'

export type LocalizedText = Record<LanguageCode, string>

export type ProjectItem = {
  id: string
  title: string | LocalizedText
  description: LocalizedText
  tags: string[]
  featured?: boolean
}

export type ExperienceItem = {
  id: string
  company: string | LocalizedText
  role: LocalizedText
  period: LocalizedText
  location: string
  description: LocalizedText
  technologies: string[]
}

export type EducationItem = {
  id: string
  institution: string
  degree: LocalizedText
  status: 'inProgress' | 'complete' | 'highlight'
}
