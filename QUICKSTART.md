# 🚀 Quick Start Guide

## Prerequisites
- Node.js 16+ installed
- npm package manager

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to `http://localhost:5173`

## What You'll See

A fully-functional Aman-style luxury travel website with:
- ✅ Sticky header with hamburger navigation
- ✅ Full-bleed hero image (16:7 aspect ratio)
- ✅ Editorial grid layout (2fr/1fr)
- ✅ Responsive card grid (3 → 2 → 1 columns)
- ✅ Footer with signup form and link columns
- ✅ Responsive at all breakpoints (desktop/tablet/mobile)

## Sample Data

The app includes placeholder images from Unsplash. To use your own:

1. Open `src/App.jsx`
2. Replace image URLs in `heroData`, `editorialItems`, and `seasonalCards`
3. Add your images to `public/` folder or use external URLs

## Next Steps

- **Customize Content**: Edit sample data in `App.jsx`
- **Add Pages**: Create new components in `src/components/`
- **Update Fonts**: Follow instructions in `FRONTEND_README.md`
- **Deploy**: Run `npm run build` and deploy `dist/` folder

## Component Library

All components are ready to use:

```jsx
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import EditorialGrid from './components/EditorialGrid/EditorialGrid';
import CardsGrid from './components/CardsGrid/CardsGrid';
import Footer from './components/Footer/Footer';
```

## Design System

All design tokens are in `src/styles/variables.scss`:
- Colors: `$bg`, `$text`, `$muted`, `$accent`
- Spacing: `$space-1` through `$space-7` (8px - 120px)
- Breakpoints: `$breakpoint-mobile`, `$breakpoint-tablet`

## Need Help?

- 📖 Full documentation: `FRONTEND_README.md`
- 🎨 Design system: Main `README.md`
- 🐛 Issues: Check troubleshooting section in `FRONTEND_README.md`
