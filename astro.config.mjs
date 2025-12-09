import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://translate.pixel-evolve.com',
  output: 'static',
  integrations: [tailwind()],
  build: {
    assets: '_assets'
  }
});
