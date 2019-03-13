const path = require('path')
const { input, data } = require('../dir')
const i18n = require('../i18n')

module.exports = function (key) {
  const { locales, defaultLocale } = i18n
  const dictionaryPath = path.resolve('../../', input, data, locales.filter(({code}) => code === defaultLocale)[0].file)
  const dictionary = require(dictionaryPath)
  return dictionary[key]
}
