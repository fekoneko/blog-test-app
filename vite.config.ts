import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (mode === 'development')
    // development
    return {
      plugins: [react()],
    };
  // production (for GitHub Pages)
  else
    return {
      plugins: [react()],
      base: '/fekoneko-blog/',
    };
});
