# Burrow and Butter

A fast, SEO-optimized food website built with Astro. Tested recipes, chef vs. home cook features, and restaurant reviews from two perspectives.

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static site generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Content:** Markdown/MDX with typed frontmatter
- **Search:** [Pagefind](https://pagefind.app) (client-side)
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com)
- **Newsletter:** [Kit (ConvertKit)](https://kit.com)

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org) 18+
- npm or pnpm
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (for deployment)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/burrow-and-butter.git
cd burrow-and-butter

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see the site.

### Build for Production

```bash
npm run build
```

The built site is in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Adding Content

All content lives in `src/content/`. Each content type has its own folder with typed frontmatter.

### Add a Recipe

1. Create a new file: `src/content/recipes/your-recipe-name.mdx`
2. Add your images to `src/assets/images/recipes/`
3. Use this template:

```mdx
---
title: "Your Recipe Title"
description: "A brief description for SEO and social sharing."
author: nick  # or xavier
heroImage: ../../assets/images/recipes/your-image.jpg
heroImageAlt: "Describe the image for accessibility"
prepTime: 15  # minutes
cookTime: 30  # minutes
servings: 4
servingsUnit: servings
ingredients:
  - group: "For the main dish"  # optional grouping
    item: "ingredient name"
    amount: "2"
    unit: "cups"
    notes: "optional notes"
  - item: "another ingredient"
    amount: "1"
    unit: "tbsp"
steps:
  - instruction: "First step of the recipe."
    tip: "Optional tip for this step"
  - instruction: "Second step."
notes: "Optional general notes about the recipe."
testingNotes: "What you tried and what failed - unique content!"
chefTip: "Professional technique tips."
category: "Dinner"  # Breakfast, Lunch, Dinner, Desserts, etc.
cuisine: "American"  # American, Italian, Mexican, etc.
difficulty: easy  # easy, medium, challenging
keywords:
  - keyword1
  - keyword2
publishedDate: 2024-11-01
draft: false
featured: false
---

Write your recipe story here. This content appears before the recipe card.

## Why This Recipe Works

Explain what makes this recipe special...
```

### Add a Restaurant Review

1. Create: `src/content/reviews/restaurant-name-city.mdx`
2. Add images to `src/assets/images/reviews/`
3. Template:

```mdx
---
restaurantName: "Restaurant Name"
city: "Chicago"
state: "IL"
address: "123 Main St, Chicago, IL 60601"
website: "https://example.com"
cuisine: "American"
priceRange: "$$"  # $, $$, $$$, $$$$
visitDate: 2024-10-15
reviewer: nick  # or xavier
rating: 4  # 1-5
dishesOrdered:
  - name: "Dish Name"
    description: "What it was"
    price: "$18"
    recommended: true
pros:
  - "What was great"
  - "Another positive"
cons:
  - "What could improve"
verdict: "Your overall take in 2-3 sentences."
heroImage: ../../assets/images/reviews/your-image.jpg
heroImageAlt: "Image description"
paid: true  # Did you pay for the meal?
comped: false  # Was any part free?
sponsored: false  # Was this a paid partnership?
description: "SEO description"
keywords:
  - chicago restaurant
  - cuisine type
publishedDate: 2024-10-20
draft: false
---

Your detailed review goes here...
```

### Add a Chef vs. Home Cook Feature

1. Create: `src/content/features/dish-name.mdx`
2. Template: See existing file in `src/content/features/`

### Add an Essay

1. Create: `src/content/essays/essay-title.mdx`
2. Template:

```mdx
---
title: "Essay Title"
description: "Brief description"
author: nick  # or xavier
heroImage: ../../assets/images/placeholder.svg
heroImageAlt: "Image description"
category: "Kitchen Philosophy"  # optional
keywords:
  - topic1
  - topic2
publishedDate: 2024-10-28
draft: false
featured: false
---

Your essay content here...
```

## Adding Photos

1. Place images in `src/assets/images/` (organized by type)
2. Reference them in frontmatter:
   ```yaml
   heroImage: ../../assets/images/recipes/your-image.jpg
   ```
3. Supported formats: JPG, PNG, WebP, AVIF, SVG
4. Astro automatically optimizes images at build time

### Photo Guidelines

- **Hero images:** 1200×800px minimum, 16:9 or 4:3 ratio
- **Pinterest pins:** 1000×1500px (2:3 ratio)
- **Author avatars:** 400×400px, square
- Use descriptive filenames: `crispy-smashed-potatoes.jpg` not `IMG_1234.jpg`

