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
    id: 'iesb',
    institution: 'IESB - Instituto de Educação Superior de Brasília',
    degree: {
      en: 'Associate Degree',
      pt: 'Tecnólogo',
    },
    field: {
      en: 'Systems Analysis and Development',
      pt: 'Análise e Desenvolvimento de Sistemas',
    },
    year: '2018',
    description: {
      en: 'Comprehensive program covering software development, database management, system architecture, and agile methodologies.',
      pt: 'Programa abrangente cobrindo desenvolvimento de software, gerenciamento de banco de dados, arquitetura de sistemas e metodologias ágeis.',
    },
    logoColor: '#4F46E5',
  },
  {
    id: 'unip',
    institution: 'UNIP - Universidade Paulista',
    degree: {
      en: 'Bachelor\'s Degree',
      pt: 'Bacharelado',
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
