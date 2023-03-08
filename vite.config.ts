import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // development
  if (mode === 'development')
    return {
      plugins: [react()],
      base: '',
      server: {
        port: 3000,
      },
    };
  // production (for GitHub Pages)
  else
    return {
      plugins: [react()],
      base: '/fekoneko-blog',
      server: {
        port: 3000,
      },
    };
});
