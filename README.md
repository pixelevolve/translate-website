# Shopify AI Translator Landing Page

Marketing landing page for the Shopify AI Translator app by PixelEvolve AB.

**Live Site:** https://translate.pixel-evolve.com

## Tech Stack

- **Framework:** Astro 4.x
- **Styling:** Tailwind CSS 3.x
- **Deployment:** Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:4321 to view the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── layouts/
│   ├── BaseLayout.astro      # Main layout with SEO
│   └── LegalLayout.astro     # Legal pages layout
├── components/
│   ├── Header.astro          # Navigation header
│   ├── MobileMenu.astro      # Mobile navigation
│   ├── Logo.astro            # Logo component
│   ├── Hero.astro            # Hero section
│   ├── TrustBadge.astro      # Trust badge component
│   ├── Features.astro        # Features section
│   ├── FeatureCard.astro     # Feature card component
│   ├── HowItWorks.astro      # How it works section
│   ├── Pricing.astro         # Pricing section
│   ├── PricingCard.astro     # Pricing card component
│   ├── FAQ.astro             # FAQ section
│   ├── FAQItem.astro         # FAQ accordion item
│   ├── FinalCTA.astro        # Final call-to-action
│   └── Footer.astro          # Footer
├── pages/
│   ├── index.astro           # Homepage
│   ├── privacy.astro         # Privacy Policy
│   └── terms.astro           # Terms of Service
└── styles/
    └── global.css            # Global styles
```

## Deployment

### Cloudflare Pages

1. Push to GitHub
2. Connect repository to Cloudflare Pages
3. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Add custom domain: `translate.pixel-evolve.com`

## Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Main landing page |
| Privacy Policy | `/privacy` | Privacy policy |
| Terms of Service | `/terms` | Terms of service |

## License

Copyright 2025 PixelEvolve AB. All rights reserved.
