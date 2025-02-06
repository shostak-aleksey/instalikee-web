import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        exportType: 'named',
        svgoConfig: {
          multipass: true,
        },
      },
    }),
    react(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    // __API__: JSON.stringify('psyches-strings-backend-2.onrender.com/api'),
    __API__: JSON.stringify('http://localhost:5000/api'),
    __PROJECT__: JSON.stringify('frontend'),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделение кода на чанки
          vendor: ['react', 'react-dom', 'gsap'],
        },
      },
    },
    // Увеличение лимита предупреждения о размере чанка
    chunkSizeWarningLimit: 1000,
  },
});
