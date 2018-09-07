import VueI18n from 'vue-i18n';
import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import readme from './readme.md';
import ContactForm from './';

storiesOf('Contact form', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { ContactForm },
    template: `
    <demo title="Contact form" style="margin-bottom:3rem;" inset knobs>
      <contact-form :form="form" />
    </demo>`,
    data: () => ({
      form: {
        id: '356659',
        body: 'Send us en email and we will reply within 24 hours.',
        title: 'Contact Us',
        labelName: text('Name label', 'Your name'),
        labelEmail: text('Email label', 'Your email'),
        labelMessage: text('Message label', 'Your message'),
        labelSubmitButton: text('Submit button label', 'Send message')
      }
    }),
    i18n: new VueI18n({ locale: 'en' })
  }));
