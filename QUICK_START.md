# Quick Start Guide

Get your research portfolio running in 5 minutes.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Customize Your Content

Open [lib/data.ts](lib/data.ts) and replace the sample data with your actual research:

### Update Research Pillars (Lines 3-60)
- Replace "Tactile Perception" and "VLM Reasoning" with your research domains
- Update project titles, descriptions, and technologies
- Add your actual impact metrics

### Update Impact Metrics (Lines 62-100)
- Replace sample metrics (100+ experiments, 7x latency, etc.)
- Use your actual research outcomes
- Adjust the size property for visual hierarchy

### Update Publications (Lines 102-160)
- Add your papers, patents, and preprints
- Include links to PDFs, code repositories
- Update author lists and venues

## Step 3: Update Personal Information

### [components/HeroSection.tsx](components/HeroSection.tsx)
- Line 18: Your title/role
- Line 25-29: Your main headline
- Line 35-39: Your expertise areas

### [app/page.tsx](app/page.tsx)
- Line 11: Your name in footer
- Lines 18-50: Update social media links (GitHub, LinkedIn, Google Scholar)

### [app/layout.tsx](app/layout.tsx)
- Line 13: Page title
- Line 14: Meta description
- Line 16: Your name

## Step 4: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Step 5: Customize Appearance (Optional)

### Colors
Edit [tailwind.config.ts](tailwind.config.ts) lines 16-22 to change accent colors.

### Font
Replace Inter font in [app/layout.tsx](app/layout.tsx) line 4 with your preferred Google Font.

### Animations
Adjust timing in [lib/utils.ts](lib/utils.ts) if you want faster/slower animations.

## Next Steps

1. **Add Images**: Place project images in `/public` folder and reference them
2. **Add Resume PDF**: Place your resume PDF in `/public` and link from footer
3. **Deploy**: Push to GitHub and deploy on Vercel (zero config needed)

## Common Customizations

### Change Color Scheme
The portfolio uses blue and purple as primary colors. To change:

1. Open [tailwind.config.ts](tailwind.config.ts)
2. Update the `accent` colors (lines 16-20)
3. Colors will automatically update throughout the site

### Add More Sections
To add a new section (e.g., "Awards" or "Teaching"):

1. Create a new component in `/components`
2. Import and add it to [app/page.tsx](app/page.tsx)
3. Follow the existing pattern with Framer Motion animations

### Adjust Mobile Layout
All components are responsive by default. To customize:
- Use Tailwind's responsive prefixes (`md:`, `lg:`)
- Test on mobile using browser DevTools

## Troubleshooting

**"Module not found" errors**
```bash
npm install
```

**Styles not applying**
Make sure [app/globals.css](app/globals.css) imports are present and restart dev server.

**Animations not working**
Ensure "use client" directive is at the top of component files using Framer Motion.

## Deploy to Production

### Vercel (Easiest)
```bash
# Push to GitHub, then:
# 1. Go to vercel.com
# 2. Import your repository
# 3. Click Deploy
```

### Build Locally
```bash
npm run build
npm run start
```

---

Need help? Check the full [README.md](README.md) for detailed documentation.
