import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import LanguageSelector from './'

export const i18n = () => {
  return new VueI18n({
    locale: 'en',
    messages: {
      en: {
        skip_to_content: 'Skip to content',
      }
    },
  })
}

export const mockLocales = (locales) => {
  return locales.map(locale => ({
    code: locale,
    iso: locale,
    name: locale,
  }))
}

storiesOf('Language selector', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
      components: { LanguageSelector },
      template: `
        <div>
          <demo title="With two locales" style="margin-bottom:3rem;">
            <language-selector :locales="twoLocales"/>
          </demo>
          <demo title="With more than two locales">
            <language-selector :locales="moreThanTwoLocales" />
          </demo>
        </div>`,
      data() {
        return {
          twoLocales: mockLocales(['en', 'nl']),
          moreThanTwoLocales: mockLocales(['en', 'nl', 'pt', 'fr', 'it'])
        }
      },
      i18n: i18n()
  }))
