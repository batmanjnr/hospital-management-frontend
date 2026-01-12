// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script',
      manifest: {
        name: 'MainSpring Hospital',
        short_name: 'MainSpring',
        description: 'Hospital Management',
        theme_color: '#074642ff',
        background_color: '#053627ff',
        display: 'standalone',
        icons: [
          {
            src: 'icon1.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon2.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]})