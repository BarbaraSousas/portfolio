# Blog Posts Directory

This directory contains all blog posts as Markdown files with YAML frontmatter.

## How to Add a New Post

1. Create a new `.md` file in this directory with a descriptive slug name (e.g., `my-awesome-post.md`)

2. Add frontmatter at the top of the file with the following structure:

```yaml
---
id: 'unique-id'  # Use a number or unique string
slug: 'url-friendly-slug'
title:
  en: 'English Title'
  pt: 'Título em Português'
description:
  en: 'English description for preview'
  pt: 'Descrição em português para preview'
category: 'tutorial'  # Options: tutorial | article | reflection | case-study
tags: ['Tag1', 'Tag2', 'Tag3']
date: '2026-01-14'  # ISO format: YYYY-MM-DD
readingTime: 5  # Estimated reading time in minutes
featured: true  # Optional: true to highlight this post
coverImage: '/path/to/image.jpg'  # Optional: cover image URL
---
```

3. Add content in both languages using language markers:

```markdown
<!-- EN -->
# Your English Content Here

Your English post content in markdown...

<!-- PT -->
# Seu Conteúdo em Português Aqui

Seu conteúdo do post em português em markdown...
```

## File Structure Example

```
getting-started-react-hooks.md
├── Frontmatter (YAML)
├── <!-- EN --> marker
├── English content (Markdown)
├── <!-- PT --> marker
└── Portuguese content (Markdown)
```

## Tips

- Use descriptive slug names (they become the URL)
- Keep reading time realistic (aim for 1-15 minutes)
- Add 2-5 relevant tags
- Write engaging descriptions (shown in preview cards)
- Use proper markdown formatting for code blocks, lists, etc.
- Test your post by visiting `/blog/your-slug` after creating it

## Categories

- **tutorial**: Step-by-step guides and how-tos
- **article**: Technical articles and in-depth analysis
- **reflection**: Personal thoughts and career insights
- **case-study**: Project deep-dives and case studies

## Automatic Features

Posts are automatically:
- Sorted by date (newest first)
- Parsed and loaded on build
- Filtered by category and tags
- Searchable by title, description, and tags
- Rendered with syntax highlighting for code blocks
