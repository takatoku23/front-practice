import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Viteの設定
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // 任意のポート番号
  },
});
