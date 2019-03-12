const path = require('path')
const { input, data } = require('./dir')
const locales = require(path.resolve(input, data, 'locales.json'))
const defaultLocale = locales[0]

module.exports = {
  /* Based on the settings from nuxt-i18n */
  defaultLocale,
  locales: locales.map(locale => ({
    code: locale,
    file: `${locale}/messages.json`,
    iso: locale,
    name: locale,
  })),
  rootRedirect: defaultLocale,
  strategy: 'prefix',
}
