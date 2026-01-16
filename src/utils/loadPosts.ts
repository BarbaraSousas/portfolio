import matter from 'gray-matter';
import { Post } from '../data/posts';

// Use Vite's import.meta.glob to import all markdown files (excluding README)
const postFiles = import.meta.glob('../data/blog-posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

/**
 * Extracts content for a specific language from markdown
 * Content is separated by <!-- EN --> and <!-- PT --> comments
 */
function extractLanguageContent(content: string, lang: 'en' | 'pt'): string {
  const enMatch = content.match(/<!--\s*EN\s*-->([\s\S]*?)<!--\s*PT\s*-->/);
  const ptMatch = content.match(/<!--\s*PT\s*-->([\s\S]*?)$/);

  if (lang === 'en' && enMatch) {
    return enMatch[1].trim();
  }

  if (lang === 'pt' && ptMatch) {
    return ptMatch[1].trim();
  }

  // Fallback: return all content if markers not found
  return content;
}

/**
 * Load and parse all blog posts from markdown files
 */
export function loadPosts(): Post[] {
  const posts: Post[] = [];

  for (const path in postFiles) {
    // Skip README.md
    if (path.includes('README.md')) {
      continue;
    }

    try {
      const fileContent = postFiles[path] as string;

      // Parse frontmatter and content
      const { data: frontmatter, content } = matter(fileContent);

      // Skip if no frontmatter
      if (!frontmatter || !frontmatter.id || !frontmatter.slug) {
        console.warn(`Skipping post at ${path}: missing required frontmatter`);
        continue;
      }

      // Extract language-specific content
      const enContent = extractLanguageContent(content, 'en');
      const ptContent = extractLanguageContent(content, 'pt');

      // Create post object
      const post: Post = {
        id: frontmatter.id,
        slug: frontmatter.slug,
        title: {
          en: frontmatter.title?.en || 'Untitled',
          pt: frontmatter.title?.pt || 'Sem título',
        },
        description: {
          en: frontmatter.description?.en || '',
          pt: frontmatter.description?.pt || '',
        },
        content: {
          en: enContent,
          pt: ptContent,
        },
        category: frontmatter.category || 'article',
        tags: frontmatter.tags || [],
        coverImage: frontmatter.coverImage,
        date: frontmatter.date,
        readingTime: frontmatter.readingTime || 5,
        featured: frontmatter.featured || false,
      };

      posts.push(post);
    } catch (error) {
      console.error(`Error loading post from ${path}:`, error);
    }
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
