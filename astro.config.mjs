import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://asociacionpcu.vercel.app',
  output: 'static',
  adapter: vercel(),
  redirects: {
    '/actividades/talleres-stem': '/actividades/charlas-informativas',
  },
});
