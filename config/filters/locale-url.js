const path = require('path')
const { input, data } = require('../dir')
const { defaultLocale } = require('../i18n')

module.exports = function (slug, locale) {
  const { currentLocale } = this.ctx
  const toLocale = locale ? locale : currentLocale
  const slugMap = path.resolve('../../', input, data, 'pages.json')

  return `/${toLocale}/${(slugMap[slug]) ? slugMap[slug][toLocale] : slug}`
}
