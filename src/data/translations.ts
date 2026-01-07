export type Language = 'en' | 'pt';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
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
      title: 'Professional Experience',
      subtitle: 'Building impactful solutions across diverse industries',
      present: 'Present',
    },
    // Education Page
    education: {
      title: 'Education & Learning',
      subtitle: 'Continuous learning and formal education',
    },
    // Projects Page
    projects: {
      title: 'Featured Projects',
      subtitle: 'A selection of my personal and professional work',
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
      title: 'Let\'s Connect',
      subtitle: 'Get in touch for opportunities, collaborations, or just to say hi!',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
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
      copyEmail: 'Click to copy email',
      emailCopied: 'Email copied!',
    },
    // Footer
    footer: {
      rights: 'All rights reserved.',
      built: 'Built with',
      and: 'and',
    },
  },
  pt: {
    // Navegação
    nav: {
      home: 'Início',
      experience: 'Experiência',
      education: 'Formação',
      projects: 'Projetos',
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
    // Seções da Página Inicial
    home: {
      techStack: {
        title: 'Stack Tecnológica',
        subtitle: 'Tecnologias que uso diariamente',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          mobile: 'Mobile',
          testing: 'Testes & Ferramentas',
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
      title: 'Experiência Profissional',
      subtitle: 'Construindo soluções impactantes em diversos setores',
      present: 'Atual',
    },
    // Página de Educação
    education: {
      title: 'Educação & Aprendizado',
      subtitle: 'Aprendizado contínuo e formação acadêmica',
    },
    // Página de Projetos
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Uma seleção dos meus trabalhos pessoais e profissionais',
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
        viewCode: 'Ver Código',
        viewDemo: 'Demo ao Vivo',
        viewDetails: 'Ver Detalhes',
        close: 'Fechar',
      },
      modal: {
        features: 'Funcionalidades Principais',
        technologies: 'Tecnologias Utilizadas',
        note: 'Este é um aplicativo mobile. Veja o código no GitHub ou assista ao vídeo de demonstração.',
      },
    },
    // Página de Contato
    contact: {
      title: 'Vamos Conversar',
      subtitle: 'Entre em contato para oportunidades, colaborações ou apenas para dizer olá!',
      form: {
        name: 'Seu Nome',
        email: 'Seu Email',
        message: 'Sua Mensagem',
        send: 'Enviar Mensagem',
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
      copyEmail: 'Clique para copiar o email',
      emailCopied: 'Email copiado!',
    },
    // Rodapé
    footer: {
      rights: 'Todos os direitos reservados.',
      built: 'Construído com',
      and: 'e',
    },
  },
};
