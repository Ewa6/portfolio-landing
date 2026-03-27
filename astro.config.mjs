// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://technical-writing.net/',
  trailingSlash: 'ignore',
  vite: {
    plugins: [
      // @ts-ignore: Vite Plugin type mismatch between Astro's Vite version and @tailwindcss/vite
      tailwindcss(),
    ],
  },
  integrations: [react()]
});