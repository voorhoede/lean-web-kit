import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import LazyChat from './'

storiesOf('Lazy chat', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { LazyChat },
    template: '<lazy-chat />',
    i18n: new VueI18n({
      locale: 'en',
    })
  }))
