import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    react({
      include: ['**/react/*'],
      experimentalReactChildren: true,
    }),

  ],
  output: 'hybrid',
  adapter: vercel(),
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  experimental: {
    serverIslands: true,
  },
});