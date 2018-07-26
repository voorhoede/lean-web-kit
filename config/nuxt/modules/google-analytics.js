const { appConfig } = require('../lib/data')
const isProduction = (process.env.NODE_ENV === 'production')

/**
 * https://github.com/nuxt-community/analytics-module
 */
module.exports = appConfig.googleAnalyticsTrackingId &&
  ['@nuxtjs/google-analytics',
  {
    id: appConfig.googleAnalyticsTrackingId,
    /**
     * Debug while in development mode
     * @see https://matteogabriele.gitbooks.io/vue-analytics/content/docs/debug.html
     */
    debug: {
      enabled: !isProduction,
      sendHitTask: isProduction,
    },
    /**
     * Anonymize tracking
     * @see https://www.themarketingtechnologist.co/setting-up-a-cookie-law-compliant-google-analytics-tracker/
     */
    set: [
      { field: 'displayFeaturesTask', value: null },
      { field: 'anonymizeIp', value: true },
    ],
  }
]
