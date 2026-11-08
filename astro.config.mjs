import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://burrowbutter.com', // Update with your actual domain
  output: 'static',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  image: {
    domains: [],
    remotePatterns: [],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
