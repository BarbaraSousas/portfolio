# 🚀 Quick Start Guide

Welcome Barbara! Your portfolio is ready to go. Follow these steps to get it running and customized.

## ⚡ Get Started in 3 Steps

### 1. Install & Run (2 minutes)

```bash
# Install dependencies (only needed once)
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser. Your portfolio is now running! 🎉

### 2. Customize (Priority Tasks)

#### A. Add Your Profile Photo

1. Find a professional photo of yourself (square, 500x500px+)
2. Save it as: **`src/assets/profile-photo.jpg`**
3. Open **`src/components/Hero.tsx`** (around line 152)
4. Uncomment the `<img>` tag:

```tsx
<img
  src="/assets/profile-photo.jpg"
  alt="Barbara Araújo"
  className="w-full h-full object-cover"
/>
```

#### B. Add Your Real Projects

1. Open **`src/data/projects.ts`**
2. Replace the 3 example projects with YOUR projects from GitHub
3. For each project, copy this template and fill it in:

```typescript
{
  id: 'your-project',
  title: 'Project Name',
  description: {
    en: 'English description',
    pt: 'Descrição em português',
  },
  technologies: ['React', 'TypeScript', 'etc'],
  type: 'web', // or 'mobile' or 'fullstack'
  githubUrl: 'https://github.com/BarbaraSousas/your-repo',
  demoUrl: 'https://demo-url.com', // optional
  images: ['/assets/projects/your-project.png'],
  featured: true, // only for your best 3-4 projects
},
```

4. Add screenshots: Create `src/assets/projects/` folder and add your project images

#### C. Setup Contact Form

1. Go to https://formspree.io and create a free account
2. Create a new form
3. Copy the form endpoint (looks like: `https://formspree.io/f/abc123`)
4. Open **`src/data/contact.ts`** and update:

```typescript
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_ID_HERE';
```

### 3. Deploy to GitHub Pages

#### Setup GitHub Repository

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial portfolio setup"

# Create repo on GitHub
# Then connect and push:
git branch -M main
git remote add origin https://github.com/BarbaraSousas/portfolio.git
git push -u origin main
```

#### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push any change - your site will auto-deploy!

Your portfolio will be live at: **`https://BarbaraSousas.github.io/portfolio/`**

## 📋 Full Customization Checklist

- [ ] Add profile photo (`src/assets/profile-photo.jpg`)
- [ ] Update projects with your real GitHub projects
- [ ] Add project screenshots (`src/assets/projects/`)
- [ ] Setup Formspree contact form
- [ ] Verify all contact info is correct
- [ ] Test the site on mobile (use browser dev tools)
- [ ] Update `vite.config.ts` base path to match your repo name
- [ ] Deploy to GitHub Pages
- [ ] Share your portfolio! 🎉

## 📚 Need More Help?

- **Detailed customization**: See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)
- **Technical details**: See [README.md](./README.md)
- **Build errors**: Check the troubleshooting section in README.md

## 🎯 What You Get

Your portfolio includes:

- ✅ **Home**: Hero section with photo, tech stack, highlights
- ✅ **Experience**: Timeline of all your professional experience (pre-filled!)
- ✅ **Education**: Your academic background (pre-filled!)
- ✅ **Projects**: Showcase your GitHub projects (add yours!)
- ✅ **Contact**: Contact form + social links
- ✅ **Language Toggle**: English ↔ Portuguese
- ✅ **Smooth Animations**: Professional transitions and effects
- ✅ **Fully Responsive**: Works perfectly on all devices
- ✅ **Auto-deploy**: Push to GitHub = automatic deployment

## 🎨 Current Status

Your portfolio is **90% complete**!

**Pre-filled for you**:
- ✅ All professional experience (from your CVs)
- ✅ Education history
- ✅ Contact information
- ✅ Design system and theme
- ✅ All pages and components

**You just need to add**:
- 📸 Your profile photo
- 💻 Your GitHub projects
- 📧 Contact form setup

That's it! You're almost done! 🚀

---

**Questions? Issues? Check the README.md or CUSTOMIZATION_GUIDE.md for detailed help!**

Good luck with your job search! Your portfolio looks amazing! 💪✨
