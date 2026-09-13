# Agents — Guidelines for AI Coding Assistants

## Stack

- **React 18** · TypeScript (5.8) · Vite 5 · Tailwind CSS 3 · shadcn/ui
- React Router DOM, TanStack Query, React Hook Form + Zod
- Lucide icons, Sonner toasts, Recharts

## Structure

```
src/
  main.tsx          # entry point
  App.tsx           # providers + routes
  pages/            # one component per route
  components/
    ui/             # shadcn/ui primitives
  hooks/            # custom hooks
  lib/              # utilities
assets/             # images, PDFs, fonts
```

`@/` → `src/` (path alias). Output dir is `docs/`.

## Conventions

- No new UI libraries without asking. Prefer shadcn/ui components.
- Keep components small; co-locate CSS in Tailwind classes.
- Use `lucide-react` for icons.
- HSL color tokens only (`var(--primary)`, etc.). Define new tokens in `src/index.css`.
- No bare `any`; use `unknown` + narrowing or explicit types.
- Add `aria-label` on icon-only buttons.
- Run `npm run lint` after changes that touch code.

## Commands

```
npm i          install dependencies
npm run dev    start dev server (:8080)
npm run build  production build → docs/
npm run lint   ESLint check
```

Deployed to GitHub Pages at `https://flobrunner.github.io/cv/`.