import { storiesOf } from '@storybook/vue'
import ResponsiveVideo from './'

storiesOf('Responsive video', module)
  .add('Default', () => ({
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
          "thumbnailUrl": "https://i.vimeocdn.com/video/695812178_640.jpg"
        }
      }
    },
  }))
