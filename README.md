# Andryus Zolet — Portfolio

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

## Overview

Personal portfolio website built to showcase my work as a Software Engineer. The project features a modern design with animated components, smooth transitions, and a clean UI — all focused on delivering a great user experience.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router) with React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 with `tailwind-merge` and `class-variance-authority`
- **Animations:** [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://gsap.com) for complex sequences
- **UI Components:** [shadcn/ui](https://ui.shadcn.com) built on top of Radix UI primitives
- **Icons:** Lucide React and React Icons
- **3D / Shaders:** Three.js and `@paper-design/shaders-react`
- **Analytics:** Vercel Analytics
- **Package Manager:** pnpm

## Project Structure

```
app/               # Next.js App Router pages
components/        # Reusable UI and layout components
  ui/              # shadcn/ui components and custom UI elements
lib/               # Utility functions
public/            # Static assets and images
styles/            # Global CSS
```

## How It Was Developed

1. **Design first** — layout and visual concepts were sketched and iterated directly in code using Tailwind utility classes, keeping the feedback loop fast.
2. **Component-driven** — each section (hero, about, projects, contact) was built as an isolated component, making them easy to maintain and reuse.
3. **Animations** — motion effects were added with Framer Motion for page transitions and element reveals, and GSAP for more fine-grained animation control.
4. **shadcn/ui** — base components (buttons, inputs, cards, etc.) were scaffolded via shadcn/ui and then customized to match the portfolio design language.
5. **Fonts** — Google Fonts (Open Sans, Rubik, Instrument Serif) loaded through `next/font` for optimized performance.
6. **Deployment** — the project is deployed on Vercel with automatic deployments on every push to the main branch.

## Running Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
pnpm build
pnpm start
```
