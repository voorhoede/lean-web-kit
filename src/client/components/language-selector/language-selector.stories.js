import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import LanguageSelector from './'

storiesOf('Language selector', module)
  .add('Default', () => ({
      components: { LanguageSelector },
      template: `<language-selector :locales="locales" />`,
      data() {
        return {
          locales: ['en', 'nl'].map(locale => ({
            code: locale,
            iso: locale,
            name: locale,
          }))
        }
      },
      i18n: new VueI18n({
        locale: 'en',
      })
  }))
