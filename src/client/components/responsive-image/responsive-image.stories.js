import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import ResponsiveImage from './'

storiesOf('Responsive image', module)
  .addDecorator(withReadme(readme))
  .add('Ratio 16x9', () => ({
    components: { ResponsiveImage },
    template: '<responsive-image :image="image" />',
    data() {
      return {
        image: {
          "format": "jpeg",
          "width": 1280,
          "height": 720,
          "alt": "Two hands forming a heart around the sun during a sunset",
          "url": "https://www.datocms-assets.com/6068/1529572359-random-image.jpeg"
        }
      }
    },
  }))
  .add('Ratio 1x1', () => ({
    components: { ResponsiveImage },
    template: '<responsive-image :image="image" />',
    data() {
      return {
        image: {
          "format": "jpeg",
          "width": 360,
          "height": 360,
          "alt": "Mountain landscape with a cloudy sky",
          "url": "https://www.datocms-assets.com/6068/1529671983-random-image-square.jpeg"
        }
      }
    },
  }))
  .add('Ratio 1x1 - with caption', () => ({
    components: { ResponsiveImage },
    template: '<responsive-image :image="image" />',
    data() {
      return {
        image: {
          "format": "jpeg",
          "width": 360,
          "height": 360,
          "title": "The view during our lunch break",
          "alt": "Mountain landscape with a cloudy sky",
          "url": "https://www.datocms-assets.com/6068/1529671983-random-image-square.jpeg"
        }
      }
    },
  }))
  .add('Broken image', () => ({
    components: { ResponsiveImage },
    template: '<responsive-image :image="image" />',
    data() {
      return {
        image: {
          "format": "jpeg",
          "width": 360,
          "height": 360,
          "title": "The view during our lunch break",
          "alt": "Mountain landscape with a cloudy sky",
          "url": "broken url"
        }
      }
    },
  }))