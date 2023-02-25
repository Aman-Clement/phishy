import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = {
//   server: {
//     middleware: {
//       // proxy all API requests to the backend server
//       '/api': createProxyMiddleware({
//         target: 'https://your-railway-app-url.railway.app',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       })
//     }
//   }
// };


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/phishy/',
  server: {
      middleware: {
      // proxy all API requests to the backend server
      '/api': createProxyMiddleware({
        target: 'https://instahow.up.railway.app/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      })
    }
  },
}
)