## Adding Video

Reference YouTube, TikTok, or Instagram videos in frontmatter:

```yaml
videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID"
videoType: youtube  # youtube, tiktok, or instagram
```

Videos are lazy-loaded for performance.

## Configuration

### Site Settings

Edit `src/data/site.config.ts`:

```typescript
export const siteConfig = {
  name: 'Burrow and Butter',
  url: 'https://burrowbutter.com',

  // Newsletter
  newsletter: {
    formUrl: 'https://app.kit.com/forms/YOUR_FORM_ID',
    // ...
  },

  // Analytics
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX',  // Leave empty to disable
  },

  // Feature toggles
  features: {
    ads: false,
    exitIntent: true,
    search: true,
  },
};
```

### Author Information

Update author details in the same file:

```typescript
export const authors = {
  nick: {
    name: 'Nick',
    role: 'Home Cook & Writer',
    avatar: '/images/authors/nick.svg',
    // ...
  },
  xavier: {
    // ...
  },
};
```

## Deployment

### Deploy to Cloudflare Pages

#### Option 1: Using the Deploy Script

```bash
./scripts/deploy.sh
```

#### Option 2: Manual Deployment

```bash
npm run build
npx wrangler pages deploy dist --project-name=burrow-and-butter
```

#### Option 3: Connect GitHub (Recommended)

1. Push your code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

Every push to `main` will automatically deploy.

### Custom Domain Setup

1. In Cloudflare Pages → Your project → Custom domains
2. Click "Set up a custom domain"
3. Enter your domain (e.g., `burrowbutter.com`)
4. Follow DNS configuration instructions
5. Cloudflare provides free SSL automatically

## Project Structure

```
burrow-and-butter/
├── public/              # Static assets (copied as-is)
│   ├── images/
│   ├── downloads/       # Lead magnets, PDFs
│   └── robots.txt
├── src/
│   ├── assets/          # Images processed by Astro
│   ├── components/      # Reusable Astro components
│   ├── content/         # Markdown/MDX content
│   │   ├── recipes/
│   │   ├── reviews/
│   │   ├── features/
│   │   └── essays/
│   ├── data/            # Site configuration
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── styles/          # Global CSS
│   └── utils/           # Helper functions
├── scripts/             # Build/deploy scripts
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
├── wrangler.toml        # Cloudflare configuration
└── package.json
```

## SEO Features

- Auto-generated sitemap (`/sitemap-index.xml`)
- RSS feed (`/rss.xml`)
- Schema.org JSON-LD for recipes and reviews
- Open Graph and Twitter Card meta tags
- Pinterest-friendly meta tags
- Canonical URLs

### Validate Schema.org Markup

After building, test your JSON-LD:

1. Build the site: `npm run build`
2. Preview: `npm run preview`
3. Visit a recipe page
4. Copy the page URL
5. Test at [Google Rich Results Test](https://search.google.com/test/rich-results)

## Performance

Target: Lighthouse 95+

- Static HTML generation
- Optimized, responsive images (WebP/AVIF)
- Lazy-loaded videos and embeds
- Pagefind search (client-side, no server)
- Minimal JavaScript

## Newsletter Integration

The site is configured for Kit (ConvertKit). To set up:

1. Create a Kit account at [kit.com](https://kit.com)
2. Create a signup form
3. Copy your form URL and ID
4. Update `src/data/site.config.ts`:

```typescript
newsletter: {
  formUrl: 'https://app.kit.com/forms/YOUR_FORM_ID',
  formId: 'YOUR_FORM_ID',
}
```

### Lead Magnet

1. Create your PDF
2. Add it to `public/downloads/`
3. Configure in site config:

```typescript
leadMagnet: {
  enabled: true,
  title: 'Your Lead Magnet Title',
  pdfUrl: '/downloads/your-file.pdf',
}
```

## Troubleshooting

### "Image not found" errors

- Check the path is correct (use `../../assets/images/` for relative paths)
- Ensure the file exists and has correct extension
- Image filenames are case-sensitive

### Build fails

```bash
# Clear cache and rebuild
rm -rf node_modules .astro dist
npm install
npm run build
```

### Pagefind search not working

Search is built during `npm run build`. It won't work in dev mode.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run build && npm run preview`
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

