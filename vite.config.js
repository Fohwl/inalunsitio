import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const fromRoot = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  root: fromRoot('./src/pages/'),
  publicDir: fromRoot('./public/'),
  plugins: [tailwindcss()],
  build: {
    outDir: fromRoot('./dist/'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        inicio: fromRoot('./src/pages/index.html'),
        nosotros: fromRoot('./src/pages/nosotros.html'),
        noticias: fromRoot('./src/pages/noticias.html'),
        admision: fromRoot('./src/pages/admision.html'),
        contacto: fromRoot('./src/pages/contacto.html'),
      },
    },
  },
});
