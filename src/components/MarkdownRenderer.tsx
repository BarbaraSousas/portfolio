import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import { rule, muted, penText } from './notebook/styles';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="text-[17px] leading-[1.75]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => <h2 className="font-display text-[34px] leading-tight mt-12 mb-4">{children}</h2>,
          h2: ({ children }) => <h2 className="font-display text-[28px] leading-tight mt-10 mb-3">{children}</h2>,
          h3: ({ children }) => <h3 className="font-display text-[22px] leading-snug mt-8 mb-2">{children}</h3>,
          p: ({ children }) => <p className="mb-5">{children}</p>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          ul: ({ children }) => <ul className="mb-5 pl-6 list-['–'] marker:text-brick dark:marker:text-brick-light space-y-1.5">{children}</ul>,
          ol: ({ children }) => <ol className="mb-5 pl-6 list-decimal marker:text-brick dark:marker:text-brick-light marker:font-mono marker:text-sm space-y-1.5">{children}</ol>,
          li: ({ children }) => <li className="pl-1">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className={`my-7 border-l-2 border-brick dark:border-brick-light pl-5 font-display italic text-[21px] leading-snug ${muted}`}>
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isInline = !className;
            return isInline ? (
              <code className="px-1.5 py-0.5 bg-brick/10 dark:bg-brick-light/10 text-brick dark:text-brick-light font-mono text-[0.85em]">{children}</code>
            ) : (
              <code className={className}>{children}</code>
            );
          },
          pre: ({ children }) => <pre className="my-6 p-4 overflow-x-auto bg-[#1C2330] text-[14px] leading-relaxed font-mono">{children}</pre>,
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" className={`${penText} underline underline-offset-4`}>
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <figure className="my-7">
              <img src={src} alt={alt} className={`w-full border ${rule}`} />
              {alt && <figcaption className={`mt-2 font-mono text-xs ${muted}`}>{alt}</figcaption>}
            </figure>
          ),
          hr: () => <hr className={`my-10 border-t ${rule}`} />,
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-[15px]">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className={`text-left font-mono font-medium text-[11px] uppercase tracking-[0.08em] ${muted} pb-2 pr-4 border-b border-brown-dark dark:border-dark-text`}>
              {children}
            </th>
          ),
          td: ({ children }) => <td className={`py-2.5 pr-4 border-b ${rule} align-top`}>{children}</td>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
