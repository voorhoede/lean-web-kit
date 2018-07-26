const { appConfig, locales } = require('../lib/data')
const defaultLocale = locales[0]

/**
 * @see https://pwa.nuxtjs.org/
 */
module.exports = [
  '@nuxtjs/pwa',
  {
    manifest: {
      name: appConfig.title,
      short_name: appConfig.title,
      start_url: `/${defaultLocale}/?standalone=true`,
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
  }
]
