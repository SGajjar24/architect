import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    server: {
      port: 3000
    },
    // SECURITY: API_KEY is NOT defined here to prevent it from leaking into the client bundle.
    // The key is accessed solely in server-side functions (api/chat.js).
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            ui: ['lucide-react'],
            // @google/genai is only used in serverless functions (api/), not in the client bundle anymore.
          }
        }
      },
      chunkSizeWarningLimit: 1000
    }
  };
});