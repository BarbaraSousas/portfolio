export type PostCategory = 'tutorial' | 'article' | 'reflection' | 'case-study';

export interface Post {
  id: string;
  slug: string;
  title: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  content: {
    en: string;
    pt: string;
  };
  category: PostCategory;
  tags: string[];
  coverImage?: string;
  date: string; // ISO format: 2024-01-15
  readingTime: number; // in minutes
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: '3',
    slug: 'frontend-relevance-developer-authority',
    title: {
      en: 'The Relevance of Frontend and Developer Authority',
      pt: 'A Relevância do Frontend e a Autoridade do Desenvolvedor',
    },
    description: {
      en: 'A personal reflection on why frontend development is much more than just appearance, and how it shaped my perspective as a full-stack engineer.',
      pt: 'Uma reflexão pessoal sobre por que o desenvolvimento frontend é muito mais que aparência, e como isso moldou minha perspectiva como engenheira full-stack.',
    },
    content: {
      en: `A very common discussion among developers is how much relevance frontend has and whether it really generates authority for professionals focused on this area. Here's my perspective.

Behind a truly good frontend developer lies **a highly qualified engineer**. Frontend **forces you to understand the business**. It's in the conception of the interface that the product's purpose becomes clear and decisions stop being abstract to be tested in practice.

In my experience, many business contracts **completely lose their meaning** when they reach the frontend development stage. I've lived through this many times. What is often treated as a "frontend problem" usually originates much earlier in the initial product definitions, in poorly thought-out APIs, and in contracts that don't represent what the business really needs.

Frontend ends up being **the point where these flaws become most evident**. It's where we realize what works, what generates friction, and what simply doesn't hold up when it needs to be used by real people.

All of this helped me build a much more complete view of the product as a whole. To create truly good interfaces, I needed to:

- understand how data is modeled and delivered
- challenge poorly designed APIs
- translate complex business rules into simple flows
- participate in interface ideation and question the product's purpose

This process brought me much more clarity and confidence when thinking about building a new product as a full-stack developer. **The visibility that the interface offers forces better decisions** and helps align product, business, and engineering from the start.

In the end, **frontend isn't just about appearance**. It's about how everything works together. And it was this deep dive that made me a more complete professional.

The frontend doesn't just implement what was designed, it **validates, questions, and often reveals the gaps** that exist in the entire product conception. That's why **a good frontend developer is, above all, a skilled engineer**.`,
      pt: `Uma discussão muito comum entre desenvolvedores é o quanto o frontend tem relevância e se ele realmente gera autoridade para profissionais focados nessa área. E essa é a minha opinião.

Por trás de um dev frontend realmente bom existe **um engenheiro altamente qualificado**. O frontend **força o entendimento do negócio**. É na concepção da interface que o propósito do produto fica claro e as decisões deixam de ser abstratas para serem testadas na prática.

Na minha experiência, muitos contratos de negócio **perdem completamente o sentido** quando chegam na etapa de desenvolvimento do frontend. Vivi isso várias vezes. O que muitas vezes é tratado como um "problema do front" normalmente tem origem bem antes, nas definições iniciais do produto, em APIs mal pensadas e em contratos que não representam o que o negócio realmente precisa.

O frontend acaba sendo **o ponto onde essas falhas ficam mais evidentes**. É ali que percebemos o que funciona, o que gera fricção e o que simplesmente não se sustenta quando precisa ser usado por pessoas reais.

Tudo isso me ajudou a construir uma visão muito mais completa do produto como um todo. Para criar interfaces realmente boas, eu precisei:

- entender como os dados são modelados e entregues
- questionar APIs mal desenhadas
- traduzir regras de negócio complexas em fluxos simples
- participar da ideação da interface e questionar o propósito do produto

Esse processo me trouxe muito mais clareza e segurança na hora de pensar a construção de um novo produto como dev full stack. **A visibilidade que a interface oferece força decisões melhores** e ajuda a alinhar produto, negócio e engenharia desde o início.

No fim, **frontend não é só sobre aparência**. É sobre como tudo funciona junto. E foi esse aprofundamento que me tornou uma profissional mais completa.

O frontend não apenas implementa o que foi pensado, ele **valida, questiona e muitas vezes revela as lacunas** que existem em toda a concepção do produto. Por isso, **um bom desenvolvedor frontend é, antes de tudo, um engenheiro qualificado**.`,
    },
    category: 'reflection',
    tags: ['Frontend', 'Career', 'Software Engineering', 'Full-Stack'],
    date: '2026-01-14',
    readingTime: 5,
    featured: true,
  },
];
