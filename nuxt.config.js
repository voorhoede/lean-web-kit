const isProduction = (process.env.NODE_ENV === 'production')
const pages = require('./src/client/static/data/pages.json')

module.exports = {
  srcDir: 'src/client/',

  generate: {
    dir: 'dist/client/',
    routes: [
      ...pages.map(page => `/${page.slug}/`)
    ],
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Lean Web Kit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lean Web Kit to kick-start your web project.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  proxy: { // https://github.com/nuxt-community/proxy-module
    '/.netlify/functions/': {
      target: 'http://localhost:9000/',
      pathRewrite: { '^/.netlify/functions/': '' },
    }
  },

  modules: [
    '@nuxtjs/proxy',
  ],


  css: [
    'normalize.css'
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: [
      require('postcss-custom-properties')()
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
