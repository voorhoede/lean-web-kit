/**
 * @see https://nuxtjs.org/api/configuration-plugins
 */
module.exports = [
  { src: '~/plugins/install-prompt', ssr: false },
  { src: '~/plugins/locale-urls' },
  { src: '~/plugins/mock-google-analytics' },
]
