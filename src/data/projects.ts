export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    pt: string;
  };
  longDescription?: {
    en: string;
    pt: string;
  };
  technologies: string[];
  type: 'web' | 'mobile' | 'fullstack';
  githubUrl: string;
  demoUrl?: string;
  images: string[];
  featured?: boolean;
  features?: {
    en: string[];
    pt: string[];
  };
}

/**
 * ========================================
 * INSTRUÇÕES PARA BARBARA
 * ========================================
 *
 * Este arquivo contém projetos de EXEMPLO. Substitua-os pelos seus projetos reais do GitHub!
 *
 * PASSO A PASSO:
 *
 * 1. Acesse seu GitHub: https://github.com/BarbaraSousas
 * 2. Escolha seus 5-10 melhores projetos (públicos e que você tem orgulho de mostrar)
 * 3. Para cada projeto, preencha os campos abaixo:
 *    - id: identificador único (use o nome do repo em kebab-case)
 *    - title: Nome do projeto
 *    - description: Breve descrição (1-2 linhas) em PT e EN
 *    - longDescription: Descrição completa (opcional, para modal de detalhes)
 *    - technologies: Array com as tecnologias usadas (ex: ['React', 'TypeScript', 'Node.js'])
 *    - type: 'web', 'mobile' ou 'fullstack'
 *    - githubUrl: Link do repositório no GitHub
 *    - demoUrl: Link da demo ao vivo (se houver - Vercel, Netlify, etc.)
 *    - images: Array com caminhos das imagens (veja instruções abaixo)
 *    - featured: true para destacar na home page
 *    - features: Lista de funcionalidades principais (opcional)
 *
 * 4. ADICIONAR SCREENSHOTS/IMAGENS:
 *    - Crie a pasta: /src/assets/projects/
 *    - Adicione screenshots dos seus projetos (PNG ou JPG)
 *    - Nomeie os arquivos de forma clara: projeto-nome-1.png, projeto-nome-2.png
 *    - Use caminhos relativos: ['/assets/projects/seu-projeto.png']
 *    - Para projetos mobile: tire screenshots em emulador/dispositivo
 *
 * 5. PARA PROJETOS MOBILE (React Native):
 *    - Use type: 'mobile'
 *    - Adicione múltiplas screenshots mostrando diferentes telas
 *    - Preencha o campo 'features' com funcionalidades principais
 *    - Se tiver vídeo demo, adicione o link no longDescription
 *
 * 6. DICAS:
 *    - Priorize projetos com código limpo e bem documentado
 *    - Inclua projetos que demonstrem diferentes habilidades
 *    - Marque como 'featured: true' seus 3-4 melhores projetos
 *    - Certifique-se que os repositórios têm README.md explicativo
 *
 * ========================================
 */

