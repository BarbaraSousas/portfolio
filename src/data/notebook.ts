// Home page content ("engineering notebook"). Source: work notes, Oct 2026.
// Kept deliberately high level: nothing beyond what the public resume says about employers or team projects.

export type Lane = 'code' | 'model' | 'human';

type Bi = { en: string; pt: string };

export interface RoutedDecision {
  lane: Lane;
  title: Bi;
  why: Bi;
}

export interface LogEntry {
  date: string;
  project: Bi;
  text: Bi;
}

export interface Ownership {
  title: Bi;
  label: Bi;
}

export interface DecisionRecord {
  where: string;
  problem: Bi;
  chose: Bi;
  result: Bi;
}

export interface Earlier {
  years: string;
  company: string;
  role: Bi;
  text: Bi;
}

export interface SideProject {
  title: string;
  text: Bi;
  tags: string;
}

export const logUpdated = '27.10.2026';

export const notebook = {
  en: {
    margin: {
      page: 'p. 01',
      location: 'Brasília, BR\nremote, UTC−3',
      current: '↳ currently at CloZ,\nParis (remote)',
    },
    hero: {
      before: 'I build AI systems people ',
      emphasis: 'depend on',
      after: ', and decide where the model ends and plain code begins.',
      lede: 'Senior full-stack engineer, 8+ years in production. Today I run an LLM pipeline that generates fashion looks for real e-commerce stores, end to end: from the LangGraph graph to the queues, the AWS infra and the dashboard where people review what the model made.',
    },
    router: {
      label: 'how I decide',
      hint: '↳ click a lane',
      title: 'Model, code, or',
      titleEm: 'a person',
      sub: 'Most of my work is choosing which of these three handles each step. A few examples:',
      lanes: {
        code: { name: 'plain code', desc: 'Deterministic, testable, cheap. The default.' },
        model: { name: 'model + validation', desc: 'Only where judgment is the product. Output is checked before it moves on.' },
        human: { name: 'human in the loop', desc: 'When being wrong is expensive or the checks disagree.' },
      },
      short: { code: 'code', model: 'model', human: 'human' },
    },
    now: {
      label: 'now',
      updated: 'updated',
      note: '↳ pulled from my\nweekly notes',
      title: 'Recently',
    },
    caseStudy: {
      label: 'case study',
      period: 'Jan 2026 → now',
      role: 'Senior Full-Stack\nEngineer',
      note: '↳ high-level overview only',
      title: 'CloZ: AI-generated looks for e-commerce',
      sub: 'A Franco-Brazilian startup that turns a store’s product catalog into styled outfits shoppers can buy. I own the system from design to on-call.',
      prose: [
        'The interesting part is not calling the model. It is everything around it: validating what comes back, deciding what happens when a check fails, and making sure a person sees the cases where automation should not have the last word.',
        'I design each step to fail on its own without taking the rest of the system down, and I keep enough visibility in production to know why something happened, not just that it did.',
      ],
      diagram: {
        catalog: 'catalog',
        generate: 'model generates',
        validate: 'automated checks',
        approve: 'approved',
        human: 'human review',
        retry: 'retry with feedback',
      },
    },
    records: {
      label: 'decision log',
      note: '↳ the format I use\nin my own notes',
      title: 'Decision records',
      sub: 'Problem, what I chose, and what happened.',
      cols: ['where', 'problem', 'chose', 'result'],
    },
    earlier: {
      label: 'before',
      years: '8+ years',
      title: 'Earlier work',
      all: 'Full experience →',
    },
    also: {
      label: 'also built',
      note: '↳ open source',
      all: 'All projects →',
    },
    contact: {
      label: 'last page',
      title: 'Building something with AI that has to',
      titleEm: 'actually work',
      sub: 'Open to senior full-stack and AI engineering roles, remote.',
      copy: 'copy email',
      copied: 'copied',
    },
  },
  pt: {
    margin: {
      page: 'p. 01',
      location: 'Brasília, BR\nremoto, UTC−3',
      current: '↳ hoje na CloZ,\nParis (remoto)',
    },
    hero: {
      before: 'Construo sistemas de IA em que as pessoas ',
      emphasis: 'confiam',
      after: ', e decido onde termina o modelo e começa o código.',
      lede: 'Engenheira full-stack sênior, com mais de 8 anos de software em produção. Hoje cuido, de ponta a ponta, de um pipeline de LLM que gera looks de moda para lojas reais de e-commerce: do grafo em LangGraph às filas, da infra na AWS ao painel onde as pessoas revisam o que o modelo gerou.',
    },
    router: {
      label: 'como eu decido',
      hint: '↳ clique numa trilha',
      title: 'Modelo, código ou',
      titleEm: 'uma pessoa',
      sub: 'Boa parte do meu trabalho é escolher qual dos três cuida de cada etapa. Alguns exemplos:',
      lanes: {
        code: { name: 'código simples', desc: 'Determinístico, testável, barato. O padrão.' },
        model: { name: 'modelo + validação', desc: 'Só onde o julgamento é o produto. A saída é checada antes de seguir.' },
        human: { name: 'revisão humana', desc: 'Quando errar custa caro ou as checagens discordam.' },
      },
      short: { code: 'código', model: 'modelo', human: 'humano' },
    },
    now: {
      label: 'agora',
      updated: 'atualizado em',
      note: '↳ tirado das minhas\nnotas semanais',
      title: 'Recentemente',
    },
    caseStudy: {
      label: 'estudo de caso',
      period: 'jan 2026 → hoje',
      role: 'Engenheira Full-Stack\nSênior',
      note: '↳ visão geral, em alto nível',
      title: 'CloZ: looks gerados por IA para e-commerce',
      sub: 'Startup franco-brasileira que transforma o catálogo de uma loja em looks prontos para comprar. Cuido do sistema inteiro, do desenho à operação em produção.',
      prose: [
        'A parte interessante não é chamar o modelo. É tudo em volta: validar o que volta, decidir o que acontece quando uma checagem falha e garantir que uma pessoa veja os casos em que a automação não deve dar a palavra final.',
        'Desenho cada etapa para falhar sozinha sem derrubar o resto do sistema, e mantenho visibilidade suficiente em produção para saber por que algo aconteceu, não só que aconteceu.',
      ],
      diagram: {
        catalog: 'catálogo',
        generate: 'modelo gera',
        validate: 'checagens',
        approve: 'aprovado',
        human: 'revisão humana',
        retry: 'nova tentativa com feedback',
      },
    },
    records: {
      label: 'decisões',
      note: '↳ o formato que uso\nnas minhas notas',
      title: 'Decisões registradas',
      sub: 'O problema, o que escolhi e o que aconteceu.',
      cols: ['onde', 'problema', 'escolha', 'resultado'],
    },
    earlier: {
      label: 'antes',
      years: '8+ anos',
      title: 'Trabalhos anteriores',
      all: 'Experiência completa →',
    },
    also: {
      label: 'também fiz',
      note: '↳ open source',
      all: 'Todos os projetos →',
    },
    contact: {
      label: 'última página',
      title: 'Construindo algo com IA que precisa',
      titleEm: 'funcionar de verdade',
      sub: 'Aberta a vagas sênior de engenharia full-stack e de IA, em formato remoto.',
      copy: 'copiar email',
      copied: 'copiado',
    },
  },
};

