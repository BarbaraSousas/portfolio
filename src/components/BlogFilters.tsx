import { Search, X } from 'lucide-react';
import { PostCategory } from '../data/posts';
import { useLanguage } from '../hooks/useLanguage';

interface BlogFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: PostCategory | 'all';
  onCategoryChange: (category: PostCategory | 'all') => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  availableTags: string[];
}

const BlogFilters = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTags,
  onTagToggle,
  availableTags,
}: BlogFiltersProps) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search
          size={20}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.blog.searchPlaceholder}
          className="w-full pl-12 pr-4 py-3 bg-accent-neon/5 border border-accent-neon/20 rounded-card text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-neon/50 focus:ring-2 focus:ring-accent-neon/20 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-accent-neon transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Category Filters */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
          {t.blog.categories}
        </h3>
        <div className="flex flex-wrap gap-2">
          {(['all', 'tutorial', 'article', 'reflection', 'case-study'] as const).map(
            (category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-card font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent-neon text-white shadow-neon'
                    : 'bg-accent-neon/10 border border-accent-neon/30 text-text-secondary hover:text-accent-neon hover:border-accent-neon/50'
                }`}
              >
                {t.blog.categoryLabels[category]}
              </button>
            )
          )}
        </div>
      </div>

      {/* Tag Filters */}
      {availableTags.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wider">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? 'bg-accent-blush text-white shadow-lg'
                    : 'bg-accent-blush/10 border border-accent-blush/30 text-text-secondary hover:text-accent-blush hover:border-accent-blush/50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active Filters Summary */}
      {(selectedCategory !== 'all' || selectedTags.length > 0 || searchQuery) && (
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <span className="font-medium">
            {t.blog.activeFilters}
          </span>
          {selectedCategory !== 'all' && (
            <span className="px-2 py-1 bg-accent-neon/20 text-accent-neon rounded">
              {t.blog.categoryLabels[selectedCategory]}
            </span>
          )}
          {selectedTags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-accent-blush/20 text-accent-blush rounded">
              {tag}
            </span>
          ))}
          {searchQuery && (
            <span className="px-2 py-1 bg-accent-neon/20 text-accent-neon rounded">
              "{searchQuery}"
            </span>
          )}
          <button
            onClick={() => {
              onSearchChange('');
              onCategoryChange('all');
              selectedTags.forEach((tag) => onTagToggle(tag));
            }}
            className="ml-2 text-accent-neon hover:underline"
          >
            {t.blog.clearAll}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogFilters;
