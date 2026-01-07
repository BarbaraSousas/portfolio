# 🎨 Customization Guide - Barbara's Portfolio

This guide will help you personalize your portfolio with your projects, photos, and information.

## 🚀 Quick Start Checklist

Complete these tasks in order to fully customize your portfolio:

### 1. ✅ Install Dependencies (First!)

```bash
npm install
```

### 2. 📸 Add Your Profile Photo

**Location**: `/src/assets/profile-photo.jpg`

**Requirements**:
- Square image (recommended: 500x500px or larger)
- JPG or PNG format
- Good quality, professional photo
- Centered on your face

**Steps**:
1. Save your photo as `profile-photo.jpg` in `/src/assets/`
2. Open `/src/components/Hero.tsx`
3. Find line ~152 (look for the commented `<img>` tag)
4. Uncomment this code:

```tsx
<img
  src="/assets/profile-photo.jpg"
  alt="Barbara Araújo"
  className="w-full h-full object-cover"
/>
```

5. Delete or comment out the placeholder div

### 3. 🚀 Add Your GitHub Projects

**Location**: `/src/data/projects.ts`

This is the **most important** customization!

#### Step-by-step:

1. **Open** `/src/data/projects.ts`

2. **Review your GitHub repos**: https://github.com/BarbaraSousas

3. **Choose 5-10 best projects** that:
   - Have good README files
   - Represent different skills
   - You're proud to show employers

4. **For EACH project, copy this template**:

```typescript
{
  id: 'your-project-name', // Use kebab-case
  title: 'Your Project Title',
  description: {
    en: 'Brief English description (1-2 sentences)',
    pt: 'Breve descrição em português (1-2 frases)',
  },
  longDescription: {
    en: 'Detailed English description for the modal popup',
    pt: 'Descrição detalhada em português para o modal',
  },
  technologies: ['React', 'TypeScript', 'Node.js'], // List all techs used
  type: 'web', // Options: 'web', 'mobile', 'fullstack'
  githubUrl: 'https://github.com/BarbaraSousas/your-repo',
  demoUrl: 'https://your-demo.vercel.app', // Optional - only if you have a live demo
  images: ['/assets/projects/your-project-1.png'], // We'll add these next
  featured: true, // Set to true for your TOP 3-4 projects
  features: {
    en: [
      'Main feature 1',
      'Main feature 2',
      'Main feature 3',
    ],
    pt: [
      'Funcionalidade principal 1',
      'Funcionalidade principal 2',
      'Funcionalidade principal 3',
    ],
  },
},
```

5. **Replace the example projects** with your real projects

6. **IMPORTANT**: Make sure to:
   - Translate descriptions to both English and Portuguese
   - List all relevant technologies
   - Set `featured: true` for your best 3-4 projects only
   - Use the correct `type` ('web' for websites, 'mobile' for React Native apps, 'fullstack' for both)

### 4. 🖼️ Add Project Screenshots

**Location**: `/src/assets/projects/`

#### For Web Projects:

