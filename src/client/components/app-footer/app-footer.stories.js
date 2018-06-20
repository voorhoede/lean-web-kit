import { storiesOf } from '@storybook/vue'
import AppFooter from './'

storiesOf('App footer', module)
  .add('Default', () => ({
    components: { AppFooter },
    template: '<app-footer />'
  }))
