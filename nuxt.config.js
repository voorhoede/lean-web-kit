const flattenDeep = require('lodash/flattenDeep')

const appConfig = require('./src/client/static/data/app.json')
const locales = require('./src/client/static/data/locales.json')
const pages = require('./src/client/static/data/pages.json')

/**
 * Use Netlify's URL variable:
 * @see https://www.netlify.com/docs/continuous-deployment/#build-environment-variables
 */
const { NODE_ENV, URL } = process.env
const baseUrl = URL || ''
const defaultLocale = locales[0]
const isProduction = (NODE_ENV === 'production')

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

  env: {
    baseUrl,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: appConfig.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lean Web Kit to kick-start your web project.' },
      { 'http-equiv': 'Accept-CH', content: 'DPR, Width, Viewport-Width, Save-Data' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://www.datocms-assets.com/' },
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

  router: {
    middleware: ['enforce-trailing-slash', 'meta-canonical'],
  },

  modules: [
    '@nuxtjs/proxy',
    ['@nuxtjs/google-analytics', { // https://github.com/nuxt-community/analytics-module
      id: appConfig.googleAnalyticsTrackingId,
      /**
       * Debug while in development mode
       * @see https://matteogabriele.gitbooks.io/vue-analytics/content/docs/debug.html
       */
      debug: {
        enabled: !isProduction,
        sendHitTask: isProduction,
      },
      /**
       * Anonymize tracking
       * @see https://www.themarketingtechnologist.co/setting-up-a-cookie-law-compliant-google-analytics-tracker/
       */
      set: [
        { field: 'displayFeaturesTask', value: null },
        { field: 'anonymizeIp', value: true },
      ],
    }],
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
  },

  plugins: [
    { src: `~plugins/vimeo-player`, ssr: false }
  ],
}
