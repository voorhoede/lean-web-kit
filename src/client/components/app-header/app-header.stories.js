import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import { checkA11y } from '@storybook/addon-a11y';
import readme from './readme.md'
import AppHeader from './'

storiesOf('App header', module)
  .addDecorator(withReadme(readme), checkA11y)
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
    created() {
      // mock locales required for language selector
      this.$i18n.locales = ['en', 'nl'].map(locale => ({
        code: locale,
        iso: locale,
        name: locale,
      }))
    }
  }))
