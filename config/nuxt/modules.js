const googleAnalytics = require('./modules/google-analytics')
const nuxtI18n = require('./modules/nuxt-i18n')

/**
 * @see https://nuxtjs.org/api/configuration-modules
 */
module.exports = [
  '@nuxtjs/proxy',
  '@nuxtjs/sitemap',
  ['@nuxtjs/google-analytics', googleAnalytics],
  ['nuxt-i18n', nuxtI18n],
]
