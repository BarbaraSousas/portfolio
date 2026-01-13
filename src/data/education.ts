export interface Education {
  id: string;
  institution: string;
  degree: {
    en: string;
    pt: string;
  };
  field: {
    en: string;
    pt: string;
  };
  year: string;
  description: {
    en: string;
    pt: string;
  };
  logoColor: string;
}

export const education: Education[] = [
  {
    id: 'software-engineering',
    institution: 'Gran Faculdade',
    degree: {
      en: 'Bachelor\'s Degree',
      pt: 'Bacharelado',
    },
    field: {
      en: 'Software Engineering',
      pt: 'Engenharia de Software',
    },
    year: '2025 - Present',
    description: {
      en: 'Currently in the first semester. Focused on software development methodologies, algorithms, data structures, and engineering best practices.',
      pt: 'Atualmente no primeiro semestre. Focado em metodologias de desenvolvimento de software, algoritmos, estruturas de dados e melhores práticas de engenharia.',
    },
    logoColor: '#10B981',
  },
  {
    id: 'unip',
    institution: 'UNIP - Universidade Paulista',
    degree: {
      en: 'Technical Course',
      pt: 'Curso Técnico',
    },
    field: {
      en: 'Graphic Design',
      pt: 'Design Gráfico',
    },
    year: '2016',
    description: {
      en: 'Focused on visual communication, user interface design, typography, and digital media. Strong foundation in design principles that complement software development.',
      pt: 'Focado em comunicação visual, design de interface de usuário, tipografia e mídia digital. Base sólida em princípios de design que complementam o desenvolvimento de software.',
    },
    logoColor: '#EC4899',
  },
];
