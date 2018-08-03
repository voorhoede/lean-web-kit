const { appConfig } = require('./lib/data')
/**
 * @see https://nuxtjs.org/api/configuration-head
 */
module.exports = {
  title: appConfig.title,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Lean Web Kit to kick-start your web project.' },
    { 'http-equiv': 'Accept-CH', content: 'DPR, Width, Viewport-Width, Save-Data' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    // all other app icons are generated and added by the @nuxt/pwa module
    { rel: 'dns-prefetch', href: 'https://www.datocms-assets.com/' },
  ],
}
