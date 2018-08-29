import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import AppHeader from './'
import menuItems from './app-header.stories.json'
import { mockLocales, i18n } from '../language-selector/language-selector.stories'
import Vuex from 'vuex'

storiesOf('App header', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { AppHeader },
    template: '<app-header :menuI18n="menu" />',
    data () {
      return {
        menu: menuItems.defaultMenu,
      }
    },
    i18n: new VueI18n({
      locale: 'en'
    })
  }))
  .add('With action button', () => ({
    components: { AppHeader },
    template: '<app-header :menuI18n="menu" />',
    data () {
      return {
        menu: menuItems.menuWithAction,
      }
    },
    i18n: new VueI18n({
      locale: 'en'
    })
  }))
  .add('With language selection dropdown', () => ({
    components: { AppHeader },
    template: '<app-header :menuI18n="menu" />',
    data () {
      return {
        menu: menuItems.defaultMenu,
      }
    },
    i18n: new VueI18n({
      locale: 'en'
    }),
    created() {
      // mock locales required for language selector
      this.$i18n.locales = mockLocales(['en', 'nl', 'fr', 'pt'])
    },
    store: new Vuex.Store(),
  }))
  .add('With action button and language selection', () => ({
    components: { AppHeader },
    template: '<app-header :menuI18n="menu" />',
    data () {
      return {
        menu: menuItems.menuWithAction,
      }
    },
    i18n: new VueI18n({
      locale: 'en'
    }),
    created() {
      // mock locales required for language selector
      this.$i18n.locales = mockLocales(['en', 'nl'])
    },
    store: new Vuex.Store(),
  }))