export const heroStack = [
  'Python · TypeScript · SQL',
  'LangGraph · Claude · Gemini',
  'NestJS · FastAPI · Postgres',
  'AWS · Terraform',
];

export const routedDecisions: RoutedDecision[] = [
  {
    lane: 'code',
    title: { en: 'Deduplicating and counting events', pt: 'Deduplicar e contar eventos' },
    why: {
      en: 'Deterministic problems get deterministic code. No model needed to count correctly.',
      pt: 'Problema determinístico pede código determinístico. Não precisa de modelo para contar certo.',
    },
  },
  {
    lane: 'model',
    title: { en: 'Generating creative content from a catalog', pt: 'Gerar conteúdo criativo a partir de um catálogo' },
    why: {
      en: 'Judgment is the product here. Output is validated before it moves on.',
      pt: 'Aqui o julgamento é o produto. A saída é validada antes de seguir.',
    },
  },
  {
    lane: 'code',
    title: { en: 'Routing, retries and business rules', pt: 'Roteamento, retries e regras de negócio' },
    why: {
      en: 'Anything that must be predictable and testable stays in code.',
      pt: 'Tudo que precisa ser previsível e testável fica em código.',
    },
  },
  {
    lane: 'human',
    title: { en: 'Automated checks disagree', pt: 'Checagens automáticas discordam' },
    why: {
      en: 'Neither side decides alone. A person reviews it.',
      pt: 'Nenhum lado decide sozinho. Uma pessoa revisa.',
    },
  },
  {
    lane: 'human',
    title: { en: 'The validation step itself fails', pt: 'A própria validação falha' },
    why: {
      en: 'Retry, then hand it to a person. An outage should never become an automatic rejection.',
      pt: 'Retry e depois uma pessoa. Uma queda nunca deve virar rejeição automática.',
    },
  },
  {
    lane: 'model',
    title: { en: 'Classifying items with structured attributes', pt: 'Classificar itens com atributos estruturados' },
    why: {
      en: 'Structured output with schema validation, retries and alerts when something keeps failing.',
      pt: 'Saída estruturada com validação de schema, retries e alerta quando algo falha repetidamente.',
    },
  },
];

