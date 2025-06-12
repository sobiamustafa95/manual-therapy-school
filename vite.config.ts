import eslint from '@nabla/vite-plugin-eslint';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), eslint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    // Allow all hosts to connect to the dev server. Not secure for production, only use in development.
    // allowedHosts: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const [, modulePath] = id.split('node_modules/');
            if (!modulePath) return 'vendor';

            const [topLevelFolder] = modulePath.split('/');
            if (topLevelFolder !== '.pnpm') {
              return topLevelFolder;
            }

            const [, scopedPackageName] = modulePath.split('/');
            if (!scopedPackageName) return 'vendor';

            const chunkName =
              scopedPackageName.split('@')[scopedPackageName.startsWith('@') ? 1 : 0];
            return chunkName;
          }
          return 'vendor';
        },
      },
    },
  },
});
