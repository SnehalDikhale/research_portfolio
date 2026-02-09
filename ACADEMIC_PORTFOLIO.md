# Academic Research Portfolio - Snehal S. Dikhale

## 🎓 Modern Academic Design Complete!

Your portfolio has been completely redesigned with a clean, professional academic aesthetic inspired by Hugo Academic and Al-Folio themes.

---

## ✅ New Structure

### 1. **Profile Header** - The Human Element
- **Left**: Rounded-square photo placeholder (ready for your image)
- **Right**:
  - Name and title
  - Direct links to GitHub, Google Scholar, LinkedIn, Email
  - Professional bio highlighting 5+ years experience, patents, and expertise

### 2. **Experience Timeline** - Career Progression
- Clean vertical timeline with indicators
- **Robotics Researcher II** (Current) - VLM focus
- **Robotics Researcher I** (2019-2023) - Tactile perception focus
- Concise bullet points for each role

### 3. **Research Areas** - Grid Layout
- **Card 1**: Multimodal Foundation Models
  - Action-Conditioned World Models
  - 7x latency reduction
  - Patented innovations

- **Card 2**: Tactile Perception & Sim-to-Real
  - 220k visuotactile dataset
  - HyperTaxel (3x resolution)
  - Graph Neural Networks

### 4. **Selected Publications** - Academic CV Style
- BibTeX-style formatting
- Badges: [ICRA], [IROS], [IEEE RAL], [Submitted]
- PDF and Code links for each paper
- 4 publications from 2022-2024

### 5. **Technical Skills** - Tag Cloud
- 18 key skills including:
  - Large Language Models (LLMs)
  - Vision-Language Models (VLMs)
  - Generative AI
  - Sim-to-Real Transfer
  - PyTorch, ROS, Unreal Engine

---

## 🎨 Design Features

### Color Scheme - Academic Neutrals
- **Primary Accent**: Indigo (#4F46E5) - for links and highlights
- **Secondary Accent**: Teal (#0891B2) - for timeline dots and bullets
- **Base**: Neutral grays (slate/zinc) with high contrast
- **No flashy animations** - simple, fast, accessible

### Typography
- **Font**: Inter (clean, modern, academic)
- **Weights**: Clear hierarchy with semibold/bold for headings
- **Spacing**: Ample whitespace for readability

### Layout
- **Max Width**: 5xl (1280px) - optimal for academic content
- **Responsive**: Mobile-first design
- **Accessibility**: High contrast, semantic HTML
- **Dark Mode**: Full support

---

## 📁 New Components

1. [ProfileHeader.tsx](components/ProfileHeader.tsx) - About section with photo + bio
2. [ExperienceTimeline.tsx](components/ExperienceTimeline.tsx) - Vertical timeline
3. [ResearchAreas.tsx](components/ResearchAreas.tsx) - Research cards grid
4. [Publications.tsx](components/Publications.tsx) - Academic publication list
5. [TechnicalSkills.tsx](components/TechnicalSkills.tsx) - Skills tag cloud

---

## 📊 Content Data

All content is in [lib/academicData.ts](lib/academicData.ts):

### Experience
- 2 positions at Honda Research Institute
- Detailed responsibilities for each role
- Clear distinction between VLM work (current) and tactile work (past)

### Research Areas
- Multimodal Foundation Models
- Tactile Perception & Sim-to-Real

### Publications
- DynastGNN (RA-L 2024, Submitted)
- HyperTaxel (IROS 2024)
- HGNN (ICRA 2023)
- Visuotactile (IEEE RAL 2022)

### Skills
- 18 technical skills from LLMs to CUDA

---

## 🚀 Live Now!

**Access your academic portfolio at:**
```
http://localhost:3002
```

---

## 📝 Next Steps

### 1. Add Your Profile Photo
- Save your photo as `/public/profile.jpg` (recommended: 400x400px)
- Update [ProfileHeader.tsx](components/ProfileHeader.tsx) line 12:
  ```tsx
  <Image
    src="/profile.jpg"
    alt="Snehal S. Dikhale"
    width={192}
    height={192}
    className="rounded-2xl"
  />
  ```

### 2. Update Social Links
Edit [ProfileHeader.tsx](components/ProfileHeader.tsx):
- GitHub (line 36): `href="https://github.com/YOUR_USERNAME"`
- Scholar (line 49): `href="https://scholar.google.com/citations?user=YOUR_ID"`
- LinkedIn (line 62): `href="https://linkedin.com/in/YOUR_PROFILE"`
- Email (line 75): `href="mailto:YOUR_EMAIL@honda.com"`

### 3. Add Publication Links
Edit [lib/academicData.ts](lib/academicData.ts):
- Replace `pdf: "#"` with actual PDF URLs
- Replace `code: "#"` with GitHub repository links

### 4. Customize Content
All text content in [lib/academicData.ts](lib/academicData.ts):
- Expand or modify responsibilities
- Add more publications
- Update research highlights
- Add/remove technical skills

---

## 🎯 Design Philosophy

### Why This Works for Academia:

1. **Content-First**: No distracting animations or marketing fluff
2. **Hierarchical**: Clear information architecture
3. **Scannable**: Easy to find publications, skills, experience
4. **Professional**: Neutral colors, clean typography
5. **Accessible**: High contrast, semantic HTML, responsive
6. **Fast**: Static generation, minimal JavaScript

### Inspired By:
- Hugo Academic theme
- Al-Folio
- Academic CV layouts
- Researcher personal pages

---

## 🔧 Technical Details

### Build Stats
```
Route size: 138 B
First Load JS: 87.4 kB
Status: Static (optimal)
```

### Performance
- ✅ Server-side rendering
- ✅ Static optimization
- ✅ Minimal JavaScript
- ✅ Fast page loads

### Color Palette
```css
Primary Accent:   #4F46E5 (Indigo)
Secondary Accent: #0891B2 (Teal)
Background:       #FFFFFF / #030712
Text:             #111827 / #F9FAFB
Border:           #E5E7EB / #374151
```

---

## 📚 Academic vs. Previous Design

| Feature | Previous (Product) | New (Academic) |
|---------|-------------------|----------------|
| Hero | Flashy, marketing | Clean profile header |
| Focus | Visual impact | Content & credentials |
| Animations | Heavy Framer Motion | Minimal, functional |
| Layout | Bento Grid dashboard | Timeline + List view |
| Colors | Blue/Purple gradient | Neutral + Indigo accent |
| Typography | Large, bold | Readable, hierarchical |
| Sections | 4 marketing sections | 5 academic sections |

---

## 🎓 Perfect For:

- Academic job applications
- Research lab websites
- Conference presentations
- Grant applications
- Professional networking
- Industry research positions

---

**Your academic research portfolio is now live at http://localhost:3002!**

Simple. Professional. Academic. 🎯
