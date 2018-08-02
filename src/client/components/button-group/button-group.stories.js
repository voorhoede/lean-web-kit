import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import SmartLinks from './'

storiesOf('Smart Links', module)
  .addDecorator(withReadme(readme))
  .add('One link', () => ({
      components: {
          SmartLinks
      },
      data: () => ({
          items: [
              {
                  "type": "page",
                  "title": "Configure headers",
                  "slug": "configure-response-headers",
                  "theme": "default",
              },
          ],
      }),
      template: '<smart-links :items="items" />',
      i18n: new VueI18n({
          locale: 'en'
      })
  }))
  .add('Multiple links', () => ({
    components: {
      SmartLinks
    },
    data: () => ({
      items: [
        {
          "type": "page",
          "title": "Configure headers",
          "slug": "configure-response-headers",
          "theme": "primary",
        },
        {
          "type": "page",
          "title": "Edit your footer",
          "slug": "edit-your-footer",
          "theme": "default",
        },
      ],
    }),
    template: '<smart-links :items="items" />',
    i18n: new VueI18n({
      locale: 'en'
    })
  }))
