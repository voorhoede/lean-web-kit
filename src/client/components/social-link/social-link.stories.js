import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import SocialLink from './'

storiesOf('Social link', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => ({
    data: () => ({
      singleSocialLink:
      {
        "url": "https://twitter.com/devoorhoede",
        "platform": "Twitter"
      },
      multipleSocialLinks: [
        {
          "url": "https://www.facebook.com/DeVoorhoede/",
          "platform": "Facebook"
        },
        {
          "url": "https://twitter.com/devoorhoede",
          "platform": "Twitter"
        },
        {
          "url": "https://www.instagram.com/explore/locations/361118517306240/de-voorhoede/",
          "platform": "Instagram"
        },
        {
          "url": "https://www.youtube.com/channel/UCzHuhQVYFRixtQN2-swcuGg",
          "platform": "YouTube"
        },
        {
          "url": "https://www.linkedin.com/company/de-voorhoede",
          "platform": "LinkedIn"
        }
      ],
    }),
    components: { SocialLink, },
    template: `
      <div>
        <demo title="Single social link" inset>
          <social-link :platform="singleSocialLink.platform" :url="singleSocialLink.url" />
        </demo>
        <demo title="Multiple social links" inset>
          <social-link
            v-for="link in multipleSocialLinks"
            :key="link.id"
            :platform="link.platform"
            :url="link.url" />
        </demo>
      </div>
      `,
  }))