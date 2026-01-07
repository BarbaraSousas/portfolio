# Barbara Araújo - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, bilingual support (English/Portuguese), and a beautiful pink neon design aesthetic.

![Portfolio Preview](https://via.placeholder.com/1200x630/0F0F14/FF4F9A?text=Barbara+Ara%C3%BAjo+Portfolio)

## ✨ Features

- 🎨 **Modern Design**: Pink neon aesthetic with smooth animations using Framer Motion
- 🌐 **Bilingual**: Full support for English and Portuguese with easy language switching
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast builds and optimal performance
- 🎭 **Smooth Animations**: Beautiful page transitions and scroll-triggered animations
- 📧 **Contact Form**: Integrated with Formspree for easy contact management
- 🚀 **Easy Deployment**: Automated GitHub Pages deployment via GitHub Actions

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: React Icons + Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Steps

1. **Clone the repository** (or you're already in it!)

```bash
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:3000` to see your portfolio!

## 🎨 Customization Guide

### 1. Add Your Profile Photo

Replace the placeholder in the Hero section:

1. Add your photo to `/src/assets/profile-photo.jpg`
2. The photo should be square (recommended: 500x500px minimum)
3. Uncomment the image code in `/src/components/Hero.tsx` (lines 152-157)

### 2. Update Your Projects

Edit `/src/data/projects.ts`:

1. **Remove the example projects** (or keep them as reference)
2. **Add your real projects** from GitHub:
   - Visit https://github.com/BarbaraSousas
   - Choose your 5-10 best projects
   - For each project, fill in:
     - `title`: Project name
     - `description`: Short description (1-2 lines) in both EN and PT
     - `technologies`: Array of technologies used
     - `type`: 'web', 'mobile', or 'fullstack'
     - `githubUrl`: Repository link
     - `demoUrl`: Live demo link (if available)
     - `featured`: Set to `true` for your best 3-4 projects

3. **Add project screenshots**:
   - Create folder: `/src/assets/projects/`
   - Add screenshots: `project-name-1.png`, `project-name-2.png`, etc.
   - Update `images` array in your project data

### 3. Update Contact Information

Edit `/src/data/contact.ts`:

1. **Verify email and location** are correct
2. **Update social links** (LinkedIn, GitHub)
3. **Add phone/WhatsApp** if you want
4. **Setup contact form**:
   - Sign up at [Formspree](https://formspree.io) (free tier available)
   - Create a new form
   - Copy your form endpoint
   - Replace `FORMSPREE_ENDPOINT` value with your endpoint

### 4. Fine-tune Experience Data

The experience data in `/src/data/experiences.ts` is pre-filled from your CV, but you can:

- Edit descriptions for clarity
- Add/remove specific achievements
- Update technologies used
- Adjust company colors

### 5. Customize Colors (Optional)

Edit `/tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'bg-primary': '#0F0F14',      // Dark background
  'accent-neon': '#FF4F9A',      // Main pink
  'accent-blush': '#FFD1E6',     // Light pink
  'text-secondary': '#B4B4C2',   // Gray text
  'text-primary': '#FFFFFF',     // White text
}
```

## 🚀 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

This portfolio includes GitHub Actions for automatic deployment.

1. **Push your code to GitHub**:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/BarbaraSousas/portfolio.git
git push -u origin main
```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

3. **Update the base path** in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/portfolio/', // Change 'portfolio' to your repo name
})
```

4. **Push changes** and the site will auto-deploy!

Your site will be live at: `https://BarbaraSousas.github.io/portfolio/`

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
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
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (manual)
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 To-Do Before Going Live

- [ ] Add your profile photo to `/src/assets/profile-photo.jpg`
- [ ] Update projects in `/src/data/projects.ts` with your real projects
- [ ] Add project screenshots to `/src/assets/projects/`
- [ ] Setup Formspree and update contact form endpoint
- [ ] Verify all contact information is correct
- [ ] Test on mobile devices
- [ ] Update `vite.config.ts` with your repository name
- [ ] Push to GitHub and enable GitHub Pages
- [ ] Share your portfolio URL! 🎉

## 🐛 Troubleshooting

### Build fails with TypeScript errors

```bash
npm run build -- --mode development
```

### Routes don't work after deployment

Make sure the `base` in `vite.config.ts` matches your repository name.

### Images not loading

Images should be in `/src/assets/` and imported/referenced with relative paths starting with `/assets/`.

### Contact form not working

1. Verify you've signed up for Formspree
2. Check that `FORMSPREE_ENDPOINT` in `/src/data/contact.ts` is correct
3. Make sure the endpoint starts with `https://formspree.io/f/`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 💖 Credits

Built with love by Barbara Araújo

- Design inspiration: Modern tech aesthetics with a feminine touch
- Icons: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide](https://lucide.dev/)
- Animations: [Framer Motion](https://www.framer.com/motion/)

---

**Ready to showcase your work? Let's go! 🚀**

If you have any questions or need help customizing your portfolio, feel free to reach out!
