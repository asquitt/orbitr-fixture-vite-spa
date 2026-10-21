import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// A stable entry name lets the read-only fixture check find the marker in the deployed bundle.
export default defineConfig({
  plugins: [react()],
  build: { rollupOptions: { output: { entryFileNames: 'assets/app.js' } } },
});
