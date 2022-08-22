import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - mini_blog',
    title: 'mini_blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // data of microCMS key and data
  publicRuntimeConfig: {
    MICROCMS_API_URL: process.env.MICROCMS_API_URL,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    async routes() {
      // const routes = []
      return await axios
        .get(process.env.MICROCMS_API_URL + '/blog', {
          headers: { 'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY },
        })
        .then((res) => {
          return res.data.contents.map((content) => {
            return {
              routes: '/blog/' + content.id,
            }
          })
          // for (let i = 0, len = res.data.contents.length; i < len; i++) {
          //   const item = res.data.contents[i]
          //   routes.push({
          //     route: '/blog/' + item.id,
          //     payload: item,
          //   })
          // }
        })
    },
  },
}