export const projects: Project[] = [
  // ========================================
  // EXEMPLO 1: Projeto Web Full-Stack
  // ========================================
  {
    id: 'example-ecommerce',
    title: 'E-Commerce Platform',
    description: {
      en: 'Full-featured e-commerce platform with payment integration and admin dashboard',
      pt: 'Plataforma de e-commerce completa com integração de pagamentos e painel administrativo',
    },
    longDescription: {
      en: 'A comprehensive e-commerce solution built with modern web technologies. Features include product catalog, shopping cart, checkout process with Stripe integration, user authentication, order management, and admin dashboard for inventory control.',
      pt: 'Uma solução completa de e-commerce construída com tecnologias web modernas. Funcionalidades incluem catálogo de produtos, carrinho de compras, processo de checkout com integração Stripe, autenticação de usuários, gerenciamento de pedidos e painel administrativo para controle de estoque.',
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    type: 'fullstack',
    githubUrl: 'https://github.com/BarbaraSousas/example-project',
    demoUrl: 'https://example-demo.vercel.app',
    images: ['/assets/projects/ecommerce-1.png'],
    featured: true,
    features: {
      en: [
        'User authentication with JWT',
        'Product search and filtering',
        'Shopping cart with real-time updates',
        'Stripe payment integration',
        'Admin dashboard for inventory management',
        'Order tracking and history',
      ],
      pt: [
        'Autenticação de usuários com JWT',
        'Busca e filtragem de produtos',
        'Carrinho de compras com atualizações em tempo real',
        'Integração de pagamento Stripe',
        'Painel administrativo para gerenciamento de estoque',
        'Rastreamento e histórico de pedidos',
      ],
    },
  },

  // ========================================
  // EXEMPLO 2: Projeto Mobile (React Native)
  // ========================================
  {
    id: 'example-fitness-tracker',
    title: 'Fitness Tracker App',
    description: {
      en: 'Mobile app for tracking workouts, nutrition, and fitness goals',
      pt: 'App mobile para rastreamento de treinos, nutrição e metas fitness',
    },
    longDescription: {
      en: 'Cross-platform mobile application built with React Native. Track your workouts, log meals, monitor progress with charts, and set personalized fitness goals. Includes offline mode and data synchronization.',
      pt: 'Aplicativo mobile multiplataforma construído com React Native. Rastreie seus treinos, registre refeições, monitore progresso com gráficos e defina metas fitness personalizadas. Inclui modo offline e sincronização de dados.',
    },
    technologies: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'React Navigation'],
    type: 'mobile',
    githubUrl: 'https://github.com/BarbaraSousas/example-fitness-app',
    images: [
      '/assets/projects/fitness-1.png',
      '/assets/projects/fitness-2.png',
      '/assets/projects/fitness-3.png',
    ],
    featured: true,
    features: {
      en: [
        'Workout tracking with exercise library',
        'Nutrition logging with calorie counter',
        'Progress charts and statistics',
        'Goal setting and reminders',
        'Offline mode with data sync',
        'Social features for sharing achievements',
      ],
      pt: [
        'Rastreamento de treinos com biblioteca de exercícios',
        'Registro de nutrição com contador de calorias',
        'Gráficos de progresso e estatísticas',
        'Definição de metas e lembretes',
        'Modo offline com sincronização de dados',
        'Recursos sociais para compartilhar conquistas',
      ],
    },
  },

  // ========================================
  // EXEMPLO 3: Projeto Web Frontend
  // ========================================
  {
    id: 'example-portfolio-generator',
    title: 'Portfolio Generator',
    description: {
      en: 'Interactive tool to generate beautiful portfolio websites',
      pt: 'Ferramenta interativa para gerar sites de portfólio bonitos',
    },
    longDescription: {
      en: 'A modern web application that helps developers and designers create stunning portfolio websites. Choose from multiple templates, customize colors and content, and export ready-to-deploy code.',
      pt: 'Uma aplicação web moderna que ajuda desenvolvedores e designers a criar sites de portfólio impressionantes. Escolha entre múltiplos templates, personalize cores e conteúdo, e exporte código pronto para deploy.',
    },
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    type: 'web',
    githubUrl: 'https://github.com/BarbaraSousas/example-generator',
    demoUrl: 'https://example-generator.vercel.app',
    images: ['/assets/projects/generator-1.png'],
    featured: false,
    features: {
      en: [
        'Multiple pre-designed templates',
        'Real-time preview',
        'Color scheme customization',
        'Drag-and-drop section ordering',
        'Export to HTML/CSS/JS',
        'Responsive design preview',
      ],
      pt: [
        'Múltiplos templates pré-desenhados',
        'Preview em tempo real',
        'Personalização de esquema de cores',
        'Ordenação de seções por arrastar e soltar',
        'Exportar para HTML/CSS/JS',
        'Preview de design responsivo',
      ],
    },
  },

  // ========================================
  // ADICIONE SEUS PROJETOS ABAIXO
  // ========================================
  // Copie e cole um dos exemplos acima e modifique com os dados do seu projeto
  // Lembre-se de adicionar as screenshots em /src/assets/projects/

  // {
  //   id: 'seu-projeto-aqui',
  //   title: 'Nome do Seu Projeto',
  //   description: {
  //     en: 'Brief description in English',
  //     pt: 'Breve descrição em português',
  //   },
  //   technologies: ['Tech1', 'Tech2', 'Tech3'],
  //   type: 'web', // ou 'mobile' ou 'fullstack'
  //   githubUrl: 'https://github.com/BarbaraSousas/seu-repo',
  //   demoUrl: 'https://seu-projeto.vercel.app', // opcional
  //   images: ['/assets/projects/seu-projeto.png'],
  //   featured: false,
  // },
];
