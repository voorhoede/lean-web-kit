/**
 * @see https://nuxtjs.org/api/configuration-build
 */
module.exports = {
  postcss: [
    require('postcss-import')(),
    require('postcss-custom-properties')(),
    require('autoprefixer')(),
  ],
  /*
  ** Run ESLint on save
  */
  extend(config, { isDev }) {
    config.module.rules.forEach((rule) => {
      if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/') {
        rule.test = /\.(png|jpe?g|gif|webp)$/
      }
    })

    if (isDev && process.client) {
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
