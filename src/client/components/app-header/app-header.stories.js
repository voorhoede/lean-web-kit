import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import AppHeader from './'
import menuItems from './app-header.stories.json'

const i18n = () => {
  return new VueI18n({
    locale: 'en',
    messages: {
      en: {
        skip_to_content: 'Skip to content',
      }
    },
  })
}

const mockLocales = () => {
  return ['en', 'nl'].map(locale => ({
    code: locale,
    iso: locale,
    name: locale,
  }))
}

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
    i18n: i18n()
  }))
  .add('With action button', () => ({
    components: { AppHeader },
    template: '<app-header :menuI18n="menu" />',
    data () {
      return {
        menu: menuItems.menuWithAction,
      }
    },
    i18n: i18n()
  }))
  .add('With language selection', () => ({
    components: { AppHeader },
    template: '<app-header :menuI18n="menu" />',
    data () {
      return {
        menu: menuItems.defaultMenu,
      }
    },
    i18n: i18n(),
    created() {
      // mock locales required for language selector
      this.$i18n.locales = mockLocales()
    }
  }))
  .add('With action button and language selection', () => ({
    components: { AppHeader },
    template: '<app-header :menuI18n="menu" />',
    data () {
      return {
        menu: menuItems.menuWithAction,
      }
    },
    i18n: i18n(),
    created() {
      // mock locales required for language selector
      this.$i18n.locales = mockLocales()
    }
  }))
