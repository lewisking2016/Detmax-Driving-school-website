import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us.html'),
        driving: resolve(__dirname, 'driving-school.html'),
        computer: resolve(__dirname, 'computer-college.html'),
        contact: resolve(__dirname, 'contact.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        faq: resolve(__dirname, 'faq.html'),
        terms: resolve(__dirname, 'terms-of-service.html'),
        privacy: resolve(__dirname, 'privacy-policy.html'),
        thanks: resolve(__dirname, 'thank-you.html'),
        registration: resolve(__dirname, 'registration.html'),
      }
    }
  }
})