1. **Create the folder**: `/src/assets/projects/` (if it doesn't exist)

2. **Take screenshots**:
   - Full page screenshot of your project
   - Focus on the most impressive parts
   - Recommended size: 1200x800px or larger

3. **Name your files**:
   - `your-project-name-1.png`
   - `your-project-name-2.png`
   - etc.

4. **Update your project data**:

```typescript
images: [
  '/assets/projects/your-project-1.png',
  '/assets/projects/your-project-2.png',
]
```

#### For Mobile Projects (React Native):

1. **Run your app** in an emulator or device

2. **Take screenshots** of key screens:
   - Home screen
   - Main features
   - Unique UI elements

3. **Optional**: Use a tool like [Mockuphone](https://mockuphone.com/) to put screenshots in device frames

4. **Name and add** same as web projects above

### 5. 📧 Setup Contact Form

**Location**: `/src/data/contact.ts`

#### Steps:

1. **Sign up for Formspree**:
   - Go to https://formspree.io/
   - Create a free account
   - Click "New Form"
   - Name it "Portfolio Contact Form"
   - Copy the form endpoint (looks like: `https://formspree.io/f/xyzabc123`)

2. **Update contact.ts**:

```typescript
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_ACTUAL_ID';
```

3. **Verify your email** in contact.ts is correct:

```typescript
export const contactInfo: ContactInfo = {
  email: 'barbarasousaas@gmail.com', // ✅ Verify this
  phone: '+55 (61) 99999-9999', // 📱 Update with your actual number
  location: 'Brasília, Brazil',
  socials: {
    linkedin: 'https://linkedin.com/in/barbara-sousa', // ✅ Verify
    github: 'https://github.com/BarbaraSousas', // ✅ Verify
  },
};
```

### 6. 🎨 Optional: Customize Colors

**Location**: `/tailwind.config.js`

If you want to change the pink neon theme:

```javascript
colors: {
  'accent-neon': '#FF4F9A',     // Change this for main color
  'accent-blush': '#FFD1E6',    // Change this for secondary color
}
```

**Color suggestions**:
- Blue tech: `#00D9FF` / `#B3ECFF`
- Purple modern: `#A855F7` / `#E9D5FF`
- Green dev: `#10B981` / `#D1FAE5`

### 7. 🧪 Test Your Changes

```bash
# Start development server
npm run dev
```

**Test checklist**:
- [ ] Profile photo shows up (not placeholder)
- [ ] All your projects appear
- [ ] Project screenshots load
- [ ] Click on a project card - modal opens with details
- [ ] Language toggle works (EN ↔ PT)
- [ ] All links work (GitHub, LinkedIn, etc.)
- [ ] Contact form sends email (test it!)
- [ ] Everything looks good on mobile (use browser dev tools)

## 📋 Example: Adding a Project

Let's say you want to add a project called "Task Manager App":

### 1. Gather Information

- **GitHub URL**: https://github.com/BarbaraSousas/task-manager
- **Technologies**: React, TypeScript, Node.js, MongoDB
- **Type**: Full-Stack
- **Has Demo**: Yes, deployed on Vercel

### 2. Add to projects.ts

```typescript
{
  id: 'task-manager',
  title: 'Task Manager App',
  description: {
    en: 'Full-stack task management application with real-time updates and collaborative features.',
    pt: 'Aplicação full-stack de gerenciamento de tarefas com atualizações em tempo real e recursos colaborativos.',
  },
  longDescription: {
    en: 'A comprehensive task management solution built for teams. Features include real-time collaboration, task assignments, due dates, priority levels, and project organization. Built with React and Node.js, using WebSockets for instant updates.',
    pt: 'Uma solução completa de gerenciamento de tarefas construída para equipes. Funcionalidades incluem colaboração em tempo real, atribuição de tarefas, prazos, níveis de prioridade e organização de projetos. Construído com React e Node.js, usando WebSockets para atualizações instantâneas.',
  },
  technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
  type: 'fullstack',
  githubUrl: 'https://github.com/BarbaraSousas/task-manager',
  demoUrl: 'https://task-manager-demo.vercel.app',
  images: [
    '/assets/projects/task-manager-1.png',
    '/assets/projects/task-manager-2.png',
    '/assets/projects/task-manager-3.png',
  ],
  featured: true,
  features: {
    en: [
      'Real-time collaboration with WebSockets',
      'Task assignment and priority management',
      'Project organization and filtering',
      'User authentication and authorization',
      'Responsive design for all devices',
    ],
    pt: [
      'Colaboração em tempo real com WebSockets',
      'Atribuição de tarefas e gerenciamento de prioridades',
      'Organização e filtragem de projetos',
      'Autenticação e autorização de usuários',
      'Design responsivo para todos os dispositivos',
    ],
  },
},
```

### 3. Add Screenshots

1. Take 3 screenshots of your app
2. Save them as:
   - `/src/assets/projects/task-manager-1.png`
   - `/src/assets/projects/task-manager-2.png`
   - `/src/assets/projects/task-manager-3.png`

### 4. Done! 🎉

The project will automatically appear in your portfolio.

## 🆘 Common Issues

### "My profile photo doesn't show"

**Solution**:
1. Check file name is exactly `profile-photo.jpg`
2. Check it's in `/src/assets/` folder
3. Make sure you uncommented the `<img>` tag in Hero.tsx
4. Refresh the page (sometimes Vite needs a refresh)

### "Project images don't load"

**Solution**:
1. Check file paths start with `/assets/projects/` (not `src/assets/`)
2. Make sure images are actually in the `src/assets/projects/` folder
3. Check file names match exactly (case-sensitive!)

### "Contact form doesn't work"

**Solution**:
1. Verify you created a Formspree account
2. Check the endpoint URL is correct in `contact.ts`
3. Make sure endpoint starts with `https://formspree.io/f/`
4. Test by filling out the form - check your Formspree dashboard for submissions

### "Build fails"

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🎯 Priority Tasks

If you're short on time, focus on these in order:

1. **Add profile photo** (makes it personal!)
2. **Add 3-5 best projects** (shows your work)
3. **Setup contact form** (for recruiters to reach you)
4. **Test on mobile** (most visitors use phones)

## 💡 Tips for Success

### Writing Project Descriptions

**Good description**:
> "E-commerce platform with payment integration, inventory management, and real-time order tracking. Built for a local business, increased sales by 40%."

**Bad description**:
> "A website I made with React"

### Choosing Projects

**Include**:
- ✅ Projects with live demos
- ✅ Projects showing different skills
- ✅ Projects with good code quality
- ✅ Recent projects (last 1-2 years)

**Avoid**:
- ❌ Tutorial follow-alongs
- ❌ Very old projects
- ❌ Broken/unmaintained projects
- ❌ Projects with no README

### Taking Screenshots

**Tips**:
- Use a clean browser window (no bookmarks bar)
- Show the most impressive feature
- Crop out unnecessary parts
- Use good lighting if showing mobile
- For dark mode apps, use dark mode screenshots

## 📞 Need Help?

If you get stuck:

1. **Check the error message** in the browser console (F12)
2. **Read the README.md** for additional troubleshooting
3. **Check file paths** - most issues are typos in paths
4. **Try the example projects** first to see how they work

---

**You've got this! 💪 Your portfolio is going to look amazing!**
