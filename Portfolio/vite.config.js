import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Update to your repository name
  optimizeDeps: {
    include: ["tsparticles", "react-tsparticles"],}// Mark it as external
});
