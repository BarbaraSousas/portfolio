import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { posts } from '../data/posts';
import { useLanguage } from '../hooks/useLanguage';
import MarkdownRenderer from '../components/MarkdownRenderer';

const categoryColors: Record<string, string> = {
  tutorial: 'from-blue-500 to-cyan-500',
  article: 'from-purple-500 to-pink-500',
  reflection: 'from-orange-500 to-yellow-500',
  'case-study': 'from-green-500 to-emerald-500',
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  // Find the post by slug
  const post = posts.find((p) => p.slug === slug);

  // If post not found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Find previous and next posts
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent-neon hover:text-accent-blush transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            {t.blog.backToBlog}
          </Link>
        </motion.div>

        {/* Post Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          {/* Category Badge */}
          <div className="mb-4">
            <span
              className={`inline-block px-4 py-2 bg-gradient-to-r ${
                categoryColors[post.category]
              } text-white rounded-full text-sm font-semibold`}
            >
              {t.blog.categoryLabels[post.category]}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6">
            {post.title[language]}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-text-secondary mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-accent-blush" />
              <span>
                {new Date(post.date).toLocaleDateString(
                  language === 'en' ? 'en-US' : 'pt-BR',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-accent-blush" />
              <span>
                {post.readingTime} {t.blog.minRead}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <Tag size={18} className="text-accent-neon" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent-neon/10 border border-accent-neon/30 text-accent-neon rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-accent-neon/30 to-transparent" />
        </motion.header>

        {/* Post Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <MarkdownRenderer content={post.content[language]} />
        </motion.article>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent-neon/30 to-transparent mb-12" />

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Previous Post */}
          {previousPost ? (
            <Link
              to={`/blog/${previousPost.slug}`}
              className="group p-6 bg-gradient-to-br from-accent-neon/5 to-accent-blush/5 border border-accent-neon/20 hover:border-accent-neon/50 hover:shadow-neon rounded-card transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-accent-neon text-sm font-semibold mb-2">
                <ArrowLeft size={16} />
                {t.blog.previousPost}
              </div>
              <h3 className="text-text-primary font-bold group-hover:text-gradient transition-colors line-clamp-2">
                {previousPost.title[language]}
              </h3>
            </Link>
          ) : (
            <div />
          )}

          {/* Next Post */}
          {nextPost && (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group p-6 bg-gradient-to-br from-accent-neon/5 to-accent-blush/5 border border-accent-neon/20 hover:border-accent-neon/50 hover:shadow-neon rounded-card transition-all duration-300 text-right"
            >
              <div className="flex items-center justify-end gap-2 text-accent-neon text-sm font-semibold mb-2">
                {t.blog.nextPost}
                <ArrowLeft size={16} className="rotate-180" />
              </div>
              <h3 className="text-text-primary font-bold group-hover:text-gradient transition-colors line-clamp-2">
                {nextPost.title[language]}
              </h3>
            </Link>
          )}
        </motion.nav>
      </div>
    </div>
  );
};

export default BlogPost;
