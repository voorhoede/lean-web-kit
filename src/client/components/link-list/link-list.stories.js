import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import LinkList from './'

storiesOf('Link list', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { LinkList },
    template: `
    <link-list
      :links="item.links"
      :showTitle="item.showTitle"
      :title="item.title" />`,
    data() {
      return {
        item: {
          "showTitle": true,
          "title": "Titel voor de link list",
          "links": [
            {
              "type": "page",
              "title": "Features",
              "slug": "features"
            },
            {
              "type": "page",
              "title": "Guides",
              "slug": "guides"
            },
            {
              "type": "url",
              "title": "Outbound",
              "url": "https://google.com"
            }
          ],
          "type": "link_list"
        },
      }
    },
  }))
