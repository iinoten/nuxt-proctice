export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'my-portfolio-nuxt-ample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  generate: {
    fallback: true
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'reset-css',
    '~/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/test.js', ssr: false}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],

  axios: {

  },

  styleResources: {
    scss: ['~/assets/scss/_variables.scss'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
