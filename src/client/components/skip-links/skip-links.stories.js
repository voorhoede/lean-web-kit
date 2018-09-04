import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import SkipLinks from './'

storiesOf('Skip links', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { SkipLinks },
    template: '<skip-links />',
    i18n: new VueI18n({
      locale: 'en'
    })
  }))
