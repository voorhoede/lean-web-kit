require('dotenv-safe').config()
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
    set: [
      /**
       * Anonymize tracking
       * @see https://www.themarketingtechnologist.co/setting-up-a-cookie-law-compliant-google-analytics-tracker/
       */
      { field: 'displayFeaturesTask', value: null },
      { field: 'anonymizeIp', value: true },
      /**
       * Each split test in Netlify is identifyable by its branch name (`process.env.branch`)
       * and we use the branch name as experiment identifier in Google Analytics (`expVar`):
       * @see https://www.netlify.com/docs/split-testing/#sending-split-test-information-to-google-analytics
       * @see https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#experiments
       */
      { field: 'expId', value: appConfig.experimentId },
      { field: 'expVar', value: process.env.BRANCH },
    ],
    /**
     * Extend default tracking behaviour
     * @see https://matteogabriele.gitbooks.io/vue-analytics/content/docs/page-tracking.html#auto-track-with-custom-data
     *
     */
    autoTracking: {
      pageviewTemplate: (route) => ({
        page: route.fullPath,
        title: document.title,
        location: window.location.href,
      }),
    },
  }
]
