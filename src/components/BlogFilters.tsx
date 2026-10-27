import { Search, X } from 'lucide-react';
import { PostCategory } from '../data/posts';
import { useLanguage } from '../hooks/useLanguage';
import { rule, muted, penText, monoLabel } from './notebook/styles';

interface BlogFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: PostCategory | 'all';
  onCategoryChange: (category: PostCategory | 'all') => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  availableTags: string[];
  onClear: () => void;
}

const categories = ['all', 'tutorial', 'article', 'reflection', 'case-study'] as const;

const BlogFilters = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTags,
  onTagToggle,
  availableTags,
  onClear,
}: BlogFiltersProps) => {
  const { t } = useLanguage();
  const hasFilters = selectedCategory !== 'all' || selectedTags.length > 0 || searchQuery;

  return (
    <div className="flex flex-col gap-5">
      <label className={`flex items-center gap-3 border-b ${rule} focus-within:border-brick dark:focus-within:border-brick-light`}>
        <Search size={18} className={muted} aria-hidden="true" />
        <input
          type="search"
          id="blog-search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.blog.searchPlaceholder}
          className="flex-1 bg-transparent py-2.5 font-mono text-sm placeholder:text-brown/60 dark:placeholder:text-dark-text-secondary/60 focus:outline-none"
        />
        {searchQuery && (
          <button type="button" onClick={() => onSearchChange('')} className={`${muted} hover:text-brick`} aria-label={t.blog.clearAll}>
            <X size={18} />
          </button>
        )}
      </label>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
        <span className={`${monoLabel} ${muted} sm:w-24 pt-0.5`}>{t.blog.categories}</span>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={selectedCategory === category}
              onClick={() => onCategoryChange(category)}
              className={`font-mono text-[13px] lowercase border-b-2 ${
                selectedCategory === category ? `border-brick dark:border-brick-light` : `border-transparent ${muted} hover:text-brown-dark dark:hover:text-dark-text`
              }`}
            >
              {t.blog.categoryLabels[category]}
            </button>
          ))}
        </div>
      </div>

      {availableTags.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <span className={`${monoLabel} ${muted} sm:w-24 pt-0.5`}>{t.blog.tags}</span>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                type="button"
                aria-pressed={selectedTags.includes(tag)}
                onClick={() => onTagToggle(tag)}
                className={`font-mono text-[13px] ${
                  selectedTags.includes(tag) ? `${penText} underline underline-offset-4` : `${muted} hover:text-brown-dark dark:hover:text-dark-text`
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {hasFilters && (
        <button type="button" onClick={onClear} className={`self-start font-mono text-xs ${penText} hover:underline underline-offset-4`}>
          {t.blog.clearAll}
        </button>
      )}
    </div>
  );
};

export default BlogFilters;
