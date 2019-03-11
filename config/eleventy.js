const translate = require('./filters/translate')

module.exports = function (config) {

  config.addNunjucksFilter('t', translate);

  return {
    dir: {
      input: 'src/client',
      output: 'dist/client'
    },
    htmlTemplateEngine: "njk"
  }
}
