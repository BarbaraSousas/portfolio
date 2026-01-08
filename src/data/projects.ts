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
    featured: true,
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
