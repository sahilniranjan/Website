# Sahil Niranjan — Portfolio

A highly interactive, visually stunning 3D animated developer portfolio website.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Three Fiber** + **@react-three/drei** for 3D
- **Framer Motion** for animations
- **GSAP** for scroll-linked animations
- **Lenis** for smooth scrolling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for **Vercel** deployment. Push to `main` and connect the repo in [vercel.com](https://vercel.com).

### Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

## Project Structure

```
src/
├── app/              → Next.js App Router pages & layout
├── components/
│   ├── 3d/           → Three.js canvas components
│   ├── sections/     → Hero, About, Experience, Projects, Skills, Education, Contact
│   ├── ui/           → Shared UI components (TiltCard, Modal, CountUp, etc.)
│   └── layout/       → Navbar, Footer, CustomCursor, SmoothScroll
├── lib/
│   ├── constants.ts  → All data (projects, skills, experience)
│   └── utils.ts      → Utility functions
└── public/
    └── assets/       → Images, resume PDF
```

## Features

- Full-screen 3D hero with floating geometric shapes & particle field
- Mouse-reactive parallax on 3D objects
- Animated role typewriter
- Scroll-triggered timeline for experience
- 3D tilt project cards with glassmorphism design
- 3D rotating skill sphere
- Contact form (Formspree)
- Custom cursor with hover effects
- Konami code easter egg (matrix rain)
- Fully responsive & accessible (prefers-reduced-motion)
- Dark theme with electric blue/neon purple accents
