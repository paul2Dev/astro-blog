import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true
    }
  },
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), vue()],
  site: 'https://paul2d.dev',
  // base: '/astro-blog',
});

