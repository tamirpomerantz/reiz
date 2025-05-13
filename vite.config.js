import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'public',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: true
  }
}) 