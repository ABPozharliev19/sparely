import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "sparely",
    project: "sparely-web-client"
  })],

  server: {
    port: Number(5173),
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
    watch: {
      usePolling: true,
    }
  },

  build: {
    sourcemap: true
  }
})