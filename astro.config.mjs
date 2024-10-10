import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site:
    import.meta.env.PUBLIC_ENVIRONMENT === 'production'
      ? 'https://www.vacationswithcharacter.com'
      : 'https://www.staging.vacationswithcharacter.com',
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
