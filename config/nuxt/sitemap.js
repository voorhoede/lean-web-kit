const { baseUrl } = require('./env')
const routes = require('./lib/routes')

/**
 * Requires '@nuxtjs/sitemap' module to be loaded.
 * @see https://github.com/nuxt-community/sitemap-module
 */
module.exports = {
  generate: true,
  hostname: baseUrl,
  routes
}
