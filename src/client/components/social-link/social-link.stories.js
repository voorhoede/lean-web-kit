import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import SocialLink from './'

storiesOf('Social link', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Twitter social link', () => ({
    data: () => ({
      link: {
        "id": "345657",
        "itemType": "social_link",
        "updatedAt": "2018-07-18T19:59:29.454Z",
        "createdAt": "2018-07-18T19:59:29.454Z",
        "url": "https://twitter.com/devoorhoede",
        "platform": "Twitter"
      },
    }),
    components: { SocialLink, },
    template: `<social-link :link="link" />
    </div>`
  }))
  .add('Multiple social links', () => ({
    data: () => ({
      socialLinks: [
        {
          "id": "345656",
          "itemType": "social_link",
          "updatedAt": "2018-07-18T19:56:45.362Z",
          "createdAt": "2018-07-18T19:56:45.362Z",
          "url": "https://www.facebook.com/DeVoorhoede/",
          "platform": "Facebook"
        },
        {
          "id": "345657",
          "itemType": "social_link",
          "updatedAt": "2018-07-18T19:59:29.454Z",
          "createdAt": "2018-07-18T19:59:29.454Z",
          "url": "https://twitter.com/devoorhoede",
          "platform": "Twitter"
        },
        {
          "id": "345658",
          "itemType": "social_link",
          "updatedAt": "2018-07-18T19:59:44.937Z",
          "createdAt": "2018-07-18T19:59:44.937Z",
          "url": "https://www.instagram.com/explore/locations/361118517306240/de-voorhoede/",
          "platform": "Instagram"
        },
        {
          "id": "345663",
          "itemType": "social_link",
          "updatedAt": "2018-07-18T20:00:06.706Z",
          "createdAt": "2018-07-18T20:00:06.706Z",
          "url": "https://www.youtube.com/channel/UCzHuhQVYFRixtQN2-swcuGg",
          "platform": "YouTube"
        },
        {
          "id": "345684",
          "itemType": "social_link",
          "updatedAt": "2018-07-18T20:00:32.491Z",
          "createdAt": "2018-07-18T20:00:32.491Z",
          "url": "https://www.linkedin.com/company/de-voorhoede",
          "platform": "LinkedIn"
        }
      ]
    }),
    components: { SocialLink, },
    template: `<div>
        <social-link
          v-for="link in socialLinks"
          :key="link.id"
          :link="link" />
      </div>`
  }))
