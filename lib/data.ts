export const projects = [
  {
    id: 'hunter-map',
    title: 'Hunter Map',
    description: {
      pt: 'Aplicação web de navegação em mapa para apoio a inspeções em campo. O sistema exibe pontos de interesse suspeitos indicados por modelo de aprendizado de máquina e permite registrar inspeções, classificando resultados como fraude ou falso positivo.',
      en: 'Web-based map navigation application for field inspection support. The system displays suspicious points of interest indicated by a machine learning model and allows recording inspections, classifying results as fraud or false positive.',
    },
    tags: ['React', 'TypeScript', 'Vite', 'Maps', 'Machine Learning', 'Inspection'],
    featured: true,
  },
  {
    id: 'sap-automations',
    title: 'SAP Automations',
    description: {
      pt: 'Aplicativo desktop em Python com Tkinter para centralizar automações no SAP. A ferramenta permite selecionar jobs, importar dados via planilhas XLSX, configurar execuções e gerar relatórios completos de saída.',
      en: 'Desktop application in Python with Tkinter to centralize SAP automations. The tool allows selecting jobs, importing data via XLSX spreadsheets, configuring executions, and generating comprehensive output reports.',
    },
    tags: ['Python', 'Tkinter', 'XLSX', 'SAP', 'Automation', 'Reports'],
    featured: true,
  },
  {
    id: 'minha-primeira-automacao',
    title: {
      pt: 'Minha Primeira Automação',
      en: 'My First Automation',
    },
    description: {
      pt: 'Automação criada para gerar cartas jurídicas em lote a partir de um modelo e uma planilha XLSX, produzindo automaticamente arquivos DOCX e PDF individualizados para cada unidade notificada. Evoluiu para um software desktop personalizado para escritório jurídico.',
      en: 'Automation created to generate legal letters in batch from a template and an XLSX spreadsheet, automatically producing individualized DOCX and PDF files for each notified unit. Evolved into a custom desktop software for a law office.',
    },
    tags: ['Python', 'Tkinter', 'OpenPyXL', 'python-docx', 'PDF Generation', 'Process Automation'],
    featured: true,
  },
  {
    id: 'parking-app',
    title: 'Parking App',
    description: {
      pt: 'Aplicativo de reservas de vagas de estacionamento para ambiente corporativo, desenvolvido em Power Apps. A solução permite organizar reservas, controlar disponibilidade e facilitar a gestão interna de vagas.',
      en: 'Parking spot reservation app for corporate environments, developed in Power Apps. The solution allows organizing reservations, controlling availability, and facilitating internal spot management.',
    },
    tags: ['Power Apps', 'SharePoint', 'Power Automate', 'Corporate App'],
    featured: true,
  },
  {
    id: 'power-bi-dashboard',
    title: {
      pt: 'Painel Power BI de Gestão de Metas',
      en: 'Power BI Goals Management Dashboard',
    },
    description: {
      pt: 'Dashboard em Power BI para acompanhamento de metas e desempenho operacional, com visualização de Real x Meta, valores acumulados, variações percentuais e quedas de performance ao longo do tempo.',
      en: 'Power BI dashboard for tracking goals and operational performance, with visualization of Actual vs Target, accumulated values, percentage variations, and performance drops over time.',
    },
    tags: ['Power BI', 'Data Analysis', 'KPIs', 'Dashboard', 'Business Intelligence'],
    featured: true,
  },
]

export const experiences = [
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

export const education = [
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

export const technologies = {
  webDev: ['React', 'TypeScript', 'Vite', 'JavaScript', 'HTML', 'CSS'],
  dataAutomation: ['Python', 'Pandas', 'OpenPyXL', 'Web Scraping', 'SAP Automation'],
  businessLowcode: ['Power BI', 'Power Apps', 'Power Automate', 'SharePoint'],
  databasesTools: ['SQL', 'MongoDB', 'Git', 'GitHub', 'Vercel'],
}

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/lucasokwok',
  github: 'https://github.com/lucasokwok',
}
