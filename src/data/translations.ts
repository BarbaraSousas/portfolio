export type Language = 'en' | 'pt';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      blog: 'Notes',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Barbara Araújo',
      title: 'Senior Full-Stack Engineer | Frontend-First',
      description: 'Passionate about building scalable, user-centric web and mobile applications. Specialized in React, TypeScript, and modern frontend architectures with 8+ years of experience.',
      cta: {
        projects: 'View Projects',
        contact: 'Get in Touch',
      },
    },
    // About Section
    about: {
      title: 'Who is',
      titleHighlight: 'SHE',
      aboutMe: 'About me',
      bio1: 'Full-stack developer with passion for creating elegant solutions',
      bio2: 'Powered by coffee and curiosity',
      quote: '"Clean code always looks like it was written by someone who cares."',
      quoteAuthor: '— Robert C. Martin, Clean Code',
      currentFocus: 'Current Focus',
      focus1: 'Building scalable web applications',
      focus2: 'Exploring modern frontend architectures',
      focus3: 'Learning and sharing knowledge',
      specialist: 'Specialist',
      expert: 'Expert',
    },
    // Writing Section
    writing: {
      title: 'Writing & Sharing',
      subtitle: 'Thoughts, tutorials, and learnings about development and technology',
      tutorials: 'Tutorials',
      tutorialsDesc: 'Step-by-step guides and how-tos',
      caseStudies: 'Case Studies',
      caseStudiesDesc: 'Deep dives into projects',
      thoughts: 'Thoughts',
      thoughtsDesc: 'Reflections on tech and career',
      til: 'TIL',
      tilDesc: 'Quick notes and snippets',
      comingSoon: 'Coming Soon',
      comingSoonDesc: 'Blog posts and articles are on their way. Stay tuned!',
    },
    // Home Page Sections
    home: {
      techStack: {
        title: 'Tech Stack',
        subtitle: 'Technologies I work with daily',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          mobile: 'Mobile',
          testing: 'Testing & Tools',
        },
      },
      highlights: {
        title: 'Impact & Achievements',
        metrics: [
          {
            value: '8+',
            label: 'Years of Experience',
          },
          {
            value: '25%',
            label: 'Performance Improvements',
          },
          {
            value: '40%',
            label: 'User Engagement Boost',
          },
          {
            value: '15+',
            label: 'Projects Delivered',
          },
        ],
      },
      cta: {
        title: 'Ready to build something amazing?',
        button: 'Explore My Work',
      },
    },
    // Experience Page
    experience: {
      title: 'Where I have worked',
      subtitle: 'Eight years of production software, from government systems and retail checkout to an LLM pipeline.',
      present: 'Present',
    },
    // Education Page
    education: {
      title: 'Education',
      subtitle: 'Formal education, and what I am studying now.',
    },
    // Projects Page
    projects: {
      title: 'Things I built on my own',
      subtitle: 'Personal projects with open code. Professional work is on the home page.',
      types: {
        all: 'All',
        web: 'Web',
        mobile: 'Mobile',
        fullstack: 'Full-Stack',
      },
      tags: {
        featured: 'Featured',
        mobile: 'Mobile App',
      },
      buttons: {
        viewCode: 'View Code',
        viewDemo: 'Live Demo',
        viewDetails: 'View Details',
        close: 'Close',
      },
      modal: {
        features: 'Key Features',
        technologies: 'Technologies Used',
        note: 'This is a mobile application. View the code on GitHub or watch the demo video.',
      },
    },
    // Contact Page
    contact: {
      title: 'Let\'s talk',
      subtitle: 'Open to senior full-stack and AI engineering roles, remote. Leave a note below or write to me directly.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
      info: {
        email: 'Email',
        location: 'Location',
        locationValue: 'Brasília, Brazil',
        socials: 'Connect with me',
      },
      copyEmail: 'copy email',
      emailCopied: 'copied',
    },
    // Footer
    footer: {
      rights: 'All rights reserved.',
      built: 'Built with',
      and: 'and',
    },
    // Blog
    blog: {
      title: 'Notes',
      subtitle: 'Writing about decisions, trade-offs and what I learn building software.',
      featured: 'Featured',
      readMore: 'Read more',
      backToBlog: 'All notes',
      minRead: 'min read',
      previousPost: 'Previous note',
      nextPost: 'Next note',
      searchPlaceholder: 'Search notes...',
      categories: 'Categories',
      tags: 'Tags',
      activeFilters: 'Active filters:',
      clearAll: 'Clear all',
      clearAllFilters: 'Clear all filters',
      noPostsFound: 'No notes match these filters.',
      showingPosts: '{{current}} of {{total}} notes',
      categoryLabels: {
        all: 'All',
        tutorial: 'Tutorials',
        article: 'Articles',
        reflection: 'Reflections',
        'case-study': 'Case Studies',
      },
    },
  },
  pt: {
    // Navegação
    nav: {
      home: 'Home',
      experience: 'Experiência',
      education: 'Formação',
      projects: 'Projetos',
      blog: 'Notas',
      contact: 'Contato',
    },
    // Seção Hero
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Barbara Araújo',
      title: 'Engenheira Full-Stack Sênior | Foco em Frontend',
      description: 'Apaixonada por construir aplicações web e mobile escaláveis e centradas no usuário. Especializada em React, TypeScript e arquiteturas frontend modernas com mais de 8 anos de experiência.',
      cta: {
        projects: 'Ver Projetos',
        contact: 'Entre em Contato',
      },
    },
    // Seção About
    about: {
      title: 'Quem é',
      titleHighlight: 'ELA',
      aboutMe: 'Sobre mim',
      bio1: 'Desenvolvedora full-stack com paixão por criar soluções elegantes',
      bio2: 'Movida a café e curiosidade',
      quote: '"Código limpo sempre parece ter sido escrito por alguém que se importa."',
      quoteAuthor: '— Robert C. Martin, Clean Code',
      currentFocus: 'Foco Atual',
      focus1: 'Construindo aplicações web escaláveis',
      focus2: 'Explorando arquiteturas frontend modernas',
      focus3: 'Aprendendo e compartilhando conhecimento',
      specialist: 'Especialista',
      expert: 'Expert',
    },
    // Seção de Escrita
    writing: {
      title: 'Escrita & Compartilhamento',
      subtitle: 'Pensamentos, tutoriais e aprendizados sobre desenvolvimento e tecnologia',
      tutorials: 'Tutoriais',
      tutorialsDesc: 'Guias passo a passo e how-tos',
      caseStudies: 'Case Studies',
      caseStudiesDesc: 'Análises profundas de projetos',
      thoughts: 'Pensamentos',
      thoughtsDesc: 'Reflexões sobre tech e carreira',
      til: 'TIL',
      tilDesc: 'Notas rápidas e snippets',
      comingSoon: 'Em Breve',
      comingSoonDesc: 'Posts e artigos estão a caminho. Fique ligado!',
    },
    // Seções da Página Inicial
    home: {
      techStack: {
        title: 'Tech Stack',
        subtitle: 'Tecnologias que uso diariamente',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          mobile: 'Mobile',
          testing: 'Testing & Tools',
        },
      },
      highlights: {
        title: 'Impacto & Conquistas',
        metrics: [
          {
            value: '8+',
            label: 'Anos de Experiência',
          },
          {
            value: '25%',
            label: 'Melhoria de Performance',
          },
          {
            value: '40%',
            label: 'Aumento no Engajamento',
          },
          {
            value: '15+',
            label: 'Projetos Entregues',
          },
        ],
      },
      cta: {
        title: 'Pronto para construir algo incrível?',
        button: 'Explorar Meu Trabalho',
      },
    },
    // Página de Experiência
    experience: {
      title: 'Onde trabalhei',
      subtitle: 'Oito anos de software em produção, de sistemas de governo e checkout de varejo a um pipeline de LLM.',
      present: 'Atual',
    },
    // Página de Educação
    education: {
      title: 'Formação',
      subtitle: 'Formação acadêmica e o que estou estudando agora.',
    },
    // Página de Projetos
    projects: {
      title: 'Coisas que construí por conta própria',
      subtitle: 'Projetos pessoais com código aberto. O trabalho profissional está na home.',
      types: {
        all: 'Todos',
        web: 'Web',
        mobile: 'Mobile',
        fullstack: 'Full-Stack',
      },
      tags: {
        featured: 'Destaque',
        mobile: 'App Mobile',
      },
      buttons: {
        viewCode: 'Ver código',
        viewDemo: 'Ver demo',
        viewDetails: 'Ver detalhes',
        close: 'Fechar',
      },
      modal: {
        features: 'Principais funcionalidades',
        technologies: 'Tecnologias',
        note: 'Este é um aplicativo mobile. Veja o código no GitHub ou assista ao vídeo de demonstração.',
      },
    },
    // Página de Contato
    contact: {
      title: 'Vamos conversar',
      subtitle: 'Aberta a vagas sênior de engenharia full-stack e de IA, em formato remoto. Deixe um recado abaixo ou me escreva direto.',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso!',
        error: 'Falha ao enviar mensagem. Tente novamente.',
      },
      info: {
        email: 'Email',
        location: 'Localização',
        locationValue: 'Brasília, Brasil',
        socials: 'Conecte-se comigo',
      },
      copyEmail: 'copiar email',
      emailCopied: 'copiado',
    },
    // Rodapé
    footer: {
      rights: 'Todos os direitos reservados.',
      built: 'Construído com',
      and: 'e',
    },
    // Blog
    blog: {
      title: 'Notas',
      subtitle: 'Escrevo sobre decisões, trade-offs e o que aprendo construindo software.',
      featured: 'Destaque',
      readMore: 'Ler mais',
      backToBlog: 'Todas as notas',
      minRead: 'min de leitura',
      previousPost: 'Nota anterior',
      nextPost: 'Próxima nota',
      searchPlaceholder: 'Buscar notas...',
      categories: 'Categorias',
      tags: 'Tags',
      activeFilters: 'Filtros ativos:',
      clearAll: 'Limpar tudo',
      clearAllFilters: 'Limpar todos os filtros',
      noPostsFound: 'Nenhuma nota com esses filtros.',
      showingPosts: '{{current}} de {{total}} notas',
      categoryLabels: {
        all: 'Todos',
        tutorial: 'Tutoriais',
        article: 'Artigos',
        reflection: 'Reflexões',
        'case-study': 'Estudos de caso',
      },
    },
  },
};
