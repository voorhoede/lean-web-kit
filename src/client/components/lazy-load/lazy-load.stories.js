import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import LazyLoad from './'
import ResponsiveImage from '../responsive-image'

storiesOf('Lazy load', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { ResponsiveImage, LazyLoad },
    template: '<div><responsive-image :image="imageSquare" /><responsive-image :image="imageLarge" /><responsive-image :image="imageSmall" /></div>',
    data() {
      return {
        imageSquare: {
          "format": "jpeg",
          "width": 500,
          "height": 500,
          "alt": "",
          "url": "https://picsum.photos/500/500"
        },
        imageLarge: {
          "format": "jpeg",
          "width": 1200,
          "height": 400,
          "alt": "",
          "url": "https://picsum.photos/1200/400"
        },
        imageSmall: {
          "format": "jpeg",
          "width": 600,
          "height": 250,
          "alt": "",
          "url": "https://picsum.photos/600/250"
        }
      }
    },
  }))