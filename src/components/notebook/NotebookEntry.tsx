import { ReactNode } from 'react';

interface NotebookEntryProps {
  id?: string;
  margin: ReactNode;
  children: ReactNode;
}

// A notebook row: a narrow margin column for dates and red-pen notes, content on the right.
const NotebookEntry = ({ id, margin, children }: NotebookEntryProps) => (
  <section id={id} className="grid grid-cols-1 md:grid-cols-[150px_minmax(0,1fr)] gap-2.5 md:gap-8">
    <div className="flex flex-row flex-wrap md:flex-col gap-x-4 gap-y-1.5 md:gap-2.5 md:pt-1.5 font-mono text-xs leading-relaxed text-brown dark:text-dark-text-secondary whitespace-pre-line">
      {margin}
    </div>
    <div className="min-w-0">{children}</div>
  </section>
);

export const MarginLabel = ({ children }: { children: ReactNode }) => (
  <span className="uppercase tracking-[0.08em] text-brown-dark dark:text-dark-text">{children}</span>
);

export const MarginNote = ({ children }: { children: ReactNode }) => (
  <span className="text-brick dark:text-brick-light">{children}</span>
);

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="font-display text-[32px] leading-tight mb-2">{children}</h2>
);

export const SectionSub = ({ children }: { children: ReactNode }) => (
  <p className="text-brown dark:text-dark-text-secondary mb-6 max-w-[60ch]">{children}</p>
);

export default NotebookEntry;
