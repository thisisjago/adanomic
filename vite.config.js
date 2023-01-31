// vite.config.js
import generateSitemap from 'vite-ssg-sitemap'

export default {
    base: '/',
    build: {
      target: 'esnext'
    },
    ssgOptions: {
      onFinished() { generateSitemap() },
    },
    // config options
  }
  
