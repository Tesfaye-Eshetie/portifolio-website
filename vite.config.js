import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        'styles/all': resolve(__dirname, 'styles/all.min.css'),
        'styles/animate': resolve(__dirname, 'styles/animate.css'),
        'styles/bootstrap': resolve(__dirname, 'styles/bootstrap.css'),
        'styles/et': resolve(__dirname, 'styles/et-lineicons.css'),
        'styles/flexslider': resolve(__dirname, 'styles/flexslider.css'),
        'styles/icon': resolve(__dirname, 'styles/icon.css'),
        'styles/main': resolve(__dirname, 'styles/main.css'),
      },
    },
  },
});
