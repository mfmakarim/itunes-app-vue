// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Vue Tech Test',
      meta: [
        { name: 'description',  content: 'This app for technical test purpose'}
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
        },
      ],
    },
  },
  pages: true,
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  css: ['@/assets/css/style.css'],
  tailwindcss: {
    configPath: '~/tailwind.config.js'
  }
})
