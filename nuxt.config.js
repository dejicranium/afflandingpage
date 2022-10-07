import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - afflee_land',
    title: 'afflee_land',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href: 'https://fonts.googleapis.com/css?family=Quicksand:300,500|Playfair+Display:700i', rel: 'stylesheet'}
    ]
  },

  css: [
    '~assets/scss/colors.scss'
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/tailwindcss',
  ],
  styleReources: {
    scss: ['./assets/scss/*.scss']
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
