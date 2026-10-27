import { useState, useMemo } from 'react';
import NotebookEntry, { MarginLabel } from '../components/notebook/NotebookEntry';
import PageHeader from '../components/notebook/PageHeader';
import { pageShell, inkRule, muted, penText } from '../components/notebook/styles';
import { posts, PostCategory } from '../data/posts';
import { useLanguage } from '../hooks/useLanguage';
import BlogCard from '../components/BlogCard';
import BlogFilters from '../components/BlogFilters';

const Blog = () => {
  const { language, t } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PostCategory | 'all'>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = useMemo(() => Array.from(new Set(posts.flatMap((post) => post.tags))).sort(), []);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTags([]);
  };

  const sortedPosts = useMemo(() => {
    const searchLower = searchQuery.toLowerCase();
    return posts
      .filter((post) => {
        const matchesSearch =
          !searchQuery ||
          post.title[language].toLowerCase().includes(searchLower) ||
          post.description[language].toLowerCase().includes(searchLower) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchLower));
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => post.tags.includes(tag));
        return matchesSearch && matchesCategory && matchesTags;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchQuery, selectedCategory, selectedTags, language]);

  return (
    <div className={pageShell}>
      <PageHeader
        page="p. 05"
        label={t.nav.blog.toLowerCase()}
        note={language === 'pt' ? '↳ decisões, trade-offs\ne aprendizados' : '↳ decisions, trade-offs\nand lessons'}
        title={t.blog.title}
        subtitle={t.blog.subtitle}
      />

      <NotebookEntry margin={<MarginLabel>{language === 'pt' ? 'buscar' : 'search'}</MarginLabel>}>
        <BlogFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          availableTags={availableTags}
          onClear={clearFilters}
        />
      </NotebookEntry>

      <NotebookEntry
        margin={
          <>
            <MarginLabel>{language === 'pt' ? 'índice' : 'index'}</MarginLabel>
            <span className="tabular-nums">
              {t.blog.showingPosts.replace('{{current}}', String(sortedPosts.length)).replace('{{total}}', String(posts.length))}
            </span>
          </>
        }
      >
        {sortedPosts.length > 0 ? (
          <ul className={`border-t ${inkRule}`}>
            {sortedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </ul>
        ) : (
          <div className={`border-t ${inkRule} pt-5`}>
            <p className={muted}>{t.blog.noPostsFound}</p>
            <button type="button" onClick={clearFilters} className={`mt-3 font-mono text-[13px] ${penText} hover:underline underline-offset-4`}>
              {t.blog.clearAllFilters}
            </button>
          </div>
        )}
      </NotebookEntry>
    </div>
  );
};

export default Blog;
