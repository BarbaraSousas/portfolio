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

export const projects: Project[] = [
  {
    id: 'subscription-radar',
    title: 'Subscription Radar',
    description: {
      en: 'Track recurring expenses, set renewal reminders, forecast spending, and analyze subscriptions by category',
      pt: 'Rastreie despesas recorrentes, defina lembretes de renovação, preveja gastos e analise assinaturas por categoria',
    },
    longDescription: {
      en: 'A comprehensive subscription management platform built with Next.js and FastAPI. Subscription Radar helps you track all your recurring expenses, set renewal reminders, forecast future spending, and analyze your subscriptions by category. Never miss a renewal or lose track of your monthly spending again!',
      pt: 'Uma plataforma completa de gerenciamento de assinaturas construída com Next.js e FastAPI. O Subscription Radar ajuda você a rastrear todas as suas despesas recorrentes, definir lembretes de renovação, prever gastos futuros e analisar suas assinaturas por categoria. Nunca mais perca uma renovação ou perca o controle dos seus gastos mensais!',
    },
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'SQLModel',
      'PostgreSQL',
      'Axios',
    ],
    type: 'fullstack',
    githubUrl: 'https://github.com/BarbaraSousas/subscription-radar',
    images: [
      '/portfolio/projects/subscription-radar-1.png',
      '/portfolio/projects/subscription-radar-2.png',
      '/portfolio/projects/subscription-radar-3.png',
      '/portfolio/projects/subscription-radar-4.png',
    ],
    featured: false,
    features: {
      en: [
        'Track all recurring subscriptions in one place',
        'Set customizable renewal reminders',
        'Forecast future spending with analytics',
        'Categorize subscriptions for better organization',
        'View monthly and yearly totals',
        'Dashboard with key metrics and insights',
        'Full-stack architecture with Next.js and FastAPI',
      ],
      pt: [
        'Rastreie todas as assinaturas recorrentes em um só lugar',
        'Defina lembretes de renovação personalizáveis',
        'Preveja gastos futuros com análises',
        'Categorize assinaturas para melhor organização',
        'Visualize totais mensais e anuais',
        'Dashboard com métricas e insights principais',
        'Arquitetura full-stack com Next.js e FastAPI',
      ],
    },
  },
  {
    id: 'divisor-despesas',
    title: 'Divisor de Despesas',
    description: {
      en: 'Mobile expense splitting app with real-time balance tracking and automatic reimbursement calculation',
      pt: 'App mobile de divisão de despesas com rastreamento de saldos em tempo real e cálculo automático de reembolsos',
    },
    longDescription: {
      en: 'A comprehensive expense management solution built with React Native Expo and a robust NestJS backend following hexagonal architecture principles. Create groups, add expenses, and automatically calculate who owes whom. Share invitation links, track balances in real-time, and choose between equal or custom expense splitting.',
      pt: 'Uma solução completa de gerenciamento de despesas construída com React Native Expo e um backend robusto em NestJS seguindo princípios de arquitetura hexagonal. Crie grupos, adicione despesas e calcule automaticamente quem deve a quem. Compartilhe links de convite, acompanhe saldos em tempo real e escolha entre divisão igual ou personalizada.',
    },
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'NestJS',
      'Prisma',
      'SQLite',
      'Firebase',
      'Hexagonal Architecture',
    ],
    type: 'fullstack',
    githubUrl: 'https://github.com/BarbaraSousas/team-expense-splitter',
    images: [
      '/portfolio/projects/divisor-despesas-1.jpeg',
      '/portfolio/projects/divisor-despesas-2.jpeg',
      '/portfolio/projects/divisor-despesas-3.jpeg',
      '/portfolio/projects/divisor-despesas-4.jpeg',
      '/portfolio/projects/divisor-despesas-5.jpeg',
      '/portfolio/projects/divisor-despesas-6.jpeg',
    ],
    featured: false,
    features: {
      en: [
        'Create groups and invite members via shareable links',
        'Automatic expense division (equal or custom)',
        'Real-time balance tracking for each member',
        'Smart reimbursement calculation',
        'Expense history and detailed breakdowns',
        'Backend with hexagonal architecture for maintainability',
        'Offline-first approach with data synchronization',
      ],
      pt: [
        'Crie grupos e adicione membros via links compartilháveis',
        'Divisão automática de despesas (igual ou personalizada)',
        'Acompanhamento de saldos em tempo real para cada membro',
        'Cálculo inteligente de reembolsos',
        'Histórico de despesas e detalhamentos',
        'Backend com arquitetura hexagonal para manutenibilidade',
        'Abordagem offline-first com sincronização de dados',
      ],
    },
  },
];