export const recentLog: LogEntry[] = [
  {
    date: '10.2026',
    project: { en: 'CloZ', pt: 'CloZ' },
    text: {
      en: 'Improving observability of AI generation, so human review feeds back into how the system is evaluated.',
      pt: 'Melhorando a observabilidade da geração por IA, para que a revisão humana alimente a forma como o sistema é avaliado.',
    },
  },
  {
    date: '10.2026',
    project: { en: 'Side project', pt: 'Projeto paralelo' },
    text: {
      en: 'Building the backend of a WhatsApp sales product with a small team. Python, Django, PostgreSQL.',
      pt: 'Construindo o backend de um produto de vendas pelo WhatsApp com um time pequeno. Python, Django, PostgreSQL.',
    },
  },
  {
    date: '09.2026',
    project: { en: 'CloZ', pt: 'CloZ' },
    text: {
      en: 'Shipped new merchant-facing features and kept hardening the generation pipeline in production.',
      pt: 'Entreguei novas features para lojistas e segui fortalecendo o pipeline de geração em produção.',
    },
  },
];

export const clozStack = 'LangGraph · BullMQ · pgvector · AWS · Terraform';

export const clozOwnership: Ownership[] = [
  {
    title: { en: 'LLM pipeline', pt: 'Pipeline de LLM' },
    label: { en: 'LangGraph, structured outputs, vector search', pt: 'LangGraph, saídas estruturadas, busca vetorial' },
  },
  {
    title: { en: 'Async processing', pt: 'Processamento assíncrono' },
    label: { en: 'Durable queues with retries', pt: 'Filas duráveis com retries' },
  },
  {
    title: { en: 'Infrastructure', pt: 'Infraestrutura' },
    label: { en: 'AWS provisioned with Terraform', pt: 'AWS provisionada com Terraform' },
  },
  {
    title: { en: 'Production', pt: 'Produção' },
    label: { en: 'Monitoring, alerts, on-call', pt: 'Monitoramento, alertas, plantão' },
  },
];

