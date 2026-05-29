import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [tailwindcss(), cloudflare()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        steam2fa: resolve(__dirname, 'tool/steam2fa.html'),
        'cs2-items': resolve(__dirname, 'tool/cs2-items.html'),
      },
    },
  },
  server: {
    open: true,
  },
});