import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const VENDOR_CHUNKS = {
  firebase: ['@firebase', 'firebase'],
  motion: ['framer-motion', 'motion-dom', 'motion-utils'],
  react: ['react', 'react-dom', 'scheduler'],
} as const;

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          const chunkName = Object.entries(VENDOR_CHUNKS).find(([, packages]) =>
            packages.some((packageName) => id.includes(`node_modules/${packageName}`)),
          )?.[0];

          return chunkName ?? 'vendor';
        },
      },
    },
  },
  plugins: [react()],
});
