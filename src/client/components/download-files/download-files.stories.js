import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import DownloadFiles from './'

const file1 = "test1.pdf"
const blob1 = new Blob([file1], { type: 'application/pdf' })
const url1 = window.URL || window.webkitURL
const downloadUrl1 = url1.createObjectURL(blob1)

storiesOf('Download files', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { DownloadFiles },
    template: '<download-files :files="files" />',
    data: () => ({
      "files": [
        {
          "file": {
            "id": "333",
            "format": "pdf",
            "url": downloadUrl1
          },
          "title": "Report of the Royal Commission on Genetic Modification 2018"
        },
        {
          "file": {
            "id": "323",
            "format": "doc",
            "url": "https://www.datocms-assets.com/6068/1534418800-slabo-27px-v4-latin-regular.ttf"
          },
          "title": "Clean Energy Trends"
        }
      ]
    }),
  }),
  )
