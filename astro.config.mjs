import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from "@astrojs/partytown";
import robotsTxt from 'astro-robots-txt';
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true
    }
  },
  integrations: [
    mdx(), 
    robotsTxt(), 
    sitemap(), 
    tailwind({
    config: {
      applyBaseStyles: false
    }
  }), vue(), partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), svelte()],
  //site: 'https://paul2d.dev' 
  base: '/astro-blog/',
});