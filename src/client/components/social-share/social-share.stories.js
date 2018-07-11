import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import SocialShare from './'

storiesOf('Share Button', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { SocialShare },
    template: `<social-share :url="url"/>`,
    data () {
      return {
        url: 'https://leanwebkit.voorhoede.nl/'
      }
    }
  }))
