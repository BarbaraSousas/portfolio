import { useState, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { posts, PostCategory } from '../data/posts';
import { useLanguage } from '../hooks/useLanguage';
import BlogCard from '../components/BlogCard';
import BlogFilters from '../components/BlogFilters';

const Blog = () => {
  const { language, t } = useLanguage();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PostCategory | 'all'>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from posts
  const availableTags = useMemo(() => {
    const allTags = posts.flatMap((post) => post.tags);
    return Array.from(new Set(allTags)).sort();
  }, []);

  // Handle tag toggle
  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filter posts based on search, category, and tags
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        post.title[language].toLowerCase().includes(searchLower) ||
        post.description[language].toLowerCase().includes(searchLower) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchLower));

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory;

      // Tags filter
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => post.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [posts, searchQuery, selectedCategory, selectedTags, language]);

  // Sort posts by date (newest first)
  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filteredPosts]);

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-accent-neon/20 to-accent-blush/20 rounded-full">
              <BookOpen size={40} className="text-accent-neon" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6">
            {t.blog.title}
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-3xl mx-auto">
            {t.blog.subtitle}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <BlogFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            availableTags={availableTags}
          />
        </motion.div>

        {/* Posts Grid */}
        {sortedPosts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {sortedPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center py-16"
          >
            <p className="text-text-secondary text-lg mb-4">
              {t.blog.noPostsFound}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedTags([]);
              }}
              className="text-accent-neon hover:underline font-semibold"
            >
              {t.blog.clearAllFilters}
            </button>
          </motion.div>
        )}

        {/* Posts Count */}
        {sortedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center text-text-secondary"
          >
            {t.blog.showingPosts
              .replace('{{current}}', sortedPosts.length.toString())
              .replace('{{total}}', posts.length.toString())}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;
