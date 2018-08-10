import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import ContactForm from './'

storiesOf('Contact form', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { ContactForm },
    template: '<contact-form :form="form" />',
    data: () => ({
      "form": {
        "id": "356659",
        "body": "Ut aliquid scire se gaudeant? Bonum incolumis acies: misera caecitas. Qui igitur convenit ab alia voluptate dicere naturam proficisci, in alia summum bonum ponere? Num quid tale Democritus? Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? Negare non possum. ",
        "title": "Contact us",
        "labelName": text("label name", "Your name"),
        "labelEmail": text("label email", "Your email"),
        "labelMessage": text("label message", "Your message"),
        "labelSubmitButton": text("label submit button", "Send message"),
      },
    }),
    i18n: new VueI18n({ locale: 'en' }),
  }),
)
