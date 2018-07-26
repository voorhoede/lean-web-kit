const { locales } = require('../lib/data')
const defaultLocale = locales[0]

/**
 * @see https://nuxt-community.github.io/nuxt-i18n/
 */
module.exports = [
  'nuxt-i18n',
  {
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
  }
]
