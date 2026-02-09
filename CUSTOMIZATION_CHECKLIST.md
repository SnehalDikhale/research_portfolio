# Customization Checklist

Use this checklist to personalize your research portfolio. Complete each section to make it yours.

## ✅ Essential (Must Complete)

### 📝 Personal Information

- [ ] **Name & Title**
  - File: [components/HeroSection.tsx](components/HeroSection.tsx) line 18
  - File: [app/page.tsx](app/page.tsx) line 11
  - File: [app/layout.tsx](app/layout.tsx) line 16

- [ ] **Main Headline**
  - File: [components/HeroSection.tsx](components/HeroSection.tsx) lines 25-29
  - Make it compelling and specific to your research

- [ ] **Expertise Areas**
  - File: [components/HeroSection.tsx](components/HeroSection.tsx) lines 44-54
  - Replace "Tactile Perception", "VLM Reasoning", "Sim-to-Real"

- [ ] **Meta Description**
  - File: [app/layout.tsx](app/layout.tsx) line 14
  - Important for SEO and social sharing

### 🔬 Research Content

- [ ] **Research Pillars**
  - File: [lib/data.ts](lib/data.ts) lines 3-60
  - [ ] Update pillar 1 title, subtitle, description
  - [ ] Update pillar 2 title, subtitle, description
  - [ ] Replace projects (minimum 2 per pillar)
  - [ ] Update technologies and impact metrics

- [ ] **Impact Metrics**
  - File: [lib/data.ts](lib/data.ts) lines 62-100
  - [ ] Replace with your actual metrics
  - [ ] Ensure values are accurate and verifiable
  - [ ] Set appropriate sizes (large for most important)

- [ ] **Publications**
  - File: [lib/data.ts](lib/data.ts) lines 102-160
  - [ ] Add all your publications
  - [ ] Include correct author order
  - [ ] Add PDF/code links where available
  - [ ] Verify years and venues

### 🔗 Social Links

- [ ] **GitHub**
  - File: [app/page.tsx](app/page.tsx) line 19
  - Replace `https://github.com` with your profile

- [ ] **LinkedIn**
  - File: [app/page.tsx](app/page.tsx) line 30
  - Replace `https://linkedin.com` with your profile

- [ ] **Google Scholar**
  - File: [app/page.tsx](app/page.tsx) line 41
  - Replace `https://scholar.google.com` with your profile

---

## 🎨 Recommended (Should Complete)

### 🎨 Visual Customization

- [ ] **Color Scheme**
  - File: [tailwind.config.ts](tailwind.config.ts) lines 16-20
  - Adjust accent colors to match your brand
  - Test in both light and dark mode

- [ ] **Font Selection**
  - File: [app/layout.tsx](app/layout.tsx) line 4
  - Default: Inter (excellent choice)
  - Consider: Geist, Public Sans, Work Sans

### 📸 Assets

- [ ] **Favicon**
  - Create `app/favicon.ico`
  - 32x32 or 64x64 pixels
  - Should represent your brand

- [ ] **Resume PDF**
  - Add to `/public/resume.pdf`
  - Link from footer or hero section

- [ ] **Project Images** (Optional)
  - Add to `/public/projects/`
  - Reference in project data
  - Optimize for web (< 500KB each)

### 🔧 Technical Setup

- [ ] **Install Dependencies**
  ```bash
  npm install
  ```

- [ ] **Test Development Build**
  ```bash
  npm run dev
  ```
  Visit http://localhost:3000

- [ ] **Test Production Build**
  ```bash
  npm run build
  npm run start
  ```

---

## 🚀 Optional (Nice to Have)

### 📊 Analytics

- [ ] **Add Google Analytics**
  - Get tracking ID from Google Analytics
  - Add to [app/layout.tsx](app/layout.tsx)
  - Use next/script for optimal loading

- [ ] **Add Plausible/Umami** (Privacy-friendly alternative)
  - More ethical than Google Analytics
  - Easier setup

### 🎯 SEO Enhancement

