/**
 * Site Configuration
 * Edit this file to update site-wide settings
 */

export const siteConfig = {
  // Basic site info
  name: 'Burrow and Butter',
  tagline: 'Where a chef and a home cook meet in the kitchen',
  description: 'Tested recipes, chef vs. home cook features, and local restaurant reviews from Nick (Chicago) and Xavier (Houston).',
  url: 'https://burrowbutter.com', // Update with your domain

  // Branding
  logo: '/images/logo.svg',
  favicon: '/favicon.ico',

  // Social links
  social: {
    instagram: 'https://instagram.com/burrowbutter',
    pinterest: 'https://pinterest.com/burrowbutter',
    tiktok: 'https://tiktok.com/@burrowbutter',
    youtube: 'https://youtube.com/@burrowbutter',
    email: 'hello@burrowbutter.com',
  },

  // Newsletter (Kit/ConvertKit)
  newsletter: {
    provider: 'kit', // 'kit' | 'substack' | 'buttondown'
    formUrl: 'https://app.kit.com/forms/YOUR_FORM_ID', // Replace with your Kit form URL
    formId: 'YOUR_FORM_ID', // Replace with your Kit form ID
    leadMagnet: {
      enabled: true,
      title: 'Free: 10 Weeknight Dinners in 30 Minutes',
      description: 'Our most-tested quick recipes, delivered to your inbox.',
      pdfUrl: '/downloads/weeknight-dinners.pdf',
    },
  },

  // Analytics
  analytics: {
    googleAnalyticsId: '', // e.g., 'G-XXXXXXXXXX' - leave empty to disable
  },

  // Feature toggles
  features: {
    ads: false, // Set to true to show ad slots
    exitIntent: true, // Newsletter popup on exit intent
    scrollPrompt: true, // Newsletter prompt after scroll
    search: true, // Pagefind search
    comments: false, // Future: comment system
  },

  // Default SEO image
  defaultOgImage: '/images/og-default.svg',

  // Pinterest
  pinterest: {
    verificationCode: '', // Your Pinterest verification meta tag
  },

  // Cities for restaurant reviews
  cities: [
    { slug: 'chicago', name: 'Chicago', state: 'IL' },
    { slug: 'houston', name: 'Houston', state: 'TX' },
  ],

  // Recipe categories
  categories: [
    { slug: 'breakfast', name: 'Breakfast & Brunch' },
    { slug: 'lunch', name: 'Lunch' },
    { slug: 'dinner', name: 'Dinner' },
    { slug: 'appetizers', name: 'Appetizers & Snacks' },
    { slug: 'desserts', name: 'Desserts' },
    { slug: 'drinks', name: 'Drinks' },
    { slug: 'sides', name: 'Sides' },
    { slug: 'basics', name: 'Basics & Sauces' },
  ],

  // Cuisines
  cuisines: [
    { slug: 'american', name: 'American' },
    { slug: 'mexican', name: 'Mexican' },
    { slug: 'italian', name: 'Italian' },
    { slug: 'asian', name: 'Asian' },
    { slug: 'southern', name: 'Southern' },
    { slug: 'mediterranean', name: 'Mediterranean' },
    { slug: 'french', name: 'French' },
    { slug: 'tex-mex', name: 'Tex-Mex' },
  ],

  // Difficulty levels
  difficulties: [
    { slug: 'easy', name: 'Easy', description: 'Perfect for beginners' },
    { slug: 'medium', name: 'Medium', description: 'Some cooking experience helpful' },
    { slug: 'challenging', name: 'Challenging', description: 'Advanced techniques required' },
  ],
} as const;

// Author data
export const authors = {
  nick: {
    id: 'nick',
    name: 'Nick',
    role: 'Home Cook & Writer',
    location: 'Chicago, IL',
    bio: 'An everyday home cook who believes that great food doesn\'t require a culinary degree—just curiosity, good ingredients, and plenty of taste tests. Nick brings the home kitchen perspective to every recipe.',
    avatar: '/images/authors/nick.svg',
    social: {
      instagram: 'https://instagram.com/nick',
      twitter: 'https://twitter.com/nick',
    },
    credentials: [
      'Self-taught home cook',
      '10+ years of weeknight dinner experimentation',
      'Chicago food scene explorer',
    ],
  },
  xavier: {
    id: 'xavier',
    name: 'Xavier',
    role: 'Professional Chef',
    location: 'Houston, TX',
    bio: 'A professionally trained chef with years of restaurant experience, Xavier brings culinary precision and technique to the kitchen. His mission: making professional-level cooking accessible to everyone.',
    avatar: '/images/authors/xavier.svg',
    social: {
      instagram: 'https://instagram.com/xavier',
    },
    credentials: [
      'Culinary Institute of America graduate',
      '8 years of professional kitchen experience',
      'Former sous chef at fine dining restaurants',
    ],
  },
} as const;

export type AuthorId = keyof typeof authors;
export type Author = typeof authors[AuthorId];
