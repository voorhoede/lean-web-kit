const flattenDeep = require('lodash/flattenDeep')

const locales = require('./src/client/static/data/locales.json')
const pages = require('./src/client/static/data/pages.json')

const defaultLocale = locales[0]
const isProduction = (process.env.NODE_ENV === 'production')

module.exports = {
  srcDir: 'src/client/',

  generate: {
    dir: 'dist/client/',
    routes: flattenDeep([
      '/',
      Object.keys(pages).map(key => {
        const slugI18n = pages[key]
        return Object.keys(slugI18n).map(locale => `/${locale}/${slugI18n[locale]}`)
      })
    ])
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
      defaultLocale,
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      lazy: true,
      langDir: 'static/data/',
      locales: locales.map(locale => ({
        code: locale,
        file: `${locale}/messages.json`,
        iso: locale,
        name: locale,
      })),
      rootRedirect: defaultLocale,
      strategy: 'prefix',
      vueI18n: {
        fallbackLocale: defaultLocale,
      }
    }],
  ],


  css: [
    'normalize.css'
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('postcss-custom-properties')()
    ],
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
