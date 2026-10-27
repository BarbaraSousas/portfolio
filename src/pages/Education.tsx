import NotebookEntry, { MarginLabel, MarginNote } from '../components/notebook/NotebookEntry';
import PageHeader from '../components/notebook/PageHeader';
import { pageShell, rule, muted, penText } from '../components/notebook/styles';
import { education } from '../data/education';
import { useLanguage } from '../hooks/useLanguage';

const learning = {
  en: {
    title: 'Continuous learning',
    sub: 'What I am studying outside of work right now.',
    topics: [
      'LLM engineering and evaluation',
      'Designing data-intensive applications',
      'System design',
      'Algorithms and data structures',
      'Cloud architecture',
    ],
  },
  pt: {
    title: 'Aprendizado contínuo',
    sub: 'O que estou estudando fora do trabalho agora.',
    topics: [
      'Engenharia e avaliação de LLMs',
      'Aplicações com uso intensivo de dados',
      'System design',
      'Algoritmos e estruturas de dados',
      'Arquitetura em nuvem',
    ],
  },
};

const Education = () => {
  const { t, language } = useLanguage();
  const l = learning[language];

  return (
    <div className={pageShell}>
      <PageHeader page="p. 03" label={t.nav.education.toLowerCase()} title={t.education.title} subtitle={t.education.subtitle} />

      {education.map((edu) => (
        <NotebookEntry
          key={edu.id}
          margin={
            <>
              <span className={`tabular-nums ${penText}`}>{edu.year}</span>
              <span>{edu.degree[language]}</span>
            </>
          }
        >
          <div className={`border-t ${rule} pt-5`}>
            <h2 className="font-display text-[30px] leading-tight">{edu.field[language]}</h2>
            <p className={`font-mono text-[13px] mt-1 ${muted}`}>{edu.institution}</p>
            <p className="mt-4 max-w-[64ch]">{edu.description[language]}</p>
          </div>
        </NotebookEntry>
      ))}

      <NotebookEntry
        margin={
          <>
            <MarginLabel>{language === 'pt' ? 'estudando' : 'studying'}</MarginLabel>
            <MarginNote>{language === 'pt' ? '↳ todo dia, um bloco' : '↳ one block a day'}</MarginNote>
          </>
        }
      >
        <h2 className="font-display text-[30px] leading-tight">{l.title}</h2>
        <p className={`${muted} mt-1 mb-5`}>{l.sub}</p>
        <ul className={`border-t ${rule}`}>
          {l.topics.map((topic) => (
            <li key={topic} className={`grid grid-cols-[24px_minmax(0,1fr)] py-2.5 border-b ${rule}`}>
              <span className={`pt-0.5 ${penText}`}>–</span>
              <span className="font-display text-lg">{topic}</span>
            </li>
          ))}
        </ul>
      </NotebookEntry>
    </div>
  );
};

export default Education;
