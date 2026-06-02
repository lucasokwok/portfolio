import type { ExperienceItem } from './types'

export const experiences: ExperienceItem[] = [
  {
    id: 'edp',
    company: 'EDP Brasil',
    role: {
      pt: 'Estagiário em Desenvolvimento de Sistemas e Análise de Dados',
      en: 'Systems Development and Data Analysis Intern',
    },
    period: {
      pt: 'out/2025 - atual',
      en: 'Oct/2025 - present',
    },
    location: 'São José dos Campos, SP',
    description: {
      pt: 'Desenvolvimento de aplicações e sistemas voltados à estratégia de combate às perdas, com atuação em análise de dados, dashboards, automações e melhoria de processos internos relacionados à tecnologia e processamento de dados.',
      en: 'Development of applications and systems focused on loss reduction strategy, working with data analysis, dashboards, automations, and improvement of internal processes related to technology and data processing.',
    },
    technologies: ['Python', 'Power BI', 'Power Apps', 'React', 'TypeScript'],
  },
  {
    id: 'control2',
    company: 'Control2 Sistemas',
    role: {
      pt: 'Desenvolvedor Full Stack — Estágio',
      en: 'Full Stack Developer — Internship',
    },
    period: {
      pt: 'fev/2023 - ago/2023',
      en: 'Feb/2023 - Aug/2023',
    },
    location: 'São José dos Campos, SP',
    description: {
      pt: 'Atuação em desenvolvimento full stack, pesquisas técnicas e testes com reconhecimento de placas veiculares, utilizando tecnologias como C#, Java, JavaScript, SQL e MongoDB.',
      en: 'Full stack development, technical research, and testing with license plate recognition, using technologies such as C#, Java, JavaScript, SQL, and MongoDB.',
    },
    technologies: ['C#', 'Java', 'JavaScript', 'SQL', 'MongoDB'],
  },
  {
    id: 'exercito',
    company: {
      pt: 'Exército Brasileiro',
      en: 'Brazilian Army',
    },
    role: {
      pt: 'Auxiliar de Informática',
      en: 'IT Assistant',
    },
    period: {
      pt: 'mar/2022 - jan/2023',
      en: 'Mar/2022 - Jan/2023',
    },
    location: 'Caçapava, SP',
    description: {
      pt: 'Manutenção de rede interna, configuração de equipamentos de infraestrutura, manipulação de proxy, suporte técnico e administração de dispositivos como access points, PTPs e switches gerenciáveis.',
      en: 'Internal network maintenance, infrastructure equipment configuration, proxy management, technical support, and administration of devices such as access points, PTPs, and managed switches.',
    },
    technologies: ['Network', 'Infrastructure', 'Technical Support'],
  },
  {
    id: 'valltech',
    company: 'Valltech - Tecnologia em Automação',
    role: {
      pt: 'Desenvolvedor Full Stack / Suporte Técnico',
      en: 'Full Stack Developer / Technical Support',
    },
    period: {
      pt: 'nov/2020 - ago/2021',
      en: 'Nov/2020 - Aug/2021',
    },
    location: 'São José dos Campos, SP',
    description: {
      pt: 'Atuação em suporte técnico, manutenção de sistemas, restauração de backups, instalação de soluções corporativas e desenvolvimento de software com C#, Java e Visual Basic.',
      en: 'Technical support, system maintenance, backup restoration, corporate solution installation, and software development with C#, Java, and Visual Basic.',
    },
    technologies: ['C#', 'Java', 'Visual Basic'],
  },
]