export const decisionRecords: DecisionRecord[] = [
  {
    where: 'CloZ',
    problem: {
      en: 'Where AI adds value in the product',
      pt: 'Onde a IA agrega valor no produto',
    },
    chose: {
      en: 'Decide step by step with the founders; use a model only where judgment is the product',
      pt: 'Decidir etapa por etapa com os founders; usar modelo só onde o julgamento é o produto',
    },
    result: { en: 'simpler system, model calls where they earn their cost', pt: 'sistema mais simples, modelo só onde compensa' },
  },
  {
    where: 'Multiledgers',
    problem: {
      en: 'Partial, delayed external data feeding records with legal weight',
      pt: 'Dados externos parciais e atrasados alimentando registros com peso legal',
    },
    chose: {
      en: 'Validate into structured records; distributed locks in PostgreSQL',
      pt: 'Validar em registros estruturados; locks distribuídos no PostgreSQL',
    },
    result: { en: 'consistent records across services', pt: 'registros consistentes entre serviços' },
  },
  {
    where: 'Metrópoles',
    problem: {
      en: 'Rebuild priorities for a 50M+ visitor portal',
      pt: 'Prioridades do rebuild de um portal com 50M+ visitantes',
    },
    chose: {
      en: 'Measure every change with A/B tests and analytics',
      pt: 'Medir cada mudança com testes A/B e analytics',
    },
    result: { en: 'active users 3×, to ~200k', pt: 'usuários ativos 3×, para ~200 mil' },
  },
  {
    where: 'CWI / GPA',
    problem: {
      en: 'Checkout under Black Friday load',
      pt: 'Checkout sob carga de Black Friday',
    },
    chose: {
      en: 'Rebuild checkout and payment flows, and measure business impact',
      pt: 'Reconstruir checkout e pagamento, medindo o impacto no negócio',
    },
    result: { en: '100k+ concurrent sessions, 99.9% availability', pt: '100k+ sessões simultâneas, 99,9% de disponibilidade' },
  },
];

export const earlierWork: Earlier[] = [
  {
    years: '2025',
    company: 'Multiledgers',
    role: { en: 'Senior Full-Stack', pt: 'Full-Stack Sênior' },
    text: {
      en: 'Reliable structured records from partial, delayed external data, for certification workflows where wrong data had legal consequences.',
      pt: 'Registros estruturados confiáveis a partir de dados externos parciais e atrasados, em fluxos de certificação onde dado errado tinha consequência legal.',
    },
  },
  {
    years: '2023–24',
    company: 'Metrópoles',
    role: { en: 'Lead Frontend', pt: 'Lead Frontend' },
    text: {
      en: 'Led the rebuild of one of Latin America’s largest news portals. Tripled active users.',
      pt: 'Liderei o rebuild de um dos maiores portais de notícias da América Latina. Triplicou os usuários ativos.',
    },
  },
  {
    years: '2021–22',
    company: 'CWI Software / GPA',
    role: { en: 'Full-Stack', pt: 'Full-Stack' },
    text: {
      en: 'Checkout and payments for 100k+ concurrent Black Friday sessions at 99.9% availability. Mobile conversion +20%.',
      pt: 'Checkout e pagamentos para 100k+ sessões simultâneas na Black Friday, com 99,9% de disponibilidade. Conversão mobile +20%.',
    },
  },
  {
    years: '2019–21',
    company: 'Coopersystem',
    role: { en: 'Full-Stack', pt: 'Full-Stack' },
    text: {
      en: 'Python/Django and Node.js systems for government clients, including a legacy application for IPEA.',
      pt: 'Sistemas em Python/Django e Node.js para clientes de governo, incluindo uma aplicação legada do IPEA.',
    },
  },
];

export const sideProjects: SideProject[] = [
  {
    title: 'StudySprint',
    text: {
      en: 'Turns a free-text goal into a structured study plan. Schema validation, retries on malformed JSON, web enrichment.',
      pt: 'Transforma um objetivo em texto livre num plano de estudos estruturado. Validação de schema, retry para JSON malformado, enriquecimento com dados da web.',
    },
    tags: 'LLM · structured outputs · AgentQL',
  },
  {
    title: 'Energy Efficiency Tracker',
    text: {
      en: 'Calculates a building’s energy efficiency across operating periods. Tested, containerized, deployed.',
      pt: 'Calcula a eficiência energética de um prédio entre períodos de operação. Com testes, Docker e deploy.',
    },
    tags: 'FastAPI · React · Docker',
  },
];
