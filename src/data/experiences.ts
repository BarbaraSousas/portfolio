export interface Experience {
  id: string;
  company: string;
  role: {
    en: string;
    pt: string;
  };
  period: string;
  location: {
    en: string;
    pt: string;
  };
  description: {
    en: string[];
    pt: string[];
  };
  technologies: string[];
  logoColor: string;
}

export const experiences: Experience[] = [
  {
    id: 'cloz',
    company: 'CloZ',
    role: {
      en: 'Senior Full-Stack Engineer',
      pt: 'Engenheira Full-Stack Sênior',
    },
    period: '2026 - Present',
    location: { en: 'Remote, Paris', pt: 'Remoto, Paris' },
    description: {
      en: [
        'Built and operate an LLM pipeline with LangGraph that turns product catalog data into generated looks used by real e-commerce customers, with structured outputs and vector search on pgvector',
        'Own the system end to end, from design and deployment to monitoring: asynchronous processing with BullMQ, AWS infrastructure provisioned with Terraform, CloudWatch for production visibility',
        'Work directly with the founders to decide where AI adds value and where simpler deterministic code is the better choice',
      ],
      pt: [
        'Construí e opero um pipeline de LLM com LangGraph que transforma dados de catálogo em looks gerados, usados por clientes reais de e-commerce, com saídas estruturadas e busca vetorial em pgvector',
        'Sou dona do sistema de ponta a ponta, do design e deploy ao monitoramento: processamento assíncrono com BullMQ, infraestrutura AWS provisionada com Terraform, CloudWatch para visibilidade em produção',
        'Trabalho direto com os founders para decidir onde a IA agrega valor e onde código determinístico simples é a melhor escolha',
      ],
    },
    technologies: ['Python', 'LangGraph', 'TypeScript', 'NestJS', 'PostgreSQL', 'pgvector', 'BullMQ', 'AWS', 'Terraform'],
    logoColor: '#BE3E2B',
  },
  {
    id: 'multiledgers',
    company: 'Multiledgers',
    role: {
      en: 'Senior Full-Stack Software Engineer',
      pt: 'Engenheira de Software Full-Stack Sênior',
    },
    period: '2025',
    location: { en: 'Remote', pt: 'Remoto' },
    description: {
      en: [
        'Turned inconsistent, delayed and partial data from external services into reliable structured records for certification workflows where incorrect data had legal consequences',
        'Implemented distributed locking in PostgreSQL to guarantee consistency across services',
        'Built high-volume data screens with server-side pagination for millions of daily operations',
      ],
      pt: [
        'Transformei dados inconsistentes, atrasados e parciais de serviços externos em registros estruturados confiáveis para fluxos de certificação onde dado incorreto tinha consequência legal',
        'Implementei locks distribuídos no PostgreSQL para garantir consistência entre serviços',
        'Construí telas de alto volume com paginação server-side para milhões de operações diárias',
      ],
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    logoColor: '#4F46E5',
  },
  {
    id: 'metropoles',
    company: 'Metrópoles',
    role: {
      en: 'Senior Software Engineer',
      pt: 'Engenheira de Software Sênior',
    },
    period: '2023 - 2024',
    location: { en: 'Brasília, Brazil', pt: 'Brasília, Brasil' },
    description: {
      en: [
        'Developed and maintained high-traffic news platform serving millions of users',
        'Optimized frontend performance resulting in 25% faster page load times',
        'Implemented responsive designs and accessibility features for diverse user base',
        'Collaborated with editorial team to create dynamic content management solutions',
      ],
      pt: [
        'Desenvolvi e mantive plataforma de notícias de alto tráfego servindo milhões de usuários',
        'Otimizei performance frontend resultando em 25% de melhoria no tempo de carregamento',
        'Implementei designs responsivos e recursos de acessibilidade para base de usuários diversa',
        'Colaborei com equipe editorial para criar soluções dinâmicas de gerenciamento de conteúdo',
      ],
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Node.js', 'MongoDB'],
    logoColor: '#DC2626',
  },
  {
    id: 'bairesdev',
    company: 'BairesDev',
    role: {
      en: 'Full-Stack Software Engineer',
      pt: 'Engenheira de Software Full-Stack',
    },
    period: '2022 - 2023',
    location: { en: 'Remote', pt: 'Remoto' },
    description: {
      en: [
        'Developed full-stack solutions for international clients across multiple industries',
        'Built responsive web applications using React, TypeScript, and modern CSS frameworks',
        'Implemented RESTful APIs and microservices architecture with Node.js',
        'Participated in code reviews and mentored junior developers',
      ],
      pt: [
        'Desenvolvi soluções full-stack para clientes internacionais de diversos setores',
        'Construí aplicações web responsivas usando React, TypeScript e frameworks CSS modernos',
        'Implementei APIs RESTful e arquitetura de microserviços com Node.js',
        'Participei de revisões de código e mentorei desenvolvedores júnior',
      ],
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    logoColor: '#059669',
  },
  {
    id: 'cwi',
    company: 'CWI Software',
    role: {
      en: 'Full-Stack Software Engineer',
      pt: 'Engenheira de Software Full-Stack',
    },
    period: '2021 - 2023',
    location: { en: 'Brasília, Brazil', pt: 'Brasília, Brasil' },
    description: {
      en: [
        'Developed enterprise applications for major Brazilian corporations',
        'Led frontend development using React and Vue.js frameworks',
        'Implemented automated testing strategies improving code quality by 40%',
        'Collaborated with UX team to enhance user experience and interface design',
      ],
      pt: [
        'Desenvolvi aplicações empresariais para grandes corporações brasileiras',
        'Liderei desenvolvimento frontend usando frameworks React e Vue.js',
        'Implementei estratégias de testes automatizados melhorando qualidade do código em 40%',
        'Colaborei com equipe de UX para aprimorar experiência do usuário e design de interface',
      ],
    },
    technologies: ['React', 'Vue.js', 'TypeScript', 'Java', 'Spring Boot', 'Jest', 'Cypress'],
    logoColor: '#8B5CF6',
  },
  {
    id: 'collegia',
    company: 'Collegia',
    role: {
      en: 'Frontend Developer',
      pt: 'Desenvolvedora Frontend',
    },
    period: '2021',
    location: { en: 'Brasília, Brazil', pt: 'Brasília, Brasil' },
    description: {
      en: [
        'Developed educational platform interfaces using React and modern JavaScript',
        'Implemented responsive designs for optimal learning experience across devices',
        'Collaborated with backend team to integrate RESTful APIs',
        'Participated in agile ceremonies and sprint planning',
      ],
      pt: [
        'Desenvolvi interfaces de plataforma educacional usando React e JavaScript moderno',
        'Implementei designs responsivos para experiência de aprendizado otimizada em todos os dispositivos',
        'Colaborei com equipe backend para integrar APIs RESTful',
        'Participei de cerimônias ágeis e planejamento de sprints',
      ],
    },
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'REST APIs'],
    logoColor: '#F59E0B',
  },
  {
    id: 'coopersystem',
    company: 'Coopersystem',
    role: {
      en: 'Frontend Developer',
      pt: 'Desenvolvedora Frontend',
    },
    period: '2019 - 2021',
    location: { en: 'Brasília, Brazil', pt: 'Brasília, Brasil' },
    description: {
      en: [
        'Built and maintained web applications for cooperative financial systems',
        'Developed responsive user interfaces with focus on accessibility',
        'Implemented frontend solutions using React and modern CSS techniques',
        'Worked closely with designers to translate mockups into functional interfaces',
      ],
      pt: [
        'Construí e mantive aplicações web para sistemas financeiros cooperativos',
        'Desenvolvi interfaces de usuário responsivas com foco em acessibilidade',
        'Implementei soluções frontend usando React e técnicas CSS modernas',
        'Trabalhei próximo a designers para traduzir mockups em interfaces funcionais',
      ],
    },
    technologies: ['React', 'JavaScript', 'SASS', 'Bootstrap', 'Git', 'REST APIs'],
    logoColor: '#EC4899',
  },
  {
    id: 'ais',
    company: 'AIS Digital',
    role: {
      en: 'Junior Frontend Developer',
      pt: 'Desenvolvedora Frontend Júnior',
    },
    period: '2018 - 2019',
    location: { en: 'Brasília, Brazil', pt: 'Brasília, Brasil' },
    description: {
      en: [
        'Started professional career developing web interfaces for digital products',
        'Learned and applied best practices in HTML, CSS, and JavaScript',
        'Collaborated with senior developers to deliver client projects',
        'Participated in code reviews and continuous learning initiatives',
      ],
      pt: [
        'Iniciei carreira profissional desenvolvendo interfaces web para produtos digitais',
        'Aprendi e apliquei melhores práticas em HTML, CSS e JavaScript',
        'Colaborei com desenvolvedores sêniores para entregar projetos de clientes',
        'Participei de revisões de código e iniciativas de aprendizado contínuo',
      ],
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Git'],
    logoColor: '#06B6D4',
  },
];
