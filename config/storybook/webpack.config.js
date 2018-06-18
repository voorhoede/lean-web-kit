const path = require('path')
const nuxtConfig = require('../../nuxt.config.js')

const nuxtRootDir = path.resolve(`${__dirname}/../../src/client`)

module.exports = (baseConfig, env, defaultConfig) => {
  const isDev = (env === 'DEVELOPMENT')
  const isClient = true
  defaultConfig.resolve.alias = {
    vue$: 'vue/dist/vue.esm.js',
    '~': nuxtRootDir,
    '~~': nuxtRootDir,
  }
  // TODO: share loaders between Nuxt and Storybook (does not work like this)
  // nuxtConfig.build.extend(defaultConfig, {isDev, isClient})

  return defaultConfig
}
