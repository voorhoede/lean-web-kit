const path = require('path')
const { input, data } = require('../dir')
const { defaultLocale } = require('../i18n')

module.exports = function (slug) {
  const { locale = defaultLocale } = this.ctx
  const slugMap = path.resolve('../../', input, data, 'pages.json')
  return `${slugMap[slug][locale]}`
}
