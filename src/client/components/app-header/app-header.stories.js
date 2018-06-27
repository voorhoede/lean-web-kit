import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import AppHeader from './'

storiesOf('App header', module)
  .add('Default', () => ({
    components: { AppHeader },
    template: '<app-header />',
    i18n: new VueI18n({
      locale: 'en',
      messages: {
        en: {
          skip_to_content: 'Skip to content',
        }
      },
    }),
  }))
  .add('With action button', () => ({
    components: { AppHeader },
    template: '<app-header :action="action" />',
    data () {
      return {
        action: {
          title: "Sign up",
        }
      }
    },
    i18n: new VueI18n({
      locale: 'en',
      messages: {
        en: {
          skip_to_content: 'Skip to content',
        }
      },
    }),
  }))
  .add('With language selection', () => ({
    components: { AppHeader },
    template: '<app-header />',
    i18n: new VueI18n({
      locale: 'en',
      messages: {
        en: {
          skip_to_content: 'Skip to content',
        }
      },
    }),
    created() {
      // mock locales required for language selector
      this.$i18n.locales = ['en', 'nl'].map(locale => ({
        code: locale,
        iso: locale,
        name: locale,
      }))
  }
}))
.add('With action button and language selection', () => ({
  components: { AppHeader },
  template: '<app-header :action="action" />',
  data () {
    return {
      action: {
        title: "Sign up",
      }
    }
  },
  i18n: new VueI18n({
    locale: 'en',
    messages: {
      en: {
        skip_to_content: 'Skip to content',
      }
    },
  }),
  created() {
    // mock locales required for language selector
    this.$i18n.locales = ['en', 'nl'].map(locale => ({
      code: locale,
      iso: locale,
      name: locale,
    }))
  }
}))
