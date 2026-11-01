import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        project: resolve(import.meta.dirname, 'project.html')
      }
    }
  }
});