- [ ] **Open Graph Image**
  - Create 1200x630px image
  - Add as `app/opengraph-image.png`
  - Shows when sharing on social media

- [ ] **Twitter Card**
  - Add Twitter metadata in [app/layout.tsx](app/layout.tsx)
  - Use `twitter:card`, `twitter:image`

- [ ] **Structured Data**
  - Add JSON-LD for Person schema
  - Helps Google understand your page

### 🌐 Deployment

- [ ] **Push to GitHub**
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin <your-repo>
  git push -u origin main
  ```

- [ ] **Deploy to Vercel**
  - Go to vercel.com
  - Import your GitHub repository
  - Deploy (zero configuration needed)
  - Free for personal projects

- [ ] **Custom Domain** (Optional)
  - Buy domain (Namecheap, Google Domains)
  - Add to Vercel settings
  - Update DNS records

### ✨ Additional Features

- [ ] **Blog Section** (If you write)
  - Use Next.js MDX support
  - Add `/app/blog` directory
  - Create individual post pages

- [ ] **Awards Section** (If applicable)
  - Create new component
  - Follow existing patterns
  - Add to main page

- [ ] **Teaching Section** (If applicable)
  - List courses taught
  - Student testimonials
  - Lecture materials

- [ ] **Contact Form** (Optional)
  - Use Formspree or similar
  - Or just link to email

---

## 📋 Quality Checklist

Before launching, verify:

### Content
- [ ] No placeholder text remains
- [ ] All links work (publications, social media)
- [ ] Author names spelled correctly
- [ ] Dates and metrics are accurate
- [ ] No typos in headlines

### Design
- [ ] Looks good on mobile (test in DevTools)
- [ ] Looks good on tablet
- [ ] Looks good on desktop
- [ ] Dark mode works properly
- [ ] All animations feel smooth

### Performance
- [ ] Page loads quickly (< 3 seconds)
- [ ] Images optimized (< 500KB each)
- [ ] No console errors
- [ ] Fonts load properly

### Accessibility
- [ ] Can navigate with keyboard
- [ ] Links have clear text
- [ ] Color contrast is sufficient
- [ ] Screen reader friendly

---

## 🛠️ Common Customizations

### Change Research Pillars from 2 to 3

1. Update grid in [components/ResearchPillars.tsx](components/ResearchPillars.tsx)
   ```tsx
   className="grid lg:grid-cols-3 gap-8"  // Change from lg:grid-cols-2
   ```

2. Add third pillar to [lib/data.ts](lib/data.ts)

### Add More Impact Metrics

Simply add more objects to `impactMetrics` array in [lib/data.ts](lib/data.ts). The Bento Grid auto-adjusts.

### Change Animation Speed

Edit [lib/utils.ts](lib/utils.ts):
```typescript
transition: { duration: 0.4 }  // Faster (was 0.6)
```

### Remove Dark Mode

In [app/globals.css](app/globals.css), remove the `@media (prefers-color-scheme: dark)` block.

---

## 🎓 Pro Tips

1. **Use Real Data**: Placeholder content is obvious. Use your actual research.
2. **Be Specific**: "7x latency reduction" beats "improved performance"
3. **Show Impact**: Metrics matter more than methods
4. **Keep It Updated**: Add new publications regularly
5. **Mobile First**: Most visitors will be on mobile
6. **Fast Loading**: Every second counts for first impressions
7. **Proofread**: Typos hurt credibility

---

## ✅ Done? Next Steps

Once you've completed the essential items:

1. **Get Feedback**: Share with colleagues
2. **A/B Test**: Try different headlines
3. **Iterate**: Update based on analytics
4. **Share**: Add to email signature, LinkedIn, Twitter bio

---

## 🆘 Need Help?

- **Technical Issues**: Check [README.md](README.md)
- **Design Questions**: See [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)
- **Quick Start**: See [QUICK_START.md](QUICK_START.md)

---

**Remember**: This is YOUR portfolio. Customize it to reflect your unique research and personality.
