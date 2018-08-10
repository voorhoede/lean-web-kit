import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import EmailForm from './'

storiesOf('Email form', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { EmailForm },
    template: '<email-form :form="form" />',
    data: () => ({
      "form": {
        "id": "356659",
        "confirmationMessage": "<p>You're all done. We'll send you an email soon.</p>",
        "confirmationPage": null,
        "labelSubmitButton": "Get access",
        "labelEmail": text("label email", "We just need your email address"),
        "body": text("body", "<p>The Lean Web Kit is still in its early stages. If you're a dare devil, you can already get access now.</p>"),
        "title": "Get beta access"
      },
    }),
    i18n: new VueI18n({ locale: 'en' }),
  }),
)
