import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import LinkList from './'

const unordered = {
  "ordered": false,
  "links": [
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
  ],
  "type": "link_list",
}

const ordered = Object.assign({}, unordered, { "ordered": true })

storiesOf('Link list', module)
  .addDecorator(withReadme(readme))
  .add('Unordered list', () => ({
    components: { LinkList },
    template: `
      <link-list
        :links="item.links"
        :ordered="item.ordered" />`,
    data: () => ({ item: unordered }),
  }))
  .add('Ordered list', () => ({
    components: { LinkList },
    template: `
      <link-list
        :links="item.links"
        :ordered="item.ordered" />`,
    data: () => ({ item: ordered }),
  }))
