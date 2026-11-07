import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

if (typeof process.loadEnvFile === 'function') {
  try {
    process.loadEnvFile();
  } catch (_) {}
}

const web3formsKey =
  process.env.WEB3FORMS_ACCESS_KEY ||
  process.env.PUBLIC_WEB3FORMS_ACCESS_KEY ||
  '';

// https://astro.build/config
export default defineConfig({
  site: 'https://asociacionpcu.vercel.app',
  output: 'static',
  adapter: vercel(),
  redirects: {
    '/actividades/talleres-stem': '/actividades/charlas-informativas',
  },
  vite: {
    define: {
      'import.meta.env.WEB3FORMS_ACCESS_KEY': JSON.stringify(web3formsKey),
      'import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY': JSON.stringify(web3formsKey),
    },
  },
});
