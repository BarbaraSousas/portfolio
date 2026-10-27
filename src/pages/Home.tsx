import { useState } from 'react';
import { Link } from 'react-router-dom';
import NotebookEntry, { MarginLabel, MarginNote, SectionTitle, SectionSub } from '../components/notebook/NotebookEntry';
import DecisionRouter from '../components/notebook/DecisionRouter';
import PipelineDiagram from '../components/notebook/PipelineDiagram';
import { rule, muted, penText } from '../components/notebook/styles';
import { useLanguage } from '../hooks/useLanguage';
import { contactInfo } from '../data/contact';
import {
  notebook,
  heroStack,
  recentLog,
  logUpdated,
  clozStack,
  clozOwnership,
  decisionRecords,
  earlierWork,
  sideProjects,
} from '../data/notebook';


const Home = () => {
  const { language } = useLanguage();
  const c = notebook[language];
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard
      .writeText(contactInfo.email)
      .then(() => setCopied(true))
      .catch(() => setCopied(false));
  };

  return (
    <div className="max-w-[1040px] mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20 flex flex-col gap-16 md:gap-[88px]">
      {/* Hero */}
      <NotebookEntry
        margin={
          <>
            <MarginLabel>{c.margin.page}</MarginLabel>
            <span>{c.margin.location}</span>
            <MarginNote>{c.margin.current}</MarginNote>
          </>
        }
      >
        <h1 className="font-display text-[clamp(36px,6.2vw,68px)] leading-[1.04] tracking-[-0.025em] max-w-[15ch]">
          {c.hero.before}
          <em className="italic">{c.hero.emphasis}</em>
          {c.hero.after}
        </h1>
        <p className={`text-lg ${muted} max-w-[58ch] mt-6`}>{c.hero.lede}</p>
        <div className={`flex flex-wrap gap-x-5 gap-y-2 mt-6 font-mono text-[13px] ${muted}`}>
          {heroStack.map((s) => (
            <span key={s}>
              <span className={penText}>· </span>
              {s}
            </span>
          ))}
        </div>
      </NotebookEntry>

      {/* Model, code or a person */}
      <NotebookEntry
        id="decisions"
        margin={
          <>
            <MarginLabel>{c.router.label}</MarginLabel>
            <MarginNote>{c.router.hint}</MarginNote>
          </>
        }
      >
        <SectionTitle>
          {c.router.title} <em className={`italic ${penText}`}>{c.router.titleEm}</em>?
        </SectionTitle>
        <SectionSub>{c.router.sub}</SectionSub>
        <DecisionRouter />
      </NotebookEntry>

      {/* Now */}
      <NotebookEntry
        id="now"
        margin={
          <>
            <MarginLabel>{c.now.label}</MarginLabel>
            <span>
              {c.now.updated} {logUpdated}
            </span>
            <MarginNote>{c.now.note}</MarginNote>
          </>
        }
      >
        <SectionTitle>{c.now.title}</SectionTitle>
        <ul className={`border-t ${rule}`}>
          {recentLog.map((entry) => (
            <li
              key={entry.date + entry.project.en}
              className={`grid grid-cols-[56px_minmax(0,1fr)] sm:grid-cols-[64px_70px_minmax(0,1fr)] gap-4 py-3 border-b ${rule} items-baseline`}
            >
              <time className={`font-mono text-[13px] tabular-nums ${penText}`}>{entry.date}</time>
              <span className={`hidden sm:block font-mono text-xs uppercase tracking-[0.06em] ${muted}`}>
                {entry.project[language]}
              </span>
              <span>{entry.text[language]}</span>
            </li>
          ))}
        </ul>
      </NotebookEntry>

      {/* CloZ case study */}
      <NotebookEntry
        id="cloz"
        margin={
          <>
            <MarginLabel>{c.caseStudy.label}</MarginLabel>
            <span>{c.caseStudy.period}</span>
            <span>{c.caseStudy.role}</span>
            <MarginNote>{c.caseStudy.note}</MarginNote>
          </>
        }
      >
        <div className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-2">
          <SectionTitle>{c.caseStudy.title}</SectionTitle>
          <span className={`font-mono text-xs ${muted}`}>{clozStack}</span>
        </div>
        <SectionSub>{c.caseStudy.sub}</SectionSub>

        <PipelineDiagram />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 border-t border-brown-dark dark:border-dark-text">
          {clozOwnership.map((o) => (
            <div key={o.title.en} className="flex flex-col gap-1.5 pt-3.5 pr-4">
              <b className="font-display font-normal text-[22px] leading-tight">{o.title[language]}</b>
              <span className={`text-[13px] leading-snug ${muted}`}>{o.label[language]}</span>
            </div>
          ))}
        </div>

        <div className="max-w-[62ch] flex flex-col gap-3.5 mt-8">
          {c.caseStudy.prose.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </NotebookEntry>

      {/* Decision records */}
      <NotebookEntry
        id="log"
        margin={
          <>
            <MarginLabel>{c.records.label}</MarginLabel>
            <MarginNote>{c.records.note}</MarginNote>
          </>
        }
      >
        <SectionTitle>{c.records.title}</SectionTitle>
        <SectionSub>{c.records.sub}</SectionSub>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                {c.records.cols.map((col) => (
                  <th
                    key={col}
                    className={`text-left font-mono font-medium text-[11px] uppercase tracking-[0.08em] ${muted} pb-2.5 pr-3.5 border-b border-brown-dark dark:border-dark-text`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {decisionRecords.map((r) => (
                <tr key={r.problem.en} className="align-top">
                  <td className={`py-3.5 pr-3.5 border-b ${rule} font-mono text-xs ${muted} whitespace-nowrap`}>{r.where}</td>
                  <td className={`py-3.5 pr-3.5 border-b ${rule} leading-normal`}>{r.problem[language]}</td>
                  <td className={`py-3.5 pr-3.5 border-b ${rule} leading-normal`}>{r.chose[language]}</td>
                  <td className={`py-3.5 pr-3.5 border-b ${rule} leading-normal tabular-nums ${penText}`}>{r.result[language]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </NotebookEntry>

      {/* Earlier work */}
      <NotebookEntry
        id="earlier"
        margin={
          <>
            <MarginLabel>{c.earlier.label}</MarginLabel>
            <span>{c.earlier.years}</span>
          </>
        }
      >
        <SectionTitle>{c.earlier.title}</SectionTitle>
        <ul className={`border-t ${rule}`}>
          {earlierWork.map((job) => (
            <li key={job.company} className={`grid grid-cols-1 sm:grid-cols-[120px_minmax(0,1fr)] gap-0.5 sm:gap-5 py-4 border-b ${rule}`}>
              <span className={`font-mono text-[13px] tabular-nums ${muted}`}>{job.years}</span>
              <div>
                <div className="font-display text-xl leading-tight">
                  {job.company} <span className={`text-base ${muted}`}>· {job.role[language]}</span>
                </div>
                <p className={`mt-1 text-[15px] ${muted} max-w-[64ch]`}>{job.text[language]}</p>
              </div>
            </li>
          ))}
        </ul>
        <Link to="/experience" className={`inline-block mt-4 font-mono text-[13px] ${penText} hover:underline underline-offset-4`}>
          {c.earlier.all}
        </Link>
      </NotebookEntry>

      {/* Side projects */}
      <NotebookEntry
        margin={
          <>
            <MarginLabel>{c.also.label}</MarginLabel>
            <MarginNote>{c.also.note}</MarginNote>
          </>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sideProjects.map((p) => (
            <div key={p.title} className="border-t border-brown-dark dark:border-dark-text pt-3">
              <h3 className="font-display text-xl leading-tight mb-1">{p.title}</h3>
              <p className={`text-[15px] ${muted}`}>{p.text[language]}</p>
              <span className={`block mt-2.5 font-mono text-xs ${muted}`}>{p.tags}</span>
            </div>
          ))}
        </div>
        <Link to="/projects" className={`inline-block mt-4 font-mono text-[13px] ${penText} hover:underline underline-offset-4`}>
          {c.also.all}
        </Link>
      </NotebookEntry>

      {/* Contact */}
      <NotebookEntry id="contact" margin={<MarginLabel>{c.contact.label}</MarginLabel>}>
        <h2 className="font-display text-[clamp(30px,4.6vw,46px)] leading-tight">
          {c.contact.title} <em className={`italic ${penText}`}>{c.contact.titleEm}</em>?
        </h2>
        <p className={`${muted} mt-2`}>{c.contact.sub}</p>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2.5 mt-5 font-mono text-sm">
          <span>{contactInfo.email}</span>
          <button
            type="button"
            onClick={copyEmail}
            className={`text-xs border ${rule} bg-beige dark:bg-dark-surface px-2.5 py-1.5 hover:border-brick`}
          >
            {copied ? c.contact.copied : c.contact.copy}
          </button>
          <a href={contactInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="underline decoration-brick underline-offset-4">
            LinkedIn
          </a>
          <a href={contactInfo.socials.github} target="_blank" rel="noopener noreferrer" className="underline decoration-brick underline-offset-4">
            GitHub
          </a>
        </div>
      </NotebookEntry>
    </div>
  );
};

export default Home;
