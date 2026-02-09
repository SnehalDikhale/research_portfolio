# Project Overview - Research Portfolio

## What Has Been Built

A production-ready, high-performance research portfolio specifically designed for showcasing Embodied AI and Robotics research with a modern academic aesthetic.

## Architecture Summary

### Technology Stack
- **Next.js 14** - App Router for optimal performance
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Performant animations and transitions

### Design Philosophy

**"Modern Academic"**
- Clean typography (Inter font family)
- High contrast for readability
- Ample whitespace
- Minimal but information-dense
- Professional and credible

**"Project-Centric"**
- Focus on actual research work, not just credentials
- Visual hierarchy emphasizing impact and outcomes
- Quantifiable metrics front and center

## Core Sections

### 1. Hero Section ([components/HeroSection.tsx](components/HeroSection.tsx))

**Purpose**: Immediate impact and clear value proposition

**Features**:
- Animated entrance with staggered reveals
- Key expertise areas prominently displayed (VLM Architectures, Sim-to-Real)
- Clear CTAs to research and publications
- Subtle gradient backgrounds
- Responsive design

**Customization Points**:
- Main headline (lines 25-29)
- Expertise focus areas (lines 44-54)
- CTA buttons (lines 62-77)

---

### 2. Research Pillars ([components/ResearchPillars.tsx](components/ResearchPillars.tsx))

**Purpose**: Deep dive into two core research domains

**Features**:
- Split-screen layout for dual research tracks
- Interactive cards with hover states
- Expandable/collapsible project details
- Color-coded by domain
- Each pillar shows:
  - Multiple projects
  - Technologies used
  - Impact metrics
  - Project descriptions

**Customization Points**:
- Pillar data in [lib/data.ts](lib/data.ts) lines 3-60
- Colors: "blue", "purple", or "emerald"
- Project count: Add as many as needed

**Design Decision**:
Split layout emphasizes equal importance of both research domains (Tactile Perception vs VLM Reasoning).

---

### 3. Impact Dashboard ([components/ImpactDashboard.tsx](components/ImpactDashboard.tsx))

**Purpose**: Quantifiable research outcomes at a glance

**Features**:
- Bento Grid layout (Pinterest-style)
- Variable card sizes for visual hierarchy
- Animated entrance on scroll
- Trend indicators (↑/↓)
- Gradient backgrounds
- Responsive grid

**Customization Points**:
- Metrics data in [lib/data.ts](lib/data.ts) lines 62-100
- Card sizes: "small", "medium", "large"
- Add unlimited metrics

**Design Decision**:
Large cards (2x2 grid) for primary metrics, smaller cards for supporting data.

---

### 4. Publications Section ([components/PublicationsSection.tsx](components/PublicationsSection.tsx))

**Purpose**: Academic credibility through peer-reviewed work

**Features**:
- Filter by type: conference, journal, preprint, patent
- Sort by year or type
- Color-coded badges
- Links to PDF, code, and external URLs
- Tag system for topics
- Statistics summary

**Customization Points**:
- Publications data in [lib/data.ts](lib/data.ts) lines 102-160
- Add unlimited publications
- Custom tags per publication

**Design Decision**:
Clean, scannable list format familiar to academic audiences (similar to Google Scholar).

---

## Data Architecture

All content is centralized in [lib/data.ts](lib/data.ts):

```
lib/data.ts
├── researchPillars[]    → Research domains and projects
├── impactMetrics[]      → Quantifiable outcomes
└── publications[]       → Academic work
```

### Type Definitions ([lib/types.ts](lib/types.ts))

**ResearchPillar**
```typescript
{
  id: string
  title: string
  subtitle: string
  description: string
  icon: string              // Emoji
  color: "blue" | "purple" | "emerald"
  projects: Project[]
}
```

**ImpactMetric**
```typescript
{
  id: string
  label: string
  value: string            // e.g., "100+", "7x"
  description: string
  icon?: string            // Emoji
  trend?: "up" | "down" | "neutral"
  size?: "small" | "medium" | "large"
}
```

**Publication**
```typescript
{
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  type: "conference" | "journal" | "preprint" | "patent"
  url?: string
  pdf?: string
  code?: string
  tags?: string[]
}
```

---

## Animation Strategy

### Principles
- Subtle, not distracting
- Progressive disclosure (content reveals on scroll)
- Performance-first (60fps on all devices)

### Implementation ([lib/utils.ts](lib/utils.ts))

