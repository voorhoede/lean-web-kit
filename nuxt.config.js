const build = require('./config/nuxt/build')
const css = require('./config/nuxt/css')
const env = require('./config/nuxt/env')
const generate = require('./config/nuxt/generate')
const head = require('./config/nuxt/head')
const loading = require('./config/nuxt/loading')
const modules = require('./config/nuxt/modules')
const plugins = require('./config/nuxt/plugins')
const proxy = require('./config/nuxt/proxy')
const router = require('./config/nuxt/router')
const sitemap = require('./config/nuxt/sitemap')

module.exports = {
  build,
  css,
  env,
  generate,
  head,
  loading,
  modules,
  plugins,
  proxy,
  router,
  sitemap,
  srcDir: 'src/client/',
}
