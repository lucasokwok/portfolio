import type { LocalizedText } from './types'

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      technologies: 'Tecnologias',
      experience: 'Experiência',
      education: 'Formação',
      contact: 'Contato',
    },
    hero: {
      role: 'Desenvolvedor Full Stack',
      description:
        'Desenvolvedor Full Stack com experiência em aplicações corporativas, automações, análise de dados e interfaces web modernas.',
      viewProjects: 'Ver Projetos',
      contact: 'Entrar em Contato',
      photoAlt: 'Foto de perfil de Lucas Okwok',
      metricsLabel: 'Indicadores rápidos',
    },
    about: {
      title: 'Sobre',
      content:
        'Sou desenvolvedor Full Stack com experiência na criação de aplicações web, automações corporativas e soluções orientadas a dados. Minha atuação combina desenvolvimento de sistemas, análise de dados, dashboards e melhoria de processos internos, com foco em entregar ferramentas práticas para ambientes corporativos.',
      education:
        'Tenho formação técnica em Informática, Bacharelado em Ciência e Tecnologia pela UNIFESP e atualmente curso Bacharelado em Ciência da Computação também pela UNIFESP.',
      locationLabel: 'Localização',
      locationValue: 'São José dos Campos, SP',
      availabilityLabel: 'Disponibilidade',
      availabilityValue: 'Aberto a oportunidades',
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle:
        'Projetos desenvolvidos em ambientes corporativos com foco em automação, análise de dados e aplicações web.',
      viewDetails: 'Ver Detalhes',
      corporateProject: 'Projeto corporativo',
      restricted: 'Projeto interno — acesso restrito',
      featured: 'Destaque',
      preview: 'Interface protegida',
    },
    technologies: {
      title: 'Tecnologias',
      subtitle: 'Ferramentas e tecnologias que utilizo para entregar soluções de qualidade.',
      webDev: 'Web Development',
      dataAutomation: 'Data & Automation',
      businessLowcode: 'Business & Low-code',
      databasesTools: 'Databases & Tools',
      webDevDescription: 'Interfaces modernas e responsivas',
      dataAutomationDescription: 'Processamento e automação de dados',
      businessLowcodeDescription: 'Soluções corporativas rápidas',
      databasesToolsDescription: 'Armazenamento e versionamento',
    },
    experience: {
      title: 'Experiência Profissional',
      subtitle: 'Trajetória profissional com foco em desenvolvimento de sistemas e análise de dados.',
      current: 'atual',
    },
    education: {
      title: 'Formação Acadêmica',
      subtitle: 'Formação acadêmica sólida com foco em tecnologia e computação.',
      inProgress: 'Em curso',
      complete: 'Completo',
      highlight: 'Aluno destaque',
    },
    contact: {
      title: 'Contato',
      description:
        'Interessado em trabalhar juntos? Entre em contato através das redes sociais ou envie um e-mail.',
      linkedinDescription: 'Conecte-se profissionalmente',
      githubDescription: 'Veja meus repositórios',
      emailDescription: 'Envie uma mensagem direta',
      emailAction: 'Enviar E-mail',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      stack: 'React + TypeScript + Vite',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      technologies: 'Technologies',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      role: 'Full Stack Developer',
      description:
        'Full Stack Developer experienced in corporate applications, automation, data analysis, and modern web interfaces.',
      viewProjects: 'View Projects',
      contact: 'Contact Me',
      photoAlt: 'Lucas Okwok profile photo',
      metricsLabel: 'Quick indicators',
    },
    about: {
      title: 'About',
      content:
        'I am a Full Stack Developer with experience in creating web applications, corporate automations, and data-driven solutions. My work combines systems development, data analysis, dashboards, and internal process improvement, focusing on delivering practical tools for corporate environments.',
      education:
        'I have a technical degree in Information Technology, a Bachelor\'s degree in Science and Technology from UNIFESP, and I am currently pursuing a Bachelor\'s degree in Computer Science, also at UNIFESP.',
      locationLabel: 'Location',
      locationValue: 'São José dos Campos, SP',
      availabilityLabel: 'Availability',
      availabilityValue: 'Open to opportunities',
    },
    projects: {
      title: 'Featured Projects',
      subtitle:
        'Projects built in corporate environments with a focus on automation, data analysis, and web applications.',
      viewDetails: 'View Details',
      corporateProject: 'Corporate project',
      restricted: 'Internal project — restricted access',
      featured: 'Featured',
      preview: 'Protected interface',
    },
    technologies: {
      title: 'Technologies',
      subtitle: 'Tools and technologies I use to deliver quality solutions.',
      webDev: 'Web Development',
      dataAutomation: 'Data & Automation',
      businessLowcode: 'Business & Low-code',
      databasesTools: 'Databases & Tools',
      webDevDescription: 'Modern and responsive interfaces',
      dataAutomationDescription: 'Data processing and automation',
      businessLowcodeDescription: 'Fast corporate solutions',
      databasesToolsDescription: 'Storage and versioning',
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'Professional background focused on systems development and data analysis.',
      current: 'present',
    },
    education: {
      title: 'Education',
      subtitle: 'Strong academic background focused on technology and computing.',
      inProgress: 'In progress',
      complete: 'Complete',
      highlight: 'Top student',
    },
    contact: {
      title: 'Contact',
      description: 'Interested in working together? Reach out on social media or send an email.',
      linkedinDescription: 'Connect professionally',
      githubDescription: 'See my repositories',
      emailDescription: 'Send a direct message',
      emailAction: 'Send Email',
    },
    footer: {
      rights: 'All rights reserved.',
      stack: 'React + TypeScript + Vite',
    },
  },
} satisfies Record<
  string,
  {
    nav: Record<string, string>
    hero: {
      role: string
      description: string
      viewProjects: string
      contact: string
      photoAlt: string
      metricsLabel: string
    }
    about: {
      title: string
      content: string
      education: string
      locationLabel: string
      locationValue: string
      availabilityLabel: string
      availabilityValue: string
    }
    projects: {
      title: string
      subtitle: string
      viewDetails: string
      corporateProject: string
      restricted: string
      featured: string
      preview: string
    }
    technologies: {
      title: string
      subtitle: string
      webDev: string
      dataAutomation: string
      businessLowcode: string
      databasesTools: string
      webDevDescription: string
      dataAutomationDescription: string
      businessLowcodeDescription: string
      databasesToolsDescription: string
    }
    experience: {
      title: string
      subtitle: string
      current: string
    }
    education: {
      title: string
      subtitle: string
      inProgress: string
      complete: string
      highlight: string
    }
    contact: {
      title: string
      description: string
      linkedinDescription: string
      githubDescription: string
      emailDescription: string
      emailAction: string
    }
    footer: {
      rights: string
      stack: string
    }
  }
>

type LanguageCode = keyof typeof translations
export type TranslationKey = (typeof translations)[LanguageCode]

export function asLocalizedText(value: string): LocalizedText {
  return { pt: value, en: value }
}
