export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app:{
    head:{
      script: [
        {
          src: 'https://fonts.googleapis.com/css2?family=Monda:wght@400;700&display=swap'
        },
        {
          src: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Signika:wght@300;400;600&family=Inter:wght@300;400;700&display=swap'
        }
      ]
    }
  }
})
