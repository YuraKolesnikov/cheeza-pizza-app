import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

const getPath = (folder: string): string => path.resolve(__dirname, `src/${folder}`)

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
      'pages':      path.resolve(__dirname, getPath('pages')),
      'components': path.resolve(__dirname, getPath('components')),
      'store':      path.resolve(__dirname, getPath('store')),
      'lib':        path.resolve(__dirname, getPath('lib')),
      'types':      path.resolve(__dirname, getPath('types')),
    },
  },
})
