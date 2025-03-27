import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = (() => {
  switch (process.env.VERCEL_ENV) {
    case 'production': {
      return 'https://www.vacationswithcharacter.com'
    }
    case 'preview': {
      return 'https://www.preview.vacationswithcharacter.com'
    }
    default: {
      return 'http://localhost:4321'
    }
  }
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
  },
  prefetch: true,
});

console.log(`Configured with Astro.site set as [${site}]`)
