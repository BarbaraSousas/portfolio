import { useParams, Link, Navigate } from 'react-router-dom';
import NotebookEntry, { MarginLabel, MarginNote } from '../components/notebook/NotebookEntry';
import { pageShell, rule, inkRule, muted, penText, monoLabel, textLink } from '../components/notebook/styles';
import { posts } from '../data/posts';
import { useLanguage } from '../hooks/useLanguage';
import MarkdownRenderer from '../components/MarkdownRenderer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const date = new Date(post.date).toLocaleDateString(language === 'en' ? 'en-GB' : 'pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={pageShell}>
      <NotebookEntry
        margin={
          <>
            <Link to="/blog" className={textLink}>
              ← {t.blog.backToBlog}
            </Link>
            <span className={`tabular-nums ${penText}`}>{date}</span>
            <span>
              {post.readingTime} {t.blog.minRead}
            </span>
            <span className="lowercase">{t.blog.categoryLabels[post.category]}</span>
          </>
        }
      >
        <h1 className="font-display text-[clamp(34px,5vw,56px)] leading-[1.07] tracking-[-0.025em] max-w-[20ch]">{post.title[language]}</h1>
        <p className={`text-lg ${muted} max-w-[58ch] mt-5`}>{post.description[language]}</p>
        {post.tags.length > 0 && <p className={`mt-4 font-mono text-xs ${muted}`}>{post.tags.map((tag) => `#${tag}`).join('  ')}</p>}
      </NotebookEntry>

      <NotebookEntry margin={<MarginNote>{language === 'pt' ? '↳ nota' : '↳ note'}</MarginNote>}>
        <article className={`border-t ${inkRule} pt-6 max-w-[68ch]`}>
          <MarkdownRenderer content={post.content[language]} />
        </article>
      </NotebookEntry>

      {(previousPost || nextPost) && (
        <NotebookEntry margin={<MarginLabel>{language === 'pt' ? 'mais notas' : 'more notes'}</MarginLabel>}>
          <nav className={`grid grid-cols-1 sm:grid-cols-2 border-t ${rule}`}>
            {previousPost ? (
              <Link to={`/blog/${previousPost.slug}`} className={`group py-4 sm:pr-6 border-b ${rule}`}>
                <span className={`${monoLabel} ${muted}`}>← {t.blog.previousPost}</span>
                <span className="block font-display text-xl leading-snug mt-1 group-hover:text-brick dark:group-hover:text-brick-light">
                  {previousPost.title[language]}
                </span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`} className={`group py-4 sm:pl-6 sm:text-right border-b ${rule}`}>
                <span className={`${monoLabel} ${muted}`}>{t.blog.nextPost} →</span>
                <span className="block font-display text-xl leading-snug mt-1 group-hover:text-brick dark:group-hover:text-brick-light">
                  {nextPost.title[language]}
                </span>
              </Link>
            )}
          </nav>
        </NotebookEntry>
      )}
    </div>
  );
};

export default BlogPost;
