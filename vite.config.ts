import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pages from 'vite-plugin-pages'
import svgr from 'vite-plugin-svgr'
import filterReplace from 'vite-plugin-filter-replace'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages(),
    svgr({ exportAsDefault: true }),
    // @ts-ignore
    filterReplace.default([
      {
        filter: /\.css$/,
        replace: {
          from: './font/',
          to: '../font/',
        },
      },
    ]),
  ],
  resolve: {
    alias: {
      '@assets/': `${__dirname}/src/assets/`,
      '@components/': `${__dirname}/src/components/`,
      '@libs/': `${__dirname}/src/libs/`,
      '@types/': `${__dirname}/src/types/`,
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})
