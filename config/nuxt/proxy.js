/**
 * Requires '@nuxtjs/proxy' module to be loaded.
 * @see https://github.com/nuxt-community/proxy-module
 */
module.exports = {
  '/.netlify/functions/': {
    target: 'http://localhost:9000/',
    pathRewrite: { '^/.netlify/functions/': '' },
  }
}
