import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Pour GitHub Pages : VITE_BASE_PATH=/nom-du-depot/
  base: process.env.VITE_BASE_PATH || '/',
});
