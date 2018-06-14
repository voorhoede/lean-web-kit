const locales = require('./src/client/static/data/locales.json')
const pages = require('./src/client/static/data/pages.json')

const defaultLocale = locales[0]
const isProduction = (process.env.NODE_ENV === 'production')

module.exports = {
  srcDir: 'src/client/',

  generate: {
    dir: 'dist/client/',
    routes: [
      '/',
      ...pages.map(page => `/${defaultLocale}/${page.slug}/`)
    ],
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Lean Web Kit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lean Web Kit to kick-start your web project.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  proxy: { // https://github.com/nuxt-community/proxy-module
    '/.netlify/functions/': {
      target: 'http://localhost:9000/',
      pathRewrite: { '^/.netlify/functions/': '' },
    }
  },

  modules: [
    '@nuxtjs/proxy',
    ['nuxt-i18n', {
      locales: locales.map(locale => ({
        code: locale,
        name: locale,
        iso: locale,
      })),
      defaultLocale,
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      rootRedirect: defaultLocale,
      strategy: 'prefix',
      vueI18n: {
        fallbackLocale: defaultLocale,
      }
    }],
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
