import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/',
  server: {
    proxy: {
      '/': {
        target: "instahow.up.railway.app",
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('/', ''),
      }
    }
  },
}
)
