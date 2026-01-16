import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-text-primary mb-6 mt-8">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-text-primary mb-4 mt-8">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-text-primary mb-3 mt-6">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-text-secondary">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-text-secondary">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-text-secondary">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent-neon pl-4 py-2 my-6 bg-accent-neon/5 italic text-text-secondary">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isInline = !className;
            return isInline ? (
              <code className="px-2 py-1 bg-accent-neon/20 text-accent-neon rounded text-sm font-mono">
                {children}
              </code>
            ) : (
              <code className={className}>{children}</code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-bg-secondary rounded-card p-4 overflow-x-auto mb-6 border border-accent-neon/20">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-neon hover:text-accent-blush underline transition-colors"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="rounded-card w-full my-6 border border-accent-neon/20"
            />
          ),
          hr: () => (
            <hr className="my-8 border-t border-accent-neon/20" />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-accent-neon/20">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-accent-neon/20 bg-accent-neon/10 px-4 py-2 text-left text-text-primary font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-accent-neon/20 px-4 py-2 text-text-secondary">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
