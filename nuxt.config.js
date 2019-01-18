import build from './config/nuxt/build'
import css from './config/nuxt/css'
import env from './config/nuxt/env'
import generate from './config/nuxt/generate'
import head from './config/nuxt/head'
import loading from './config/nuxt/loading'
import modules from './config/nuxt/modules'
import plugins from './config/nuxt/plugins'
import proxy from './config/nuxt/proxy'
import router from './config/nuxt/router'
import sitemap from './config/nuxt/sitemap'

export default {
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
