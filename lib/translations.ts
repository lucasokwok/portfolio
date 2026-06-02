export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      technologies: 'Tecnologias',
      education: 'Formação',
      contact: 'Contato',
    },
    hero: {
      role: 'Desenvolvedor Full Stack',
      description: 'Desenvolvedor Full Stack com experiência em aplicações corporativas, automações, análise de dados e interfaces web modernas.',
      viewProjects: 'Ver Projetos',
    },
    about: {
      title: 'Sobre',
      content: 'Sou desenvolvedor Full Stack com experiência na criação de aplicações web, automações corporativas e soluções orientadas a dados. Minha atuação combina desenvolvimento de sistemas, análise de dados, dashboards e melhoria de processos internos, com foco em entregar ferramentas práticas para ambientes corporativos.',
      education: 'Tenho formação técnica em Informática, Bacharelado em Ciência e Tecnologia pela UNIFESP e atualmente curso Bacharelado em Ciência da Computação também pela UNIFESP.',
    },
    projects: {
      title: 'Projetos em Destaque',
      viewDetails: 'Ver Detalhes',
      corporateProject: 'Projeto Corporativo',
    },
    technologies: {
      title: 'Tecnologias',
      webDev: 'Web Development',
      dataAutomation: 'Data & Automation',
      businessLowcode: 'Business & Low-code',
      databasesTools: 'Databases & Tools',
    },
    experience: {
      title: 'Experiência Profissional',
      current: 'atual',
    },
    education: {
      title: 'Formação Acadêmica',
      inProgress: 'Em curso',
      complete: 'Completo',
      highlight: 'Aluno destaque',
    },
    contact: {
      title: 'Contato',
      description: 'Interessado em trabalhar juntos? Entre em contato através das redes sociais ou envie um e-mail.',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      technologies: 'Technologies',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      role: 'Full Stack Developer',
      description: 'Full Stack Developer experienced in corporate applications, automation, data analysis, and modern web interfaces.',
      viewProjects: 'View Projects',
    },
    about: {
      title: 'About',
      content: 'I am a Full Stack Developer with experience in creating web applications, corporate automations, and data-driven solutions. My work combines systems development, data analysis, dashboards, and internal process improvement, focusing on delivering practical tools for corporate environments.',
      education: 'I have a technical degree in Information Technology, a Bachelor\'s degree in Science and Technology from UNIFESP, and I am currently pursuing a Bachelor\'s degree in Computer Science, also at UNIFESP.',
    },
    projects: {
      title: 'Featured Projects',
      viewDetails: 'View Details',
      corporateProject: 'Corporate Project',
    },
    technologies: {
      title: 'Technologies',
      webDev: 'Web Development',
      dataAutomation: 'Data & Automation',
      businessLowcode: 'Business & Low-code',
      databasesTools: 'Databases & Tools',
    },
    experience: {
      title: 'Professional Experience',
      current: 'present',
    },
    education: {
      title: 'Education',
      inProgress: 'In progress',
      complete: 'Complete',
      highlight: 'Top student',
    },
    contact: {
      title: 'Contact',
      description: 'Interested in working together? Get in touch through social media or send an email.',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKey = typeof translations.pt
