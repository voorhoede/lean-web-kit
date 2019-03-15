const path= require('path')
const translate = require('./filters/translate')
const localeUrl = require('./filters/locale-url')
const { input, output, data } = require('./dir')

module.exports = function (config) {

  config.addNunjucksFilter('t', translate);
  config.addNunjucksFilter('localeUrl', localeUrl);
  return {
    dir: {
      output,
      input,
      data,
      includes: 'includes',
    },
    htmlTemplateEngine: 'njk',
    templateFormats: [ 'html' ], // Setting this disables other template formats
    passthroughFileCopy: true
  }
}
