<div align="center">

# AK1 Photography Portfolio

Modern photography portfolio built with **Next.js App Router**, **TypeScript**, **SCSS modules**, and **Framer Motion**. It showcases featured genres, testimonials, an about page, and genre-specific galleries backed by content from Hygraph.

</div>

## ✨ TODO
- add tests
- consider pagination of portfolio pages (images)

## ✨ Features

- Dynamic hero that pulls the latest cover image from Hygraph
- Genre grid with animated cards and dedicated masonry galleries
- Lightbox viewer with swipe-friendly navigation
- Testimonials and About sections powered by CMS content
- Mobile-first navigation with Instagram/YouTube links
- Theme-aware typography and custom SCSS design system

## 🧱 Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** SCSS Modules, CSS custom properties
- **Animations:** Framer Motion
- **Data:** Hygraph (GraphQL) + `graphql-request`
- **State/Data Fetching:** React Query (TanStack Query)
- **Icons:** lucide-react

## 🚀 Getting Started

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## 🔑 Environment Variables

Create `.env.local` with:

```
NEXT_PUBLIC_HYGRAPH_ENDPOINT=...
NEXT_PUBLIC_HYGRAPH_TOKEN=...
```

## 📂 Project Structure

```
src/
  app/            # App Router routes (home, testimonials, about, genre pages)
  components/     # UI building blocks (layout, cards, lightbox, skeletons)
  hooks/          # React Query hooks for Hygraph content
  lib/            # GraphQL queries, constants, utilities
  styles/         # Global + variables SCSS
```

## 📜 Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server             |
| `npm run build` | Production build             |
| `npm run start` | Run production build locally |
| `npm run lint`  | Lint with ESLint             |

## 📦 Deployment

The project is optimized for Vercel (Next.js hosting). Ensure env vars are configured in the Vercel dashboard before deploying.

---

Maintained by Arron Kukadia · [Instagram](https://instagram.com/ak1photography) · [YouTube](https://www.youtube.com/@ak1photography)
