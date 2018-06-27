import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import AppFooter from './'

storiesOf('App footer', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { AppFooter },
    template: '<app-footer />'
  }))
