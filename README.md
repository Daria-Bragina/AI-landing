# 🤖 AI Landing

A responsive landing page for an AI product, built from a Figma design. Written in HTML and SCSS with a Gulp build pipeline — no UI frameworks used.

**[Live Demo →](https://ai-site-project.netlify.app/)**

---

## Screenshots

<img width="1574" height="1289" alt="2026 07 03 15-58-24" src="https://github.com/user-attachments/assets/4c1bd201-b664-4211-a9e5-3cd717e82385" />


---

## Features

- 🎨 **Pixel-perfect layout** — implemented from a Figma mockup
- ✨ **Scroll animations** — powered by Animate.css
- 📐 **SCSS architecture** — styles split into partials (variables, mixins, sections)
- ⚙️ **Gulp build pipeline** — SASS compilation, autoprefixing, CSS minification, live reload
- 📱 **Responsive design** — mobile-first, custom breakpoints

---

## Tech Stack

| Category | Technology |
|---|---|
| Markup | HTML5 |
| Styles | SCSS → compiled CSS |
| Animations | Animate.css |
| Build tool | Gulp 5 |
| SCSS processing | gulp-sass, sass |
| CSS optimization | gulp-autoprefixer, gulp-clean-css |
| Dev server | browser-sync |
| Deployment | Netlify |

---

## Project Structure

```
AI-landing/
├── src/
│   ├── styles
│   │   ├── adaptive.min.css          # Minified styles for desktop, tablets and mobiles
│   │   └── style.min.css             # Main minified styles
│   ├── index.html                    # Page markup
│   ├── sass/                         # SCSS source files
│   │   ├── style.scss                # Main entry point
│   │   ├── _adaptive.scss            # Styles for desktop, tablets and mobiles
│   │   ├── _mixins.scss              # Reusable SCSS mixins
│   │   ├── base/
│   │   │   └── _variables.scss       # Main colors
│   │   └──blocks/
│   │   │   ├── _advantages.scss      # Styles for advantages section
│   │   │   ├── _header.scss          # Styles for header
│   │   │   ├── _modal.scss           # Styles for modal windows
│   │   │   └── _promo.scss           # Styles for promo section
│   ├── scripts/
│   │   └── script.js                 # JavaScript files
│   └── images/                       # Assets and images
├── gulpfile.js                       # Gulp tasks: sass, autoprefixer, minify, watch
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/Daria-Bragina/AI-landing.git
cd AI-landing
npm install
```

### Development

Starts a local server with live reload on file changes:

```bash
npx gulp
```

### Production build

Compiles and minifies SCSS to production-ready CSS:

```bash
npx gulp build
```

The output is placed in `dist/`.

---

## Commit History

This project was developed incrementally — the commit history reflects the build process step by step:

1. Project setup: Gulp config, folder structure, SASS pipeline
2. Base styles: variables, reset, typography
3. Header and hero section
4. Content sections
5. Responsive layout and breakpoints
6. Animations and final polish

---

## Author

**Daria Bragina** — Frontend Developer  
[GitHub](https://github.com/Daria-Bragina)
