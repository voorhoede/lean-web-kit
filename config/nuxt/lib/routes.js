const flattenDeep = require('lodash/flattenDeep')
const { pages } = require('./data')

module.exports = flattenDeep([
  '/',
  Object.keys(pages).map(key => {
    const slugI18n = pages[key]
    return Object.keys(slugI18n).map(locale => `/${locale}/${slugI18n[locale]}/`)
  })
])
