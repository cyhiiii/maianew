# maianewHigh-level overview

Brand: Aman-style luxury travel site. Very large whitespace, restrained neutral palette (warm beige background), elegant high-contrast serif headings, narrow centered header with left menu and centered logo, right-side language + prominent “Reserve” button.

Visual logic: minimal UI chrome, large imagery with editorial crop, subtle typography hierarchy (uppercase microcopy → large serif headings → serif body copy). Lots of breathing room — design uses wide gutters and large vertical rhythm.

Layout flow (top→bottom): fixed header → large hero image (full-bleed within centered content container) → editorial grid (left image / right image columns, large gutters) → multi-card grid for seasonal experiences → footer with sign-up CTA and link columns.

1) Color palette (sampled from screenshots)

I sampled pixels from the provided screenshots; colours below use sampled RGB → HEX and contrast where important.

Background warm beige (page background): #F3EEE7 (rgb 243,238,231). Contrast vs dark text ~ 13.8:1 (excellent).

Primary text (deep charcoal / warm black): #2D1F10 (rgb 45,31,16). Use for headings, primary copy.

Secondary text (muted warm brown): #59503D (rgb 89,78,61). Use for body hints, captions.

Accent/gilded warm tone (link underlines, accents): #C9A376 (rgb 201,163,118).

Dark UI (Reserve button background): #2B2A29 (approx — use #2D1F10 or slightly lighter #3A362F for button). (sampled darker pixels vary; use #2D1F10).

Muted cool gray (minor borders/lines): #969DAD (rgb 150,157,173) — used rarely (thin rules).

Light paper/overlay (cards, image border highlights): near #FFFFFF but generally images sit on background #F3EEE7.

Accessibility: #2D1F10 on #F3EEE7 gives ~13.8 contrast; #59503D on #F3EEE7 gives ~7.0 — both exceed WCAG AA for normal text.

2) Typography (inferred + pragmatic substitutes)

The exact brand font is a luxury custom serif. Use the following recommended stack so Copilot/engineers can replicate behavior if the exact license font is not available.

Headings (H1, H2):

Font-family: "Playfair Display", "Tiempos", "Georgia", serif — best visual match: high-contrast modern serif / display serif.

H1 (hero / page title): font-size: 3.25rem (≈52px on 16px root), font-weight: 700 or 800, line-height: 1.08, letter-spacing: -0.01em.

H2 (section headings): font-size: 2rem (≈32px), font-weight: 700, line-height: 1.2.

Microcopy / category labels:

Font-family: same serif but small-caps or uppercase with wide tracking.

font-size: 0.75rem (12px), font-weight: 600, text-transform: uppercase, letter-spacing: 0.22em, color: #59503D.

Body copy / paragraphs:

Font-family: "Tiempos Text", "Georgia", serif or fallback serif for readability.

font-size: 1rem (16px), line-height: 1.6, font-weight: 400, color: #59503D (or #2D1F10 for higher emphasis).

UI (nav / buttons):

Font-family: "Helvetica Neue", "Arial", sans-serif for small UI controls (logo type is custom, language and menu use sans distinct).

Buttons: uppercase small caps, font-size: 0.9rem, letter-spacing: 0.08em.

Notes: if you have access to Aman’s brand fonts, swap Playfair Display / Tiempos for their actual display/typeface. Provide both serif for editorial and sans for small UI.

3) Layout & grid system (developer-friendly)

Page container: centered. max-width: 1300px (or 1440px depending on breakpoint), horizontal padding calc(6vw) on wide screens; on very wide screens cap at max-width.

Grid: 12-column grid for complex areas; editorial image + sidebar blocks use a 3:2 split or explicit columns:

Example: hero image contained within .container with left/right gutter = 120px on desktop.

Seasonal cards grid: a 3-column grid: grid-template-columns: repeat(3, 1fr) with grid-gap: 48px.

Two-column editorial section: grid-template-columns: 2fr 1fr (image-left large, image-right narrow) with column-gap: 56–80px.

Vertical rhythm:

base spacing --space-1: 8px, --space-2: 16px, --space-3: 24px, --space-4: 32px, --space-5: 48px, --space-6: 80px.

Large top/bottom sections use --space-6 or --space-7 (~120px).

Image constraints:

Editorial images use width: 100% of their grid cell, height: auto, object-fit: cover for crop control. For hero, prefer aspect-ratio: 16/7 (or use min-height: 420px) to replicate tall editorial crop.

Footer: full-width band, content inside centered .container, multi-column link groups with generous vertical spacing and a subtle top border rule 1px solid rgba(0,0,0,0.06).

4) Header & navigation details

Structure:

Left area: hamburger icon (stacked 3 lines) + word “Menu” (left aligned).

Center: stacked, centered logotype (custom). Logo sits vertically centered in header bar.

Right: language selector text/link + thin underline + primary CTA “Reserve” (solid dark button).

Spacing: header height 72px–96px depending on breakpoint. Logo sits in center with 48px left/right gap to other actions.

Behaviour:

Sticky/fixed header with transparent background over hero on load? In screenshots header sits on same warm background (so implement position: sticky; top: 0; background: rgba(243,238,231,0.98); backdrop-filter: blur(2px);).

Hamburger toggles full-screen nav drawer on mobile. Desktop menu remains collapsed into hamburger + menu button (Aman style often uses minimal top nav).

Hover / states:

Menu text: subtle darkening on hover; language underline is a single 1px rule under the text (active).

Reserve button: dark background (#2D1F10), white text, small drop shadow box-shadow: 0 6px 18px rgba(0,0,0,0.15) (very subtle).

5) Hero section specifics

Large centered image with generous white (beige) gutters.

