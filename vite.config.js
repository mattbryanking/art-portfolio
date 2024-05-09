import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const cmsBuild = process.env.CMS_BUILD;

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: cmsBuild ? 'src/cms/cms.js' : 'src/main.js'
    },
    outDir: cmsBuild ? 'dist/admin' : 'dist',
  }
});
