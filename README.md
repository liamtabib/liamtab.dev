# liamtab.dev

Personal portfolio and blog built with **Astro** and **TypeScript**. A clean, minimal platform for showcasing work, projects, and thoughts on data engineering and machine learning.

## Overview

This is a static site generator setup optimized for performance and developer experience. The site serves as both a professional portfolio and a platform for sharing technical projects and insights.

**Key capabilities:**
- Responsive design that works across all devices
- Dark/light theme support with system preference detection
- Content-driven architecture using Astro's content collections
- TypeScript throughout for type safety
- Tailwind CSS for styling consistency

## Quick Setup

```bash
# Clone and install
git clone https://github.com/liamtabib/liamtab.dev.git
cd liamtab.dev
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`.

## Tech Stack

- **Astro 5.x** - Static site generator with excellent performance
- **TypeScript** - Type safety and improved DX
- **Tailwind CSS** - Utility-first styling framework
- **MDX** - Enhanced markdown with component support

## Project Structure

```
src/
├── components/          # Reusable UI components (Header, Footer, etc.)
├── content/            
│   ├── projects/       # Project case studies and demos
│   └── work/           # Work experience entries
├── layouts/            # Page templates and layouts
├── pages/              # Site routes (/, /about, /projects, etc.)
├── lib/                # Utilities and helper functions
├── styles/             # Global CSS and theme definitions
├── types.ts            # TypeScript type definitions
└── consts.ts          # Site configuration and metadata
```

## Content Management

### Projects
Projects live in `src/content/projects/` as individual folders:
```
src/content/projects/my-project/
├── index.md            # Project metadata and description
└── assets/             # Images, diagrams, etc.
```

Each project includes frontmatter for metadata (title, date, technologies used) and markdown content for the detailed description.

### Work Experience
Work entries are managed in `src/pages/work/index.astro` as a structured TypeScript array. This approach provides flexibility for complex formatting while maintaining type safety.

### Site Configuration
Core site settings are centralized in `src/consts.ts`:
- Personal information and contact details
- Social media links
- Content display limits (e.g., number of projects on homepage)
- SEO metadata defaults

## Development

### Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Generate production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all source files |
| `npm run lint:fix` | Auto-fix linting issues |

### Adding Content

**New Project:**
1. Create folder in `src/content/projects/`
2. Add `index.md` with required frontmatter
3. Include any assets in the project folder

**New Work Entry:**
1. Add entry to the `experience` array in `src/pages/work/index.astro`
2. Follow the existing TypeScript interface structure

## Deployment

The site is optimized for deployment on modern static hosting platforms:

- **Vercel** - Automatic deployments from GitHub (recommended)
- **Netlify** - Alternative static hosting with CI/CD
- **GitHub Pages** - Free option for personal projects

Build artifacts are generated to `./dist/` and can be deployed to any static file host.

## Performance Features

- **Zero JavaScript by default** - Only ships JS when needed
- **Optimized images** - Automatic image optimization and lazy loading
- **Minimal CSS** - Tailwind's purge removes unused styles
- **Fast builds** - Astro's partial hydration and optimized bundling

## License

MIT - feel free to use this as a starting point for your own portfolio.

---

**Contact:** liam@liamtab.dev | [LinkedIn](https://www.linkedin.com/in/liamtabibzadeh) | [GitHub](https://github.com/liamtabib)