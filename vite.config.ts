import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), react()],
  css: {
    modules: {
      exportGlobals: true,
      localsConvention: 'dashes',
    },
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'lib': path.resolve(__dirname, 'src/lib'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'store': path.resolve(__dirname, 'src/store'),
      'types': path.resolve(__dirname, 'src/types'),
    }
  },
})
