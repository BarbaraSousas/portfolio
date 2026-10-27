import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { notebook, routedDecisions, Lane } from '../../data/notebook';

const lanes: Lane[] = ['code', 'model', 'human'];

const laneDot: Record<Lane, string> = {
  code: 'bg-brown-dark dark:bg-dark-text',
  model: 'bg-brick dark:bg-brick-light',
  human: 'bg-hold dark:bg-hold-light',
};

const Dot = ({ lane }: { lane: Lane }) => (
  <i className={`inline-block w-[9px] h-[9px] rounded-full flex-none ${laneDot[lane]}`} />
);

// Signature element: filter real decisions by where they were routed.
const DecisionRouter = () => {
  const { language } = useLanguage();
  const copy = notebook[language].router;
  const [active, setActive] = useState<Lane | null>(null);

  return (
    <div className="border border-brown-light dark:border-dark-border bg-beige dark:bg-dark-surface">
      <div
        role="group"
        aria-label={copy.label}
        className="grid grid-cols-1 sm:grid-cols-3 border-b border-brown-light dark:border-dark-border"
      >
        {lanes.map((lane) => (
          <button
            key={lane}
            type="button"
            aria-pressed={active === lane}
            onClick={() => setActive(active === lane ? null : lane)}
            className={`flex flex-col gap-1 text-left px-4 py-3.5 border-b sm:border-b-0 sm:border-r last:border-0 border-brown-light dark:border-dark-border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brick ${
              active === lane ? 'bg-brick/10 dark:bg-brick-light/10' : 'hover:bg-brick/5'
            }`}
          >
            <span className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.08em]">
              <Dot lane={lane} />
              {copy.lanes[lane].name}
            </span>
            <span className="text-[13px] leading-snug text-brown dark:text-dark-text-secondary">
              {copy.lanes[lane].desc}
            </span>
          </button>
        ))}
      </div>
      <ul>
        {routedDecisions.map((d) => (
          <li
            key={d.title.en}
            className={`grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_110px] gap-1.5 sm:gap-4 items-baseline px-4 py-3.5 border-b last:border-0 border-brown-light dark:border-dark-border transition-opacity duration-200 ${
              active && active !== d.lane ? 'opacity-30' : ''
            }`}
          >
            <span className="font-display text-[19px] leading-snug">
              {d.title[language]}
              <span className="block font-sans text-sm text-brown dark:text-dark-text-secondary mt-1">
                {d.why[language]}
              </span>
            </span>
            <span className="flex items-center gap-2 sm:justify-end font-mono text-xs uppercase tracking-[0.06em]">
              <Dot lane={d.lane} />
              {copy.short[d.lane]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DecisionRouter;
