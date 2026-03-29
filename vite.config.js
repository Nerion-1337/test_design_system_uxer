import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
      server: {
      host: true,
      port: 5173,
      strictPort: true,
      watch: {
        usePolling: true,
      }
    }
})
