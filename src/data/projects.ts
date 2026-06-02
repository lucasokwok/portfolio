import type { ProjectItem } from './types'

export const projects: ProjectItem[] = [
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
