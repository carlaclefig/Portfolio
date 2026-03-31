# Personal Portfolio - Carla Clemente

A modern, responsive portfolio website built with Astro, TypeScript, and Tailwind CSS. Showcasing my projects, skills, and experience as a Full-Stack Developer.

🌐 **Live Demo:** [Tu URL de Netlify aquí]

## ✨ Features

- 🎨 Clean and modern design with dark mode support
- 📱 Fully responsive across all devices
- ⚡ Fast page loads with Astro's static site generation
- 🎯 Dynamic project pages with detailed case studies
- 🌙 Persistent theme preference (light/dark mode)
- 🔍 SEO optimized with meta tags
- ♿ Accessible and semantic HTML

## 🚀 Project Structure
```text
/
├── public/
│   ├── about/              # Photos
│   ├── projects/           # Project screenshots
│   ├── icons/              # Technology icons
│   └── resume.pdf          # Resume file
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   └── ProjectCard.astro
│   ├── data/
│   │   └── projects.ts    # Projects database
│   ├── layouts/
│   │   └── Layout.astro   # Base layout
│   ├── pages/
│   │   ├── index.astro    # Home page
│   │   ├── about.astro    # About page
│   │   └── projects/
│   │       ├── index.astro      # Projects list
│   │       └── [slug].astro     # Project detail pages
│   └── styles/
│       └── global.css
└── package.json
```

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build) - Static Site Generator
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Language:** TypeScript
- **Deployment:** Netlify
- **Package Manager:** npm

## 🏃‍♀️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/carlaclefig/tu-repo-portfolio.git
cd tu-repo-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📜 Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📂 Adding New Projects

To add a new project to your portfolio:

1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array:
```typescript
{
  slug: "project-url-name",
  title: "Project Title",
  shortDescription: "Brief description for card...",
  fullDescription: "Detailed description for project page...",
  features: ["Feature 1", "Feature 2", ...],
  technologies: [
    {
      name: "Tech Name",
      imageIcon: "/icon.png",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      description: "How this tech was used..."
    }
  ],
  demoUrl: "https://live-demo.com",
  githubUrl: "https://github.com/username/repo",
  imageUrl: "/projects/screenshot.png"
}
```

3. Add project screenshot to `/public/projects/`
4. The project page will be automatically generated at `/projects/your-slug`

## 🎨 Customization

### Theme Colors

Edit Tailwind configuration in `tailwind.config.ts` to change the color scheme.

### Content

- **Personal Info:** Update `src/components/Hero.astro` and `src/components/About.astro`
- **Social Links:** Modify links in `src/components/Header.astro` and `src/components/Footer.astro`
- **Projects:** Edit `src/data/projects.ts`

## 🚢 Deployment

This site is optimized for deployment on Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy!

The site will automatically redeploy on every push to the main branch.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect With Me

- **Portfolio:** [Carla Clemente](https://carlaclefig.netlify.app/)
- **LinkedIn:** [Carla Clemente Figueroa](https://www.linkedin.com/in/carlaclefig/)
- **GitHub:** [@carlaclefig](https://github.com/carlaclefig)
- **Email:** [Carla Clemente](carlaclefig@gmail.com)

---

Built with ❤️ using [Astro](https://astro.build)