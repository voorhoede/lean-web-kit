import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import SocialShare from './'
import VueI18n from 'vue-i18n'

const i18n = () => {
  return new VueI18n({
    locale: 'en',
    messages: {
      en: {
        show_sharing_options: 'Show sharing options',
        hide_sharing_options: 'Hide sharing options',
        share_on_platform: 'Share on',
        copy_to_clipboard: 'Copy to clipboard',
        link_copied_to_clipboard: 'Link copied to clipboard',
      }
    },
  })
}

storiesOf('Social Share', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { SocialShare },
    template: `<div><social-share :url="url" :title="title" :description="description" /></div>`,
    data () {
      return {
        url: 'https://leanwebkit.voorhoede.nl/',
        title: 'Lean Web Kit',
        description: 'A product by De Voorhoede',
      }
    },
    i18n: i18n()
  }))
