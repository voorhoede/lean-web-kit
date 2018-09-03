import VueI18n from 'vue-i18n'
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
      singleBtnItem: [
        {
          "type": "page",
          "title": "Configure headers",
          "slug": "configure-response-headers",
          "theme": "button",
        },
      ],
      multipleBtnItems: [
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
          <button-group :items="singleBtnItem" />
        </demo>
        <demo title="Multiple buttons" inset>
          <button-group :items="multipleBtnItems" />
        </demo>
      </div>
      `,
    i18n: new VueI18n({
      locale: 'en'
    })
  }))