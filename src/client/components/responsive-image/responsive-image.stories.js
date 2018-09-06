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
  .add('SVG', () => ({
    components: { ResponsiveImage },
    template: '<responsive-image :image="image" />',
    data() {
      return {
        image: {
          "format": "svg",
          "url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMTg5cHgiIHZpZXdCb3g9IjAgMCAyNTYgMTg5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KCQk8Zz4KCQkJCTxwb2x5Z29uIGZpbGw9IiM0OEI4ODQiIHBvaW50cz0iMTA5Ljc3NjYgMC4wMDA5IC0wLjAwMDQgMTg4LjIyNTkgMjE5LjU1MjYgMTg4LjIyNTkiPjwvcG9seWdvbj4KCQkJCTxwb2x5Z29uIGZpbGw9IiMzRjdGNzAiIHBvaW50cz0iNzIuODM2MSAxODguMjI2IDI1NS45OTkxIDE4OC4yMjYgMTY0LjQxODEgMzEuMTk4Ij48L3BvbHlnb24+CgkJCQk8cG9seWdvbiBmaWxsPSIjMzY0OTVEIiBwb2ludHM9IjcyLjgzNjEgMTg4LjIyNiAyMTkuNTUyMSAxODguMjI2IDE0Ni4xOTQxIDYyLjQ0NCI+PC9wb2x5Z29uPgoJCTwvZz4KPC9zdmc+Cg=="
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
