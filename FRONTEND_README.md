# Aman-Style Luxury Travel Website

A React + SCSS front-end scaffold implementing the Aman editorial design system with "quiet luxury" aesthetics. Features minimal UI chrome, editorial photo-first layouts, and generous whitespace.

## 🎨 Design System

This project implements the complete design specification from the main README, including:

- **Color Palette**: Warm beige background (#F3EEE7), deep charcoal text (#2D1F10), gilded accents (#C9A376)
- **Typography**: Playfair Display serif for headings, elegant hierarchy with responsive clamps
- **Layout**: 12-column grid, generous 8-point spacing system, centered max-width containers
- **Components**: Header, Hero, Editorial Grid, Cards Grid, Footer with proper semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header/          # Sticky header with hamburger nav
│   │   ├── Hero/            # Large hero with 16:7 aspect ratio
│   │   ├── EditorialGrid/   # 2fr/1fr editorial layout
│   │   ├── Card/            # Individual card component
│   │   ├── CardsGrid/       # 3-column responsive card grid
│   │   └── Footer/          # Signup strip + link columns
│   ├── styles/
│   │   ├── variables.scss   # Design tokens from spec
│   │   └── global.scss      # Base styles and typography
│   ├── App.jsx              # Main app with sample data
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── package.json
└── vite.config.js
```

## 🎯 Components

### Header
- **Structure**: Hamburger + Menu (left) | Logo (center) | Language + Reserve button (right)
- **Behavior**: Sticky positioning, translucent background, full-screen overlay nav on mobile
- **Usage**:
```jsx
import Header from './components/Header/Header';
<Header />
```

### Hero
- **Features**: 16:7 aspect ratio, object-fit cover, optional title overlay
- **Props**: `imageSrc`, `imageSrcSet`, `imageAlt`, `title`, `subtitle`, `linkText`, `linkHref`
- **Usage**:
```jsx
<Hero 
  imageSrc="hero.jpg"
  imageSrcSet="hero-800.jpg 800w, hero-1600.jpg 1600w"
  title="Chasing Sunlight"
  subtitle="EDITORIAL"
  linkText="Discover more"
/>
```

### EditorialGrid
- **Layout**: 2fr/1fr grid with 80px gap (desktop) → single column (mobile)
- **Props**: `items` array with `imageSrc`, `category`, `title`, `description`, `link`
- **Usage**:
```jsx
<EditorialGrid items={[
  { imageSrc: 'img1.jpg', category: 'WELLNESS', title: 'Inner Peace', ... }
]} />
```

### CardsGrid
- **Layout**: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
- **Props**: `title`, `subtitle`, `cards` array
- **Card Props**: `imageSrc`, `imageSrcSet`, `category`, `title`, `excerpt`, `link`
- **Usage**:
```jsx
<CardsGrid 
  title="Seasonal Experiences"
  subtitle="CURATED JOURNEYS"
  cards={cardsData}
/>
```

### Footer
- **Sections**: Signup strip, 4-column link grid, copyright/legal
- **Features**: Email subscription form, responsive column collapse
- **Usage**:
```jsx
import Footer from './components/Footer/Footer';
<Footer />
```

## 🖼️ Working with Images

### Responsive Images with srcset
All image components support `srcset` and `sizes` for optimal delivery:

```jsx
<Hero 
  imageSrc="hero-1600.jpg"
  imageSrcSet="hero-480.jpg 480w, hero-768.jpg 768w, hero-1200.jpg 1200w, hero-1600.jpg 1600w"
  imageAlt="Mountain resort at sunrise"
/>
```

### Image Specifications
- **Hero**: 16:7 aspect ratio (~1600x700px)
- **Editorial**: 4:5 aspect ratio (~800x1000px)
- **Cards**: 4:3 aspect ratio (~600x400px)
- **Format**: Use WebP with JPEG fallback for best performance
- **Optimization**: Compress to 80-85% quality

### Placeholder Images
The scaffold uses Unsplash images as placeholders. Replace with your assets in `App.jsx` or create a separate data file.

## 🎨 Customizing Fonts

### Current Setup
- **Display Serif**: Playfair Display (Google Fonts)
- **UI Sans**: Helvetica Neue (system fallback)

### Using Brand Fonts (e.g., Tiempos)

1. **Add font files** to `public/fonts/`:
```
public/fonts/
├── Tiempos-Regular.woff2
├── Tiempos-SemiBold.woff2
└── Tiempos-Bold.woff2
```

2. **Update** `src/styles/global.scss`:
```scss
@font-face {
  font-family: 'Tiempos';
  src: url('/fonts/Tiempos-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

// Update variable
$font-display: "Tiempos", "Playfair Display", Georgia, serif;
```

3. **Remove** Google Fonts import from `global.scss` if no longer needed

## 🎯 Design Tokens

All design tokens are defined in `src/styles/variables.scss`:

```scss
// Colors
$bg: #F3EEE7;           // Warm beige background
$text: #2D1F10;         // Deep charcoal
$muted: #59503D;        // Warm brown
$accent: #C9A376;       // Gilded tone

// Spacing (8-point grid)
$space-1: 8px;
$space-2: 16px;
$space-3: 24px;
$space-4: 32px;
$space-5: 48px;
$space-6: 80px;
$space-7: 120px;

// Breakpoints
$breakpoint-mobile: 768px;
$breakpoint-tablet: 1280px;
```

## 📱 Responsive Behavior

### Breakpoints
- **Desktop**: ≥1280px (3-column cards, 2fr/1fr editorial)
- **Tablet**: 768-1279px (2-column cards, gutters reduce to 32-40px)
- **Mobile**: <768px (single column, hamburger nav, full-width images)

### Mobile Optimizations
- Header height reduces from 88px → 72px
- Language selector hidden on mobile
- Navigation becomes full-screen overlay
- All grids collapse to single column
- Typography scales using `clamp()`

## 🔧 Development Tips

### Adding New Pages
1. Create new components in `src/components/`
2. Import into `App.jsx` or create new route files
3. Follow semantic HTML (`<main>`, `<article>`, `<section>`)
4. Use existing design tokens from `variables.scss`

### Styling Best Practices
- Always import variables: `@import '../../styles/variables.scss';`
- Use SCSS nesting sparingly (max 3 levels)
- Maintain mobile-first approach with `@media (max-width: ...)`
- Keep contrast ratios accessible (WCAG AA: 4.5:1 minimum)

### Accessibility
- All images have alt text
- Focus states visible (`outline: 3px solid rgba(201,163,118,0.25)`)
- Semantic HTML structure
- Keyboard navigation supported
- ARIA labels on interactive elements

## 🚢 Production Deployment

```bash
# Build optimized production bundle
npm run build

# Output will be in dist/
# Deploy dist/ to your hosting service (Vercel, Netlify, etc.)
```

### Optimization Checklist
- ✅ Enable gzip/brotli compression
- ✅ Set proper cache headers for static assets
- ✅ Use CDN for images
- ✅ Enable HTTP/2
- ✅ Add service worker for offline support (optional)

## 📚 Design System Reference

For complete design specifications, refer to the main project README:
- Section 1: Color palette with contrast ratios
- Section 2: Typography hierarchy and scales
- Section 3: Layout grid system
- Sections 4-9: Component specifications
- Section 10: Responsive breakpoints
- Section 11: Accessibility guidelines
- Section 12: CSS tokens
- Section 14: Quick CSS examples

## 🐛 Troubleshooting

### Fonts not loading
- Check Google Fonts connection in `global.scss`
- Verify font file paths if using local fonts
- Clear browser cache

### Images not displaying
- Verify image URLs are accessible
- Check `srcset` syntax
- Ensure placeholder service (Unsplash) is not blocked

### Styles not applying
- Verify SCSS import order
- Check Vite config for SCSS preprocessing
- Restart dev server after config changes

### Build errors
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again
- Check Node.js version compatibility (16+)

## 📄 License

This is a design scaffold for educational/commercial use. Replace placeholder images and content with licensed assets before production deployment.

## 🤝 Contributing

This scaffold follows the Aman design specification. When adding features:
1. Reference the design system documentation
2. Maintain the "quiet luxury" aesthetic
3. Test responsive behavior at all breakpoints
4. Ensure accessibility standards are met

---

**Need help?** Check the main README.md for detailed design specifications or create an issue for technical questions.
