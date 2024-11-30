import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import { svgrComponent } from 'vite-plugin-svgr-component'

const getPath = (folder: string): string =>
  path.resolve(__dirname, `src/${folder}`)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    react(),
    svgr({
      svgrOptions: {},
    }),
    svgrComponent(),
  ],
  css: {
    modules: {
      exportGlobals: true,
      localsConvention: 'dashes',
    },
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, getPath('pages')),
      hooks: path.resolve(__dirname, getPath('hooks')),
      components: path.resolve(__dirname, getPath('components')),
      store: path.resolve(__dirname, getPath('store')),
      lib: path.resolve(__dirname, getPath('lib')),
      types: path.resolve(__dirname, getPath('types')),
    },
  },
})
