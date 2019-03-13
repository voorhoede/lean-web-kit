const path = require('path')
const { input, data } = require('../dir')
const i18n = require('../i18n')

module.exports = function (slug) {
  const locale = locales[0]
  const slugMap = path.resolve('../../', input, data, 'pages.json')
  return `${slugMap[slug][locale]}`
}
