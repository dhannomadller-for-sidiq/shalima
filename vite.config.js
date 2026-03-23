import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        itinerary: resolve(__dirname, 'itinerary.html'),
        guide: resolve(__dirname, 'guide.html'),
        destinations: resolve(__dirname, 'destinations.html'),
      },
    },
  },
})
