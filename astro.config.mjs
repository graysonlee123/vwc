import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL_URL
    ? 'https://' + process.env.VERCEL_URL
    : 'http://localhost:4321',
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
});
