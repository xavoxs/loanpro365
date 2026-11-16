import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://loanpro365.com',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-US' } } })],
});
