const translate = require('./filters/translate')
const { input, output, data } = require('./dir')
module.exports = function (config) {

  config.addNunjucksFilter('t', translate);

  return {
    dir: {
      output,
      input,
      data,
      includes: 'includes',
    },
    htmlTemplateEngine: 'njk',
    templateFormats: [ 'html' ] // Setting this disables other template formats
  }
}
