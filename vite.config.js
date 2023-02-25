import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/phishy/',
  server: {
    proxy: {
      '/api': {
        target: "instahow.up.railway.app",
        changeOrigin: true,
        secure: false,
        rewrite: path => path.reaplace('/', ''),
      }
    }
  },
}
)
