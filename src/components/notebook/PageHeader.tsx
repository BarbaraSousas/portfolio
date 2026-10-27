import { ReactNode } from 'react';
import NotebookEntry, { MarginLabel, MarginNote } from './NotebookEntry';

interface PageHeaderProps {
  page: string;
  label: string;
  note?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
}

// Opening entry shared by the inner pages: page number and label in the margin, title on the right.
const PageHeader = ({ page, label, note, title, subtitle }: PageHeaderProps) => (
  <NotebookEntry
    margin={
      <>
        <MarginLabel>{page}</MarginLabel>
        <span>{label}</span>
        {note && <MarginNote>{note}</MarginNote>}
      </>
    }
  >
    <h1 className="font-display text-[clamp(36px,5.4vw,60px)] leading-[1.05] tracking-[-0.025em] max-w-[18ch]">{title}</h1>
    {subtitle && <p className="text-lg text-brown dark:text-dark-text-secondary max-w-[58ch] mt-5">{subtitle}</p>}
  </NotebookEntry>
);

export default PageHeader;
