import { defineCollection, z } from 'astro:content';

// Ingredient schema with optional grouping
const ingredientSchema = z.object({
  group: z.string().optional(), // e.g., "For the sauce"
  item: z.string(),
  amount: z.string().optional(),
  unit: z.string().optional(),
  notes: z.string().optional(), // e.g., "room temperature"
});

// Step schema
const stepSchema = z.object({
  instruction: z.string(),
  tip: z.string().optional(),
  image: z.string().optional(),
});

// Nutrition schema
const nutritionSchema = z.object({
  servingSize: z.string().optional(),
  calories: z.number().optional(),
  fat: z.string().optional(),
  saturatedFat: z.string().optional(),
  carbohydrates: z.string().optional(),
  fiber: z.string().optional(),
  sugar: z.string().optional(),
  protein: z.string().optional(),
  sodium: z.string().optional(),
}).optional();

// Recipe collection
const recipes = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // Basic info
    title: z.string(),
    description: z.string(),
    author: z.enum(['nick', 'xavier']),
    coAuthors: z.array(z.enum(['nick', 'xavier'])).optional(),

    // Images
    heroImage: image(),
    heroImageAlt: z.string(),
    pinImage: image().optional(), // Tall Pinterest image
    pinImageAlt: z.string().optional(),

    // Timing
    prepTime: z.number(), // minutes
    cookTime: z.number(), // minutes
    totalTime: z.number().optional(), // auto-calculated if not provided
    restTime: z.number().optional(), // for resting, marinating, etc.

    // Servings
    servings: z.number(),
    servingsUnit: z.string().default('servings'), // "servings", "cookies", "cups"

    // Recipe content
    ingredients: z.array(ingredientSchema),
    steps: z.array(stepSchema),
    notes: z.string().optional(),

    // Testing and tips (unique content!)
    testingNotes: z.string().optional(), // What we tried, what failed
    chefTip: z.string().optional(),

    // Nutrition (optional)
    nutrition: nutritionSchema,

    // Video (optional)
    videoUrl: z.string().url().optional(), // YouTube, TikTok, or Instagram URL
    videoType: z.enum(['youtube', 'tiktok', 'instagram']).optional(),

    // Categorization
    category: z.string(),
    cuisine: z.string(),
    difficulty: z.enum(['easy', 'medium', 'challenging']),
    keywords: z.array(z.string()),

    // SEO & dates
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // Status
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Restaurant review collection
const reviews = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // Restaurant info
    restaurantName: z.string(),
    city: z.string(),
    state: z.string(),
    address: z.string(),
    website: z.string().url().optional(),

    // Review details
    cuisine: z.string(),
    priceRange: z.enum(['$', '$$', '$$$', '$$$$']),
    visitDate: z.coerce.date(),
    reviewer: z.enum(['nick', 'xavier']),
    rating: z.number().min(1).max(5),

    // What we ate
    dishesOrdered: z.array(z.object({
      name: z.string(),
      description: z.string().optional(),
      price: z.string().optional(),
      recommended: z.boolean().default(false),
    })),

    // Review content
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    verdict: z.string(),

    // Images
    heroImage: image(),
    heroImageAlt: z.string(),
    photos: z.array(z.object({
      src: image(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),

    // Disclosure (important!)
    paid: z.boolean(), // Did we pay for this meal?
    comped: z.boolean().default(false), // Was any part free?
    sponsored: z.boolean().default(false), // Was this a paid partnership?
    disclosureNote: z.string().optional(), // Additional disclosure info

    // SEO
    description: z.string(),
    keywords: z.array(z.string()),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // Status
    draft: z.boolean().default(false),
  }),
});

// Chef vs. Home Cook feature collection
const features = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    dish: z.string(), // What dish are we comparing?

    // Images
    heroImage: image(),
    heroImageAlt: z.string(),

    // The two versions
    chefVersion: z.object({
      approach: z.string(),
      keyTechniques: z.array(z.string()),
      timeRequired: z.string(),
      equipmentNeeded: z.array(z.string()),
      difficultyLevel: z.enum(['easy', 'medium', 'challenging']),
      image: image(),
      imageAlt: z.string(),
    }),
    homeVersion: z.object({
      approach: z.string(),
      shortcuts: z.array(z.string()),
      timeRequired: z.string(),
      equipmentNeeded: z.array(z.string()),
      difficultyLevel: z.enum(['easy', 'medium', 'challenging']),
      image: image(),
      imageAlt: z.string(),
    }),

    // Verdict
    verdict: z.string(),
    whenToUseChefVersion: z.string(),
    whenToUseHomeVersion: z.string(),

    // Links to full recipes (optional)
    chefRecipeSlug: z.string().optional(),
    homeRecipeSlug: z.string().optional(),

    // Video
    videoUrl: z.string().url().optional(),
    videoType: z.enum(['youtube', 'tiktok', 'instagram']).optional(),

    // SEO
    keywords: z.array(z.string()),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // Status
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Essays/articles collection
const essays = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    author: z.enum(['nick', 'xavier']),

    heroImage: image(),
    heroImageAlt: z.string(),

    category: z.string().optional(), // e.g., "Kitchen Tips", "Food Stories"
    keywords: z.array(z.string()),

    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// City roundups (Best of [City])
const roundups = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    city: z.string(),
    state: z.string(),

    heroImage: image(),
    heroImageAlt: z.string(),

    // Curated list of reviews
    reviewSlugs: z.array(z.string()),

    curator: z.enum(['nick', 'xavier']),
    keywords: z.array(z.string()),

    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    draft: z.boolean().default(false),
  }),
});

// Static pages (About, Privacy, etc.)
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  recipes,
  reviews,
  features,
  essays,
  roundups,
  pages,
};