No visible hero headline on first screenshot; later pages show hero heading on left column with “Chasing Sunlight” big serif H1.

Hero rules:

Container: max-width as above, internal left padding --space-5.

Hero image: display:block; width:100%; height:auto; object-fit:cover; border-radius: 0 (sharp edges).

Text overlay area (for pages with title): left aligned within container, max-width: 520px, vertical offset from top of image ~ 48px.

CTA / micro link:

Small link under H1: Discover more with underline: border-bottom: 1px solid #2D1F10; padding-bottom: 6px; display:inline-block;.

6) Cards, Image gallery & microcopy

Card pattern: image (square or wide) → category microcopy (small caps) → title (H3 serif) → excerpt paragraph → link (“Discover more” / “Shop now”) with thin underline.

Card typography:

Category: font-size: 0.75rem, text-transform: uppercase, letter-spacing: 0.18em, color: #969DAD or #59503D.

Title: font-size: 1.25rem (20px–22px), font-weight: 600–700.

Excerpt: font-size: 0.95rem, line-height: 1.6.

Link underline: 1px horizontal rule aligned with baseline and padding-bottom: 8px.

Spacing: image-to-text gap 16px–24px.

7) Buttons and interaction styles

Primary Button (.btn--primary / Reserve):

background-color: #2D1F10; color: #F3EEE7; padding: 12px 26px; border: none; border-radius: 2px (or 4px); font-weight: 600; text-transform: none or uppercase small; box-shadow: none or subtle;

Hover: transform: translateY(-1px); box-shadow: 0 6px 18px rgba(45,31,16,0.15);

Text Links:

Underline via border-bottom: 1px solid currentColor; padding-bottom: 6px; with hover color shift to #2D1F10.

Micro interactions:

Categories use letter-spacing and small caps; a hovered category darkens to primary text color.

8) Images & icons

Image style: warm color grading, editorial filmic tone (apply mild filter: sepia(0.08) saturate(0.85) contrast(0.95) if you want to approximate).

Iconography: simple thin line icons (menu, search). Stroke width ~1.25px, color #59503D.

Image borders: none. All images flush; if required, set box-shadow: 0 4px 24px rgba(0,0,0,0.06) very subtly.

9) Footer & signup strip

Signup strip: two-column layout — title “Get inspired” left and signup CTA button right. Use padding: 48px 0.

Footer columns: multi-column link lists (grid-template-columns: repeat(4, 1fr)) with heading in serif and link list in serif body copy.

Visual separator: thin horizontal rule (1px) with low contrast rgba(0,0,0,0.06).

10) Responsive behavior (explicit)

Breakpoints:

>= 1280px Desktop: 12-column grid, max container width 1300–1440px, three-column card grid.

768px - 1279px Tablet: reduce gutters to 32–40px, grid becomes 2 columns for cards: grid-template-columns: repeat(2, 1fr).

< 768px Mobile: single column flow, header left hamburger toggles full-screen nav, logo centered above; hero image becomes full width, card grid stacks vertically, footer columns collapse into vertical list.

Nav: hamburger controls slide-in overlay from left on mobile, with full-screen links, large touch targets (>=44px).

Typography scaling: use responsive clamps on headings:

h1 { font-size: clamp(2.25rem, 4.5vw, 3.25rem); } so it scales smoothly.

11) Accessibility & performance notes

Ensure alt attributes for all editorial images.

Use srcset and sizes for responsive image delivery: srcset="image-480.jpg 480w, image-768.jpg 768w, image-1200.jpg 1200w" and sizes="(max-width: 768px) 100vw, 50vw".

Keep focus states visible for keyboard nav: outline: 3px solid rgba(201,163,118,0.25) or an inset border for links.

Use semantic HTML: <header>, <nav>, <main>, <article>, <figure>, <figcaption>, <footer>.

12) CSS tokens & starter variables (copy to SCSS / CSS :root)

:root{
  --bg: #F3EEE7;
  --text: #2D1F10;
  --muted: #59503D;
  --accent: #C9A376;
  --rule: rgba(0,0,0,0.06);
  --container-max: 1300px;
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 80px;
  --font-display: "Playfair Display", "Tiempos", Georgia, serif;
  --font-ui: "Helvetica Neue", Arial, sans-serif;
}

14) Quick CSS example snippet (starter)
body { background: var(--bg); color: var(--muted); font-family: var(--font-display); margin:0; }
.container { max-width: var(--container-max); margin: 0 auto; padding: 0 calc(6vw); }
.site-header { position: sticky; top:0; display:flex; align-items:center; justify-content:space-between; height:88px; background: rgba(243,238,231,0.98); z-index:40; }
.hero .hero-img { width:100%; height:420px; object-fit:cover; display:block; }
.card .category { font-size:0.75rem; text-transform:uppercase; letter-spacing:0.18em; color:var(--muted); }
.card h3 { font-family:var(--font-display); font-size:1.25rem; color:var(--text); }
.btn-primary { background:var(--text); color:var(--bg); padding:12px 26px; border-radius:3px; }

Summary (design system logic)

This design uses a restrained, editorial system: a warm paper background, editorial photo-first content, and a typographic hierarchy that relies on an elegant display serif for brand voice and a neutral sans for UI. The grid is wide, with large gutters to emphasize photography and whitespace. Interaction cues are subtle: thin underlines on links and minimal shadows on CTA. Visual consistency is enforced through a small set of color tokens (--bg, --text, --muted, --accent), a limited type scale (display serif for headlines; serif for body; sans for UI), and a strict grid that collapses to single-column on mobile. The aesthetic principle is "quiet luxury" — minimal chrome, maximum image presence, generous breathing space.

