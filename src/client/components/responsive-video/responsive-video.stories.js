import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import ResponsiveVideo from './'
import VueI18n from 'vue-i18n'

storiesOf('Responsive video', module)
  .addDecorator(withReadme(readme))
  .add('Vimeo default', () => ({
    components: { ResponsiveVideo },
    template: '<responsive-video :video="video" />',
    data() {
      return {
        video: {
          "url": "https://vimeo.com/265601385",
          "title": "A New Campaign - PickUp10",
          "width": 640,
          "height": 360,
          "provider": "vimeo",
          "providerUid": "265601385",
          "thumbnailUrl": "https://i.vimeocdn.com/video/695812178_640.jpg",
          "autoplay": false,
        }
      }
    },
    i18n: new VueI18n({
      locale: 'en',
    })
  }))
  .add('Vimeo with autoplay', () => ({
    components: { ResponsiveVideo },
    template: '<responsive-video :video="video" />',
    data() {
      return {
        video: {
          "url": "https://vimeo.com/265601385",
          "title": "A New Campaign - PickUp10",
          "width": 640,
          "height": 360,
          "provider": "vimeo",
          "providerUid": "265601385",
          "thumbnailUrl": "https://i.vimeocdn.com/video/695812178_640.jpg",
          "autoplay": true,
        }
      }
    },
    i18n: new VueI18n({
      locale: 'en',
    })
  }))
  .add('YouTube default', () => ({
    components: { ResponsiveVideo },
    template: '<responsive-video :video="video" />',
    data() {
      return {
        video: {
          "url": "https://www.youtube.com/watch?v=ZPIIT6siIaE&list=PL8HcoiB7g3NlaU-UU1boptT4tkz3KOXT2",
          "title": "Een surfer neemt het op tegen de plastic vervuiling",
          "width": 480,
          "height": 270,
          "provider": "youtube",
          "providerUid": "ZPIIT6siIaE",
          "thumbnailUrl": "https://i.ytimg.com/vi/ZPIIT6siIaE/hqdefault.jpg",
          "autoplay": false
        }
      }
    },
    i18n: new VueI18n({
      locale: 'en',
    })
  }))
  .add('YouTube with autoplay', () => ({
    components: { ResponsiveVideo },
    template: '<responsive-video :video="video" />',
    data() {
      return {
        video: {
          "url": "https://www.youtube.com/watch?v=ZPIIT6siIaE&list=PL8HcoiB7g3NlaU-UU1boptT4tkz3KOXT2",
          "title": "Een surfer neemt het op tegen de plastic vervuiling",
          "width": 480,
          "height": 270,
          "provider": "youtube",
          "providerUid": "ZPIIT6siIaE",
          "thumbnailUrl": "https://i.ytimg.com/vi/ZPIIT6siIaE/hqdefault.jpg",
          "autoplay": true
        }
      }
    },
    i18n: new VueI18n({
      locale: 'en',
    })
  }))
