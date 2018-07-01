const path = require('path')
const nuxtConfig = require('../../nuxt.config.js')

const nuxtRootDir = path.resolve(`${__dirname}/../../src/client`)

module.exports = (baseConfig, env, defaultConfig) => {
  const isDev = (env === 'DEVELOPMENT')
  const isClient = true
  const urlLoader = defaultConfig.module.rules.find((rule) => /file-loader/.test(rule.loader))
  urlLoader.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/

  defaultConfig.resolve.alias = {
    vue$: 'vue/dist/vue.esm.js',
    '~': nuxtRootDir,
    '~~': nuxtRootDir,
  }

  defaultConfig.module.rules.push({
    test: /\.svg$/,
    loader: 'vue-svg-loader'
  })

  // TODO: share loaders between Nuxt and Storybook (does not work like this)
  // nuxtConfig.build.extend(defaultConfig, {isDev, isClient})

  return defaultConfig
}
