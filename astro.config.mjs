import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = (() => {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
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
  env: {
    schema: {
      PUBLIC_FORMSPREE_FORM_ID: envField.string({
        context: 'client',
        access: 'public',
        length: 8,
      })
    }
  }
});
