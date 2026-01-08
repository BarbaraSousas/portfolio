# Barbara Araújo - Portfolio

A modern, responsive portfolio website showcasing software development projects and professional experience. Built with React, TypeScript, and Tailwind CSS with smooth animations and bilingual support.

## ✨ Features

- 🎨 Modern design with pink neon aesthetic and Framer Motion animations
- 🌐 Bilingual support (English/Portuguese)
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite build tool
- 🎭 Smooth page transitions and scroll-triggered animations
- 📧 Contact form integration with Formspree
- 🖼️ Image carousel for project screenshots
- 🚀 Automated GitHub Pages deployment

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

The portfolio uses GitHub Actions for automatic deployment to GitHub Pages.

### Configuration

1. Update the base path in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/portfolio/',
})
```

2. Update the basename in `src/App.tsx`:

```typescript
<Router basename="/portfolio">
```

### GitHub Pages Setup

1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as the source
4. The site will automatically deploy on push to main branch

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images, icons
│   ├── components/             # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── TechStack.tsx
│   │   └── Highlights.tsx
│   ├── data/                   # Data files
│   │   ├── contact.ts
│   │   ├── education.ts
│   │   ├── experiences.ts
│   │   ├── projects.ts
│   │   └── translations.ts
│   ├── hooks/                  # Custom hooks
│   │   └── useLanguage.tsx
│   ├── pages/                  # Page components
│   │   ├── Home.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License

## 💖 Credits

Built by Barbara Araújo

- Icons: [Lucide](https://lucide.dev/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
