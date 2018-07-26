/**
 * @see https://nuxtjs.org/api/configuration-build
 */
module.exports = {
  vendor: ['babel-polyfill', 'unfetch/polyfill'],
  postcss: [
    require('postcss-import')(),
    require('postcss-custom-properties')(),
    require('autoprefixer')(),
  ],
  /*
  ** Run ESLint on save
  */
  extend (config, { isDev, isClient }) {
    // remove SVG from URL loader, so vue-svg-loader can be used for SVGs instead
    // based on https://github.com/nuxt/nuxt.js/issues/1332#issuecomment-321694185
    const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
    urlLoader.test = /\.(png|jpe?g|gif)$/

    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'vue-svg-loader'
    })
  }
}
