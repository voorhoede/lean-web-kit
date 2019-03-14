const path = require('path')
const { input, data } = require('../dir')
const { locales, defaultLocale }  = require('../i18n')

module.exports = function (key) {
  const { locale = defaultLocale } = this.ctx
  const dictionaryFile = locales.filter(({code}) => code === locale)[0].file
  const dictionary = require(path.join('../../', input, data, dictionaryFile))
  return dictionary[key] || key
}
