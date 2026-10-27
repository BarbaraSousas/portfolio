import { Link } from 'react-router-dom';
import NotebookEntry, { MarginLabel, MarginNote } from '../components/notebook/NotebookEntry';
import PageHeader from '../components/notebook/PageHeader';
import { pageShell, rule, muted, penText, textLink } from '../components/notebook/styles';
import { experiences } from '../data/experiences';
import { useLanguage } from '../hooks/useLanguage';

const Experience = () => {
  const { t, language } = useLanguage();
  const present = t.experience.present;

  return (
    <div className={pageShell}>
      <PageHeader
        page="p. 02"
        label={t.nav.experience.toLowerCase()}
        note={language === 'pt' ? '↳ do mais recente\nao primeiro' : '↳ newest first'}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      {/* Index of entries */}
      <NotebookEntry margin={<MarginLabel>{language === 'pt' ? 'índice' : 'index'}</MarginLabel>}>
        <ol className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t ${rule}`}>
          {experiences.map((exp) => (
            <li key={exp.id} className={`border-b ${rule}`}>
              <a href={`#${exp.id}`} className="flex justify-between gap-4 py-2.5 group">
                <span className="font-display text-lg group-hover:text-brick dark:group-hover:text-brick-light">{exp.company}</span>
                <span className={`font-mono text-xs tabular-nums ${muted} pt-1.5`}>
                  {exp.period.replace('Present', present)}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </NotebookEntry>

      {experiences.map((exp, i) => (
        <NotebookEntry
          key={exp.id}
          id={exp.id}
          margin={
            <>
              <span className={`tabular-nums ${penText}`}>{exp.period.replace('Present', present)}</span>
              <span>{exp.location[language]}</span>
              {i === 0 && <MarginNote>{language === 'pt' ? '↳ atual' : '↳ current'}</MarginNote>}
            </>
          }
        >
          <div className={`border-t ${rule} pt-5`}>
            <h2 className="font-display text-[30px] leading-tight">
              {exp.company} <span className={`text-xl ${muted}`}>· {exp.role[language]}</span>
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 max-w-[64ch]">
              {exp.description[language].map((item) => (
                <li key={item} className="grid grid-cols-[18px_minmax(0,1fr)]">
                  <span className={penText}>–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-4 font-mono text-xs leading-relaxed ${muted}`}>{exp.technologies.join(' · ')}</p>
          </div>
        </NotebookEntry>
      ))}

      <NotebookEntry margin={<MarginLabel>{language === 'pt' ? 'próxima' : 'next'}</MarginLabel>}>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <Link to="/projects" className={textLink}>{t.nav.projects} →</Link>
          <Link to="/contact" className={textLink}>{t.nav.contact} →</Link>
        </div>
      </NotebookEntry>
    </div>
  );
};

export default Experience;
