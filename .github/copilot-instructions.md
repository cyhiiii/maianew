# Copilot Instructions for Maianew

## Project Overview
This is an **Aman-style luxury travel website** with a complete design system specification and React+SCSS front-end implementation. The README.md contains the design system—treat it as the single source of truth for all visual and UX decisions.

## Project Structure
- `README.md`: Complete design system specification (14 sections)
- `src/`: React components implementing the design system
- `src/styles/`: SCSS variables and global styles from the spec
- `FRONTEND_README.md`: Complete implementation documentation
- `QUICKSTART.md`: Quick start guide for developers

## Core Design Philosophy
**"Quiet luxury"**: Minimal UI chrome, maximum image presence, generous whitespace. Think restrained neutral palette, elegant high-contrast serif typography, and editorial photo-first layouts.

## Key Design Tokens (from README.md)
When implementing any UI, reference these CSS variables defined in section 12:
- Background: `--bg: #F3EEE7` (warm beige)
- Text: `--text: #2D1F10` (deep charcoal), `--muted: #59503D` (warm brown)
- Accent: `--accent: #C9A376` (gilded warm tone)
- Typography: Display serif (`Playfair Display`/`Tiempos`), UI sans (`Helvetica Neue`)
- Spacing: 8-point grid (`--space-1` through `--space-6`)

## Implementation Patterns

### Typography Hierarchy (Section 2)
- **H1 hero**: `3.25rem`, `font-weight: 700-800`, `line-height: 1.08`, `letter-spacing: -0.01em`
- **Microcopy/labels**: `0.75rem`, `text-transform: uppercase`, `letter-spacing: 0.22em`
- **Body**: `1rem`, `line-height: 1.6`, use serif for editorial content
- Always use responsive clamps: `font-size: clamp(2.25rem, 4.5vw, 3.25rem)`

### Layout Grid (Section 3)
- Container: `max-width: 1300px`, centered with `calc(6vw)` horizontal padding
- Editorial sections: `grid-template-columns: 2fr 1fr` (image-left dominant)
- Card grids: 3 columns desktop → 2 columns tablet → 1 column mobile
- Vertical rhythm: Large sections use `--space-6` (80px) or `--space-7` (120px)

### Header Pattern (Section 4)
Fixed structure: **Left** (hamburger + "Menu") → **Center** (logo) → **Right** (language + "Reserve" button)
- Height: `72-96px`, sticky with `backdrop-filter: blur(2px)`
- Reserve button: dark background `#2D1F10`, white text, subtle shadow

### Card Component (Section 6)
Standard pattern: image → category microcopy → H3 title → excerpt → "Discover more" link
- Category uses small caps with `0.18em` letter-spacing
- Link underline: `border-bottom: 1px solid currentColor; padding-bottom: 6px`

### Images (Section 8)
- Editorial crop: `aspect-ratio: 16/7` for heroes, `object-fit: cover`
- Warm color grading: Apply `filter: sepia(0.08) saturate(0.85) contrast(0.95)` if needed
- Always use `srcset` and `sizes` for responsive delivery (Section 11)

### Responsive Breakpoints (Section 10)
- **Desktop**: `>= 1280px` (3-column grids)
- **Tablet**: `768-1279px` (2-column grids, reduce gutters to 32-40px)
- **Mobile**: `< 768px` (single column, hamburger nav, full-width images)

## Critical Workflows

### Starting New Pages/Components
1. Review README.md sections 1-3 for color/typography/layout rules
2. Copy CSS tokens from section 12 into your stylesheet
3. Use semantic HTML5 elements (`<header>`, `<article>`, `<figure>`)
4. Apply accessibility patterns from section 11 (alt text, focus states, keyboard nav)

### Styling Components
- **Never** deviate from the design tokens without reason
- Use the example snippet in section 14 as a starting template
- Maintain 13.8:1 contrast ratio (`#2D1F10` on `#F3EEE7`) for WCAG AA compliance
- Keep hover effects subtle: slight darkening or `translateY(-1px)` with shadow

### Testing & Validation
- Verify responsive behavior at all three breakpoints
- Check focus states are visible: `outline: 3px solid rgba(201,163,118,0.25)`
- Ensure images use `width: 100%` with `height: auto` for proper scaling

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: SCSS with design system variables
- **Components**: Modular, reusable components following the spec
- **Responsive**: Mobile-first with 3 breakpoints (mobile/tablet/desktop)

## Development Workflows

### Starting Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build
```

### Adding New Components
1. Create component folder in `src/components/ComponentName/`
2. Add `ComponentName.jsx` and `ComponentName.scss`
3. Import variables: `@import '../../styles/variables.scss';`
4. Follow semantic HTML patterns from existing components
5. Test responsive behavior at all breakpoints

### Working with Images
- All components support `srcset` and `sizes` for responsive delivery
- Hero images: 16:7 aspect ratio (~1600x700px)
- Editorial images: 4:5 aspect ratio (~800x1000px)
- Card images: 4:3 aspect ratio (~600x400px)
- Use WebP format with JPEG fallback for optimal performance

## File Structure
- `README.md`: Design system specification (14 sections - SOURCE OF TRUTH)
- `FRONTEND_README.md`: Complete implementation docs
- `QUICKSTART.md`: Developer quick start guide
- `src/components/`: React components (Header, Hero, EditorialGrid, Card, Footer)
- `src/styles/`: SCSS variables and global styles
- `Images/`: Reference screenshots showing the intended aesthetic
- `.github/copilot-instructions.md`: This file

## Common Pitfalls
- **Don't** use generic button/card styles—follow the specific patterns in sections 6-7
- **Don't** add tight margins—this design breathes with large `--space-5` and `--space-6` gaps
- **Don't** use bright colors or high saturation—palette is intentionally muted
- **Don't** forget hover states—all interactive elements need subtle feedback (section 7)

## When in Doubt
Refer to README.md sections by number. The design system is exhaustively documented there with exact pixel values, color codes, and code examples.
