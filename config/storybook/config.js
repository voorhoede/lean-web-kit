import path from 'path'
import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'

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
 * mock nuxt-i18n localePath & switchLocalePath
 * https://nuxt-community.github.io/nuxt-i18n/basic-usage.html#nuxt-link
 */
Vue.mixin({
  created() {
    this.localePath = (options, locale) => `/${locale}`
    this.switchLocalePath = locale => `/${locale}`
  }
})

Vue.component('NuxtLink', {
  props:   ['to'],
  template: '<a :href="to"><slot>RouterLink</slot></a>',
})

const nuxtRootDir = `${__dirname}/../../src/client`
// const req = require.context(`${nuxtRootDir}/components`, true, /\.stories\.js$/)

function loadStories() {
    //req.keys().map(path => req(path))
    require(`${__dirname}/../../src/client/components/app-footer/app-footer.stories`)
    require(`${__dirname}/../../src/client/components/app-header/app-header.stories`)
    require(`${__dirname}/../../src/client/components/language-selector/language-selector.stories`)
    require(`${__dirname}/../../src/client/components/responsive-image/responsive-image.stories`)
    require(`${__dirname}/../../src/client/components/responsive-video/responsive-video.stories`)
    require(`${__dirname}/../../src/client/components/rich-text/rich-text.stories`)
    require(`${__dirname}/../../src/client/components/table-of-contents/table-of-contents.stories`)
}

setOptions({
  name: 'Lean Web Kit',
  url: '#'
})

configure(loadStories, module)
