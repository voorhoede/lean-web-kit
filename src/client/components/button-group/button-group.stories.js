import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import ButtonGroup from './'

storiesOf('Button group', module)
  .addDecorator(withReadme(readme))
  .add('Single button', () => ({
      components: {
          ButtonGroup
      },
      data: () => ({
          items: [
              {
                  "type": "page",
                  "title": "Configure headers",
                  "slug": "configure-response-headers",
                  "theme": "button",
              },
          ],
      }),
      template: '<button-group :items="items" />',
      i18n: new VueI18n({
          locale: 'en'
      })
  }))
  .add('Multiple buttons', () => ({
    components: {
      ButtonGroup
    },
    data: () => ({
      items: [
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
    template: '<button-group :items="items" />',
    i18n: new VueI18n({
      locale: 'en'
    })
  }))
