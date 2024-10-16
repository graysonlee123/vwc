import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vacationswithcharacter.com',
  redirects: {
    '/about-us.html': '/about/',
    '/all-inclusive-resorts.html': '/',
    '/disney.html': '/',
    '/happy-clients.html': '/',
    '/our-services.html': '/',
    '/privacy-policy.html': '/privacy-policy',
    '/terms-and-conditions.html': '/terms-and-conditions',
    '/tickets.html': '/',
    '/universal-orlando.html': '/',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
});