**fadeInUp**: Most common, gentle upward reveal
**fadeIn**: Simple opacity transition
**scaleIn**: For cards and interactive elements
**staggerContainer**: Parent wrapper for sequential animations

All animations use:
- 0.6s duration (feels responsive, not rushed)
- Custom easing: `[0.22, 1, 0.36, 1]` (smooth acceleration/deceleration)

---

## Responsive Design

### Breakpoints (Tailwind defaults)
- **Mobile**: < 768px (base styles)
- **Tablet**: 768px - 1024px (`md:` prefix)
- **Desktop**: > 1024px (`lg:` prefix)

### Mobile-First Approach
- Base styles optimized for mobile
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Readable typography at all sizes

---

## Performance Optimizations

1. **Server Components**: Default in Next.js 14 App Router
2. **Client Components**: Only where needed (`"use client"` directive)
3. **Code Splitting**: Automatic per-route
4. **Image Optimization**: Next.js Image component ready
5. **Font Optimization**: Automatic with next/font

### Lighthouse Targets
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Color System

### Accent Colors
```css
Blue:    #3B82F6  (Primary, tech-focused)
Purple:  #8B5CF6  (Secondary, creative)
Emerald: #10B981  (Success, positive metrics)
```

### Neutral Palette
Full grayscale from 50-950 for flexible UI components.

### Dark Mode
Automatic based on user preference via `prefers-color-scheme`.

---

## File Structure

```
.
├── app/
│   ├── globals.css           # Tailwind imports + custom styles
│   ├── layout.tsx            # Root layout (metadata, fonts)
│   └── page.tsx              # Main page (sections composition)
│
├── components/
│   ├── HeroSection.tsx       # Landing section
│   ├── ResearchPillars.tsx   # Research domains
│   ├── ImpactDashboard.tsx   # Metrics grid
│   └── PublicationsSection.tsx # Academic publications
│
├── lib/
│   ├── data.ts               # ⭐ All content data
│   ├── types.ts              # TypeScript definitions
│   └── utils.ts              # Utilities + animations
│
├── public/                   # Static assets (images, PDFs)
│
├── tailwind.config.ts        # Design system config
├── tsconfig.json             # TypeScript config
├── next.config.js            # Next.js config
├── package.json              # Dependencies
│
├── README.md                 # Full documentation
├── QUICK_START.md            # 5-minute setup guide
└── PROJECT_OVERVIEW.md       # This file
```

---

## Next Steps

### 1. Content Customization (30 minutes)
- Replace sample data in [lib/data.ts](lib/data.ts)
- Update personal info in components
- Add social media links

### 2. Visual Customization (15 minutes)
- Adjust colors in [tailwind.config.ts](tailwind.config.ts)
- Replace Inter font if desired
- Add custom favicon

### 3. Assets (Optional)
- Add project images to `/public`
- Add resume PDF
- Add favicon and OG images

### 4. Deploy (5 minutes)
- Push to GitHub
- Deploy on Vercel (zero config)
- Add custom domain

---

## Maintenance

### Adding New Projects
1. Open [lib/data.ts](lib/data.ts)
2. Add to the appropriate research pillar's `projects` array
3. Changes reflect immediately

### Adding Publications
1. Open [lib/data.ts](lib/data.ts)
2. Add to `publications` array
3. Automatic sorting and filtering

### Updating Metrics
1. Open [lib/data.ts](lib/data.ts)
2. Update `impactMetrics` array
3. Adjust `size` property for visual hierarchy

---

## Design Decisions Explained

### Why Split Layout for Research?
Emphasizes dual expertise without hierarchy. Both domains get equal visual weight.

### Why Bento Grid for Metrics?
Variable sizes create visual interest and hierarchy. More important metrics get larger cards.

### Why Sortable Publications?
Academics often search by type or recency. Filtering improves UX for different audiences.

### Why Project-Centric?
Moves beyond traditional resume format. Shows actual work and impact, not just job titles.

### Why Framer Motion?
Best-in-class React animation library. Declarative API, excellent performance, tree-shakeable.

---

## Browser Compatibility

✅ Chrome/Edge (Chromium)
✅ Firefox
✅ Safari
✅ Mobile browsers

Requires JavaScript enabled for animations. Degrades gracefully without it.

---

## License

Free to use for personal and commercial projects. Attribution appreciated but not required.

---

**Built for researchers who want their work to speak louder than their resume.**
