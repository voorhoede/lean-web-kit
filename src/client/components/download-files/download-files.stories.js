import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import DownloadFiles from './'

storiesOf('Download files', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { DownloadFiles },
    template: '<download-files :files="files" />',
    data: () => ({
      "files": [
        {
          "id": "364027",
          "slug": "josefin-sans-300",
          "file": {
            "format": "woff2",
            "url": "https://www.datocms-assets.com/6068/1534418780-josefin-sans-300.woff2"
          },
          "title": "Josefin Sans 300"
        },
        {
          "id": "364028",
          "slug": "slabo",
          "file": {
            "format": "ttf",
            "url": "https://www.datocms-assets.com/6068/1534418800-slabo-27px-v4-latin-regular.ttf"
          },
          "title": "Josefin Sans 300"
        }
      ]
    }),
  }),
  )
