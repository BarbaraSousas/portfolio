import { Link } from 'react-router-dom';
import { Post } from '../data/posts';
import { useLanguage } from '../hooks/useLanguage';
import { rule, muted, penText } from './notebook/styles';

interface BlogCardProps {
  post: Post;
}

// One row of the notes index: date, title with summary, category and reading time.
const BlogCard = ({ post }: BlogCardProps) => {
  const { language, t } = useLanguage();
  const date = new Date(post.date).toLocaleDateString(language === 'en' ? 'en-GB' : 'pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <li className={`border-b ${rule}`}>
      <Link
        to={`/blog/${post.slug}`}
        className="group grid grid-cols-1 sm:grid-cols-[96px_minmax(0,1fr)_150px] gap-x-6 gap-y-1 py-5 items-baseline"
      >
        <time dateTime={post.date} className={`font-mono text-[13px] tabular-nums ${penText}`}>
          {date}
        </time>
        <div className="min-w-0">
          <h2 className="font-display text-2xl leading-snug group-hover:text-brick dark:group-hover:text-brick-light transition-colors">
            {post.title[language]}
            {post.featured && <span className={`ml-2 align-middle font-mono text-[11px] ${penText}`}>★</span>}
          </h2>
          <p className={`mt-1.5 ${muted} max-w-[62ch]`}>{post.description[language]}</p>
          {post.tags.length > 0 && <p className={`mt-2 font-mono text-xs ${muted}`}>{post.tags.map((tag) => `#${tag}`).join('  ')}</p>}
        </div>
        <div className={`font-mono text-xs ${muted} sm:text-right flex sm:flex-col gap-x-3 gap-y-1`}>
          <span className="lowercase">{t.blog.categoryLabels[post.category]}</span>
          <span>
            {post.readingTime} {t.blog.minRead}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default BlogCard;
