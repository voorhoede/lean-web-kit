import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import LinkList from './'

const links = [
  {
    "type": "page",
    "title": "Guides",
    "slug": "guides"
  },
  {
    "type": "url",
    "title": "Code",
    "url": "https://github.com/voorhoede/lean-web-kit"
  },
  {
    "type": "page",
    "title": "Start Now",
    "slug": "getting-started"
  }
]

storiesOf('Link list', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { LinkList },
    template: `
      <div>
        <demo title="Unordered list" inset>
          <link-list :links="links" :ordered="false" />
        </demo>
        <demo title="Ordered list" inset>
          <link-list :links="links" :ordered="true" />
        </demo>
      </div>
    `,
    data: () => ({ links }),
  }))
