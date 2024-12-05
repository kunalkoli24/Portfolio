import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',  // Specifies the output directory for production build.
  },
  server: {
    port: 3000,  // Specifies the local server port.
  },
});
