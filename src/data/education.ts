import type { EducationItem } from './types'

export const education: EducationItem[] = [
  {
    id: 'unifesp-cc',
    institution: 'UNIFESP',
    degree: {
      pt: 'Bacharelado em Ciência da Computação',
      en: "Bachelor's in Computer Science",
    },
    status: 'inProgress',
  },
  {
    id: 'unifesp-ct',
    institution: 'UNIFESP',
    degree: {
      pt: 'Bacharelado em Ciência e Tecnologia',
      en: "Bachelor's in Science and Technology",
    },
    status: 'complete',
  },
  {
    id: 'univap',
    institution: 'UNIVAP Colégios',
    degree: {
      pt: 'Técnico em Informática',
      en: 'Technical Degree in Information Technology',
    },
    status: 'highlight',
  },
]
