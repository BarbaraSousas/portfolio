import { useLanguage } from '../../hooks/useLanguage';
import { notebook } from '../../data/notebook';

// Generic shape of an AI generation flow with validation and human review. Deliberately high level.
const PipelineDiagram = () => {
  const { language } = useLanguage();
  const d = notebook[language].caseStudy.diagram;

  const box = 'fill-cream dark:fill-dark-bg stroke-1';
  const ink = 'stroke-brown-dark dark:stroke-dark-text';
  const pen = 'stroke-brick dark:stroke-brick-light';
  const hold = 'stroke-hold dark:stroke-hold-light';
  const label = 'font-mono text-[12px] fill-brown-dark dark:fill-dark-text';
  const soft = 'font-mono text-[11px] fill-brown dark:fill-dark-text-secondary';
  const line = 'fill-none stroke-1 stroke-brown dark:stroke-dark-text-secondary';
  const back = 'fill-none stroke-1 stroke-brick dark:stroke-brick-light [stroke-dasharray:4_3]';

  return (
    <div className="overflow-x-auto border border-brown-light dark:border-dark-border bg-beige dark:bg-dark-surface mt-2 mb-7">
      <svg
        viewBox="0 0 760 200"
        className="block w-full h-auto min-w-[640px]"
        role="img"
        aria-label={`${d.catalog} → ${d.generate} → ${d.validate} → ${d.approve} / ${d.human}`}
      >
        <defs>
          <marker id="pipe-ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" className="fill-brown dark:fill-dark-text-secondary" />
          </marker>
          <marker id="pipe-ahp" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" className="fill-brick dark:fill-brick-light" />
          </marker>
        </defs>

        <rect className={`${box} ${ink}`} x="16" y="70" width="120" height="44" />
        <text className={label} x="76" y="96" textAnchor="middle">{d.catalog}</text>
        <rect className={`${box} ${pen}`} x="176" y="70" width="150" height="44" />
        <text className={label} x="251" y="96" textAnchor="middle">{d.generate}</text>
        <rect className={`${box} ${ink}`} x="366" y="70" width="150" height="44" />
        <text className={label} x="441" y="96" textAnchor="middle">{d.validate}</text>
        <rect className={`${box} ${ink}`} x="580" y="22" width="160" height="36" />
        <text className={label} x="660" y="45" textAnchor="middle">{d.approve}</text>
        <rect className={`${box} ${hold}`} x="580" y="126" width="160" height="36" />
        <text className={label} x="660" y="149" textAnchor="middle">{d.human}</text>

        <path className={line} d="M136 92 H174" markerEnd="url(#pipe-ah)" />
        <path className={line} d="M326 92 H364" markerEnd="url(#pipe-ah)" />
        <path className={line} d="M516 84 L578 42" markerEnd="url(#pipe-ah)" />
        <path className={line} d="M516 100 L578 142" markerEnd="url(#pipe-ah)" />
        <path className={back} d="M441 114 V170 H251 V116" markerEnd="url(#pipe-ahp)" />
        <text className={soft} x="346" y="188" textAnchor="middle">{d.retry}</text>
      </svg>
    </div>
  );
};

export default PipelineDiagram;
