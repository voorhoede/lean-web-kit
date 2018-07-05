import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import ContentSection from './'

import '../app-core/index.css'

storiesOf('Content section', module)
  .addDecorator(withReadme(readme))
  .add('With text', () => ({
    components: { ContentSection },
    template: '<div><content-section v-for="(section, index) in sections" :key="index" :section="section" /></div>',
    data () {
      return {
        "sections": [
          {
            "title": "Lorem ipsum",
            "slug": "lorem-ipsum",
            "items": [
              {
                "body": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                "type": "text"
              }
            ]
          }
        ]
      }
    },
  }))
  .add('With text and image', () => ({
    components: { ContentSection },
    template: '<div><content-section v-for="(section, index) in sections" :key="index" :section="section" /></div>',
    data () {
      return {
        "sections": [
          {
            "title": "Lorem ipsum",
            "slug": "lorem-ipsum",
            "items": [
              {
                "body": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                "type": "text"
              },
              {
                "image": {
                    "format": "jpeg",
                    "size": 29514,
                    "width": 360,
                    "height": 360,
                    "title": "landscape",
                    "alt": "Mountain landscape with a cloudy sky",
                    "url": "https://www.datocms-assets.com/6068/1529671983-random-image-square.jpeg"
                },
                "type": "image"
              }
            ]
          }
        ]
      }
    },
  }))
  .add('With text and video', () => ({
    components: { ContentSection },
    template: '<div><content-section v-for="(section, index) in sections" :key="index" :section="section" /></div>',
    data () {
      return {
        "sections": [
          {
            "title": "Lorem ipsum",
            "slug": "lorem-ipsum",
            "items": [
              {
                "body": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                "type": "text"
              },
              {
                "video": {
                  "url": "https://vimeo.com/265601385",
                  "title": "A New Campaign - PickUp10",
                  "width": 640,
                  "height": 360,
                  "provider": "vimeo",
                  "providerUid": "265601385",
                  "thumbnailUrl": "https://i.vimeocdn.com/video/695812178_640.jpg"
                },
                "type": "video"
              }
            ]
          }
        ]
      }
    },
  }))