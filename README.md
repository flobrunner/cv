# Florian Brunner — CV

A minimalist personal CV website built with Vite, React, TypeScript, and Tailwind CSS. Deployed to [GitHub Pages](https://flobrunner.github.io/cv/).

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 18 + TypeScript (5.8) |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 · shadcn/ui |
| Routing | React Router DOM |
| Data | TanStack Query |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Charts | Recharts |

## Project Structure

```
src/
├── main.tsx          # Entry point
├── App.tsx           # Providers + routes
├── pages/            # Route components
├── components/
│   └── ui/           # shadcn/ui primitives
├── hooks/            # Custom hooks
├── lib/              # Utilities
└── assets/           # Images, PDFs, fonts
public/               # Static assets (favicon, robots.txt)
docs/                 # Production build output
```

Path alias `@/` → `src/`. Output directory is `docs/`.

## Getting Started

```bash
# Install dependencies
npm i

# Start dev server on :8080
npm run dev

# Lint check
npm run lint

# Production build → docs/
npm run build
```

## Deployment

Built automatically via GitHub Actions on every push to `main`:

```
push → main → build → deploy to GitHub Pages
```

The site is served at `https://flobrunner.github.io/cv/`.

## Design System

Colors are defined as HSL tokens in `src/index.css` and accessible via CSS variables:

```css
--background    --foreground    --primary       --border
--muted         --accent        --destructive   --ring
```

Dark mode is supported through the `.dark` class.

## AI Agents

See [AGENTS.md](./AGENTS.md) for conventions and guidelines when working on this project with AI coding assistants.