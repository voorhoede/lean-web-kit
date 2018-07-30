import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'

import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'

setOptions({
  name: 'Lean Web Kit',
  url: '#',
  showLeftPanel: true,
  showDownPanel: true,
  downPanelInRight: true,
})

Vue.use(VueAnalytics, {
  debug: { enabled: true, sendHitTask: false },
  id: 'UA-MOCK-X',
})
Vue.use(VueI18n)
Vue.use(Vuex)

/**
 * mock nuxt router
 * https://nuxtjs.org/guide/routing
 */
Vue.mixin({
  created() {
    this.$route = {}
  }
})

/**
 * mock nuxt-i18n localePath, switchLocalePath and the locale URLs plugin
 * @see https://nuxt-community.github.io/nuxt-i18n/basic-usage.html#nuxt-link
 * @see https://github.com/voorhoede/lean-web-kit/tree/master/src/client/plugins/locale-urls.js
 */
Vue.mixin({
  created() {
    this.localePath = (options, locale) => `/${locale}`
    this.localeUrl = (options, locale) => `/${locale}`
    this.switchLocalePath = locale => `/${locale}`
    this.switchLocaleUrl = locale => `/${locale}`
  }
})

/**
 * Demo component to wrap story items in a consistent layout
 */
Vue.component('Demo', {
  props: { inset: { type: Boolean }, title: { type: String } },
  template: `
    <section>
      <h1 style="padding:16px; background-color:#F3F3F3; font-weight:700;">
        {{ title }}
      </h1>
      <div :style="inset ? 'padding:20px' : ''">
        <slot>Demo</slot>
      </div>
    </section>
  `,
})

/**
 * Mock nuxt-link
 * https://nuxtjs.org/api/components-nuxt-link/
 */
Vue.component('NuxtLink', {
  props: ['to'],
  template: '<a :href="to"><slot>RouterLink</slot></a>',
})

function importAll(r) {
  r.keys().forEach(r)
}

/**
 * Load stories
 * Note: don't try to move `${__dirname}/../../src/client/` to a variable,
 * it will cause errors as then Webpack can no longer statically determine required files.
 */
function loadStories() {
  importAll(
    require.context(`${__dirname}/../../src/client/`, true, /\.stories\.js$/)
  )
}

configure(loadStories, module)
