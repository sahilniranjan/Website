# Sahil Niranjan — Portfolio

A modern, highly interactive AI/ML engineer portfolio with a 3D neural-network hero, kinetic typography, and scroll-driven animations.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Three Fiber** for the 3D neural-network field
- **Framer Motion** for animations
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
├── app/              → Next.js App Router pages, layout & global styles
├── components/
│   ├── 3d/           → NeuralField (Three.js animated network)
│   ├── sections/     → Hero, About, Experience, Projects, Skills, Education, Contact
│   ├── ui/           → Magnetic, CountUp, RoleTypewriter, SectionHeading
│   └── layout/       → Navbar, Footer, CustomCursor, SmoothScroll
├── lib/
│   ├── constants.ts  → All content (experience, projects, skills, education)
│   ├── useSpotlight.ts → Mouse-tracked card spotlight hook
│   └── utils.ts      → Utility functions
└── public/
    └── assets/       → Resume PDF
```

## Features

- 3D neural-network hero with mouse parallax (React Three Fiber)
- Kinetic per-letter name reveal with gradient sheen
- Floating pill navbar with active-section indicator & scroll progress bar
- Bento-grid About section with animated stat counters
- Scroll-driven experience timeline with animated progress line
- Tilting project cards with mouse-tracked spotlight glow
- Filterable skill chips with spring layout animations + infinite marquee
- Expandable coursework accordion in Education
- Magnetic buttons & custom dual-layer cursor
- Contact form (Formspree)
- Fully responsive & accessible (prefers-reduced-motion respected)
