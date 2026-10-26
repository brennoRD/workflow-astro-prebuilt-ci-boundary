import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import { workflow } from 'workflow/astro';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [workflow()],
});
