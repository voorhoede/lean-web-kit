const { appConfig } = require('../lib/data')

/**
 * @see https://pwa.nuxtjs.org/
 */
module.exports = ['@nuxtjs/pwa', { // https://pwa.nuxtjs.org
  manifest: {
    name: appConfig.title,
    short_name: appConfig.title,
    start_url: '/?standalone=true',
    display: 'standalone',
    background_color: '#ffffff', // see components/app-core/variables.css
    theme_color: '#6a9ce4' // see components/app-core/variables.css
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://www.datocms-assets.com/.*',
        handler: 'cacheFirst',
        method: 'GET'
      }
    ]
  }
}],
