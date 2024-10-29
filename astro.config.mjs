import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://bloomdevelop.github.io',
  base: 'blog-simple',
  integrations: [mdx(), sitemap()],
  output: 'server',
  adapter: vercel(),
});