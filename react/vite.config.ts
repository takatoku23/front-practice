import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Viteの設定
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3002,
  },
  resolve: {
    alias: {
      // ルートディレクトリのパスを@に設定
      '@': '/src',
    },
  },
});
