import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Post } from '../data/posts';
import { useLanguage } from '../hooks/useLanguage';

interface BlogCardProps {
  post: Post;
  index: number;
}

const categoryColors: Record<string, string> = {
  tutorial: 'from-blue-500 to-cyan-500',
  article: 'from-purple-500 to-pink-500',
  reflection: 'from-orange-500 to-yellow-500',
  'case-study': 'from-green-500 to-emerald-500',
};

const BlogCard = ({ post, index }: BlogCardProps) => {
  const { language, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Link to={`/blog/${post.slug}`}>
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="group bg-gradient-to-br from-accent-neon/5 to-accent-blush/5 rounded-card border border-accent-neon/20 hover:border-accent-neon/50 hover:shadow-neon transition-all duration-300 overflow-hidden h-full flex flex-col"
        >
          {/* Cover Image */}
          {post.coverImage ? (
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title[language]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {post.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-accent-neon to-accent-blush text-white rounded-full text-xs font-bold">
                  {t.blog.featured}
                </div>
              )}
            </div>
          ) : (
            <div className="relative h-48 bg-gradient-to-br from-accent-neon/20 to-accent-blush/20 flex items-center justify-center">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${categoryColors[post.category]} opacity-20`}
              />
              {post.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-accent-neon to-accent-blush text-white rounded-full text-xs font-bold">
                  {t.blog.featured}
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Category Badge */}
            <div className="mb-3">
              <span
                className={`inline-block px-3 py-1 bg-gradient-to-r ${categoryColors[post.category]} text-white rounded-full text-xs font-semibold`}
              >
                {t.blog.categoryLabels[post.category]}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 group-hover:text-gradient transition-colors line-clamp-2">
              {post.title[language]}
            </h3>

            {/* Description */}
            <p className="text-text-secondary text-sm sm:text-base mb-4 line-clamp-3 flex-1">
              {post.description[language]}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm mb-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-accent-blush" />
                <span>
                  {new Date(post.date).toLocaleDateString(
                    language === 'en' ? 'en-US' : 'pt-BR',
                    {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    }
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-accent-blush" />
                <span>{post.readingTime} min</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-accent-neon/10 border border-accent-neon/30 text-accent-neon rounded text-xs"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-2 py-1 bg-accent-neon/10 border border-accent-neon/30 text-accent-neon rounded text-xs">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>

            {/* Read More Link */}
            <div className="flex items-center gap-2 text-accent-neon font-semibold group-hover:gap-3 transition-all">
              <span>{t.blog.readMore}</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
