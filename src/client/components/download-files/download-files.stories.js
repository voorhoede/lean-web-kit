import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import DownloadFiles from './'

const mockFileUrl = 'data:font/woff2;base64,d09GMgABAAAAAADwAAoAAAAAAiQAAACoAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAALAogOAE2AiQDBgsGAAQgBSAHIBuDAciO1EZ3I/mL5/+5/rfPnTt9/9Qa8H4cUUZxaRbh36LiKJoVh61XGzw6ufkpoeZBW4KphwFYIJGHB4LAY4hby++gW+6N1EN94I49v86yCpUdYgqeZrOWN34CMQg2tAmthdli0eePIwAKNIIRS4AGZFzdX9lbBUAQlm//f262/61o8PlYO/D1/X4FrWFFgdCQD9DpGJSxmFyjOAGUU4P0qigcNb82GAAA'

storiesOf('Download files', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { DownloadFiles },
    template: '<download-files :files="files" />',
    data: () => ({
      "files": [
        {
          "title": "Report of the Royal Commission on Genetic Modification 2018",
          "file": {
            "id": "333",
            "format": "pdf",
            "url": mockFileUrl
          },
        },
        {
          "title": "Clean Energy Trends",
          "file": {
            "id": "323",
            "format": "doc",
            "url": mockFileUrl
          },
        }
      ]
    }),
  }),
  )
