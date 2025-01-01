import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = (() => {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    console.log({VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL})
    return 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL
  }

  return 'http://localhost:4321'
})()

// https://astro.build/config
export default defineConfig({
  site,
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
});
