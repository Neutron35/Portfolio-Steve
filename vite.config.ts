import MillionLint from '@million/lint';
import VitePluginWebpCompress from 'vite-plugin-webp-compress';
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), MillionLint.vite(), VitePluginWebpCompress()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
