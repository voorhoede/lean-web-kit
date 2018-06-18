import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import RichText from './'

storiesOf('Rich text', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
      components: { RichText },
      template: '<rich-text :text="dynamicText" />',
      data() {
        return {
          dynamicText: text('Text', '<strong>Rich</strong> text'),
        }
      },
  }))
