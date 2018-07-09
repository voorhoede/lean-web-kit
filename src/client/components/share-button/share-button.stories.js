import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import ShareButton from './'

storiesOf('Share Button', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { ShareButton },
    template: `<share-button :url="url"/>`,
    data () {
      return {
        url: 'https://leanwebkit.voorhoede.nl/'
      }
    }
  }))
