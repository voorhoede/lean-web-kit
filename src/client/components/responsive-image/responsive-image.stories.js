import { storiesOf } from '@storybook/vue'
import ResponsiveImage from './'

storiesOf('Responsive image', module)
  .add('Default', () => ({
    components: { ResponsiveImage },
    template: '<responsive-image :image="image" />',
    data() {
      return {
        image: {
          "format": "png",
          "size": 1193739,
          "width": 2878,
          "height": 1610,
          "title": "My caption",
          "alt": "My alt text",
          "url": "https://www.datocms-assets.com/6068/1528887636-screen-shot-2018-06-05-at-21-26-26.png"
        }
      }
    },
  }))
