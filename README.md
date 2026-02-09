# Research Portfolio - Embodied AI & Robotics

A high-performance, project-centric research portfolio built with Next.js 14, Tailwind CSS, and Framer Motion. Designed with a "Modern Academic" aesthetic to showcase expertise in VLM Architectures and Sim-to-Real Transfer.

## Features

### Core Architecture

- **Hero Section**: High-impact introduction focusing on VLM Architectures and Sim-to-Real expertise
- **Research Pillars**: Interactive split-layout showcasing two core research domains (Tactile Perception & VLM Reasoning)
- **Impact Dashboard**: Bento Grid layout displaying quantifiable metrics from experiments and deployments
- **Publications Section**: Clean, sortable academic publication list with filtering by type

### Design Aesthetic

- Clean typography using Inter font family
- Ample whitespace with high contrast
- Minimalist design capable of handling high-density information
- Fully responsive for mobile, tablet, and desktop
- Subtle animations powered by Framer Motion
- Dark mode support

### Technical Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth, performant animations
- **Language**: TypeScript for type safety
- **Performance**: Optimized for Core Web Vitals

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository or navigate to your project directory

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## Customization Guide

### 1. Personal Information

Update your personal details in:

- [app/layout.tsx](app/layout.tsx) - Meta tags and SEO information
- [app/page.tsx](app/page.tsx) - Footer social links
- [components/HeroSection.tsx](components/HeroSection.tsx) - Name and headline

### 2. Research Content

All content is centralized in [lib/data.ts](lib/data.ts):

#### Research Pillars

Edit the `researchPillars` array to update:
- Pillar titles and descriptions
- Project information
- Technologies used
- Impact metrics

```typescript
export const researchPillars: ResearchPillar[] = [
  {
    id: "your-pillar-id",
    title: "Your Research Area",
    subtitle: "Brief description",
    description: "Detailed description...",
    icon: "🔬", // Emoji icon
    color: "blue", // blue | purple | emerald
    projects: [
      {
        id: "project-1",
        title: "Project Name",
        description: "Project description...",
        impact: "Key metric",
        technologies: ["Tech1", "Tech2"],
        url: "#", // Optional
      },
    ],
  },
];
```

#### Impact Metrics

Edit the `impactMetrics` array:

```typescript
export const impactMetrics: ImpactMetric[] = [
  {
    id: "metric-1",
    label: "Metric Label",
    value: "100+",
    description: "Metric description...",
    icon: "🎯", // Optional emoji
    trend: "up", // up | down | neutral
    size: "large", // small | medium | large
  },
];
```

#### Publications

Edit the `publications` array:

```typescript
export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Paper Title",
    authors: ["Author 1", "Author 2"],
    venue: "Conference/Journal Name",
    year: 2024,
    type: "conference", // conference | journal | preprint | patent
    url: "#", // Optional
    pdf: "#", // Optional
    code: "#", // Optional
    tags: ["Tag1", "Tag2"], // Optional
  },
];
```

### 3. Color Scheme

Edit [tailwind.config.ts](tailwind.config.ts) to customize colors:

```typescript
colors: {
  accent: {
    blue: "#3B82F6",    // Primary accent
    purple: "#8B5CF6",  // Secondary accent
    emerald: "#10B981", // Success/highlight
  },
}
```

### 4. Typography

The portfolio uses Inter as the default font. To change:

1. Update the font import in [app/layout.tsx](app/layout.tsx)
2. Import your preferred Google Font
3. Update the `--font-geist-sans` CSS variable

### 5. Animations

Adjust animation timing in [lib/utils.ts](lib/utils.ts):

```typescript
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};
```

## Project Structure

```
.
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── HeroSection.tsx      # Hero/landing section
│   ├── ResearchPillars.tsx  # Research domains split layout
│   ├── ImpactDashboard.tsx  # Bento grid metrics dashboard
│   └── PublicationsSection.tsx # Publications with filters
├── lib/
│   ├── data.ts              # All content data
│   ├── types.ts             # TypeScript type definitions
│   └── utils.ts             # Utility functions and animations
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Performance Optimizations

- Server Components by default (Next.js 14 App Router)
- Client components only where interactivity is needed
- Optimized images and fonts
- CSS-in-JS animations via Framer Motion
- Minimal bundle size with tree-shaking

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

Build the static site:

```bash
npm run build
```

Deploy the `.next` folder to your preferred hosting platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This portfolio template is free to use for personal and commercial projects.

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

---

**Note**: Remember to replace all placeholder content in `lib/data.ts` with your actual research information, update social links in the footer, and customize the color scheme to match your personal brand.
