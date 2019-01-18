import googleAnalytics from './modules/google-analytics'
import nuxtI18n from './modules/nuxt-i18n'
import nuxtPwa from './modules/nuxt-pwa'

/**
 * @see https://nuxtjs.org/api/configuration-modules
 */
export default [
  '@nuxtjs/proxy',
  '@nuxtjs/sitemap',
  googleAnalytics,
  nuxtI18n,
  nuxtPwa,
].filter(Boolean)
