import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import sourceLocationPlugin from './vite-plugin-source-location.ts'
import propAdjustmentPlugin from './vite-prop-adjustment-plugin.ts'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      tailwindcss(),
      propAdjustmentPlugin(),
      sourceLocationPlugin(),
      svgr({
        svgrOptions: {
          typescript: false,
        },
      }),
      react(),
    ],
    base: './',
    server: {
      cors: {
        origin: ['null', /^https?:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/],
      },
    },
    build: {
      minify: false,
      cssMinify: false,
      sourcemap: false,
      target: 'esnext',
      rollupOptions: {
        treeshake: false,
        output: {
          manualChunks: undefined,
          inlineDynamicImports: true,
        },
      },
      reportCompressedSize: false,
      chunkSizeWarningLimit: 10000,
      assetsDir: env.VITE_ASSETS_DIR ?? '',
    },
    esbuild: {
      target: 'esnext',
      minify: false,
    },
    optimizeDeps: {
      force: true,
      include: ['react', 'react-dom'],
    },
  }
})
