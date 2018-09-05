import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import ButtonGroup from './'

storiesOf('Button group', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: {
      ButtonGroup
    },
    data: () => ({
      singleItem: [
        {
          "type": "page",
          "title": "Configure headers",
          "slug": "configure-response-headers",
          "theme": "button",
        },
      ],
      multipleItems: [
        {
          "type": "page",
          "title": "Configure headers",
          "slug": "configure-response-headers",
          "theme": "primary button",
        },
        {
          "type": "page",
          "title": "Edit your footer",
          "slug": "edit-your-footer",
          "theme": "button",
        },
      ],
    }),
    template: `
      <div>
        <demo title="Single button" inset>
          <button-group :items="singleItem" />
        </demo>
        <demo title="Multiple buttons" inset>
          <button-group :items="multipleItems" />
        </demo>
      </div>
      `
  }))