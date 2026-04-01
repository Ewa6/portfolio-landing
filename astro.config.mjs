// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  site: 'https://technical-writing.net/',
  trailingSlash: 'ignore',
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        behavior: 'append',
        properties: { ariaHidden: true, tabIndex: -1, className: ['heading-link'] },
        content: {
          type: 'element',
          tagName: 'span',
          properties: { className: ['heading-icon'] },
          children: [{ type: 'text', value: '#' }]
        }
      }]
    ]
  },
  vite: {
    plugins: [
      // @ts-ignore: Vite Plugin type mismatch between Astro's Vite version and @tailwindcss/vite
      tailwindcss(),
    ],
  },
  integrations: [react(), mdx()]
});