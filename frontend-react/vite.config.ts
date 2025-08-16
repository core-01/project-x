import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Ensures assets are loaded correctly when deployed to a subfolder
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
