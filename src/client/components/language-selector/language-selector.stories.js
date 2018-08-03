import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import LanguageSelector from './'

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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et metus interdum, blandit nibh non, mattis eros. Nunc eu risus et diam fringilla sagittis. Sed ac scelerisque purus. Phasellus ex massa, elementum et congue non, bibendum quis mi. Aliquam fringilla augue lorem. Morbi imperdiet volutpat maximus. Duis fermentum iaculis tortor at dictum. Phasellus eu eleifend mi. Donec libero ante, euismod sed felis et, condimentum elementum magna. Pellentesque cursus eros vulputate nisl sollicitudin, ut varius ex dignissim. Duis sagittis elit ac turpis commodo, sed efficitur lacus rhoncus. Curabitur leo orci, consequat et gravida in, molestie eget ex. In hac habitasse platea dictumst. Aenean non ultricies mauris, sed sagittis felis.</p>
            Donec sed cursus elit, sed euismod magna. Nam at vulputate justo. Proin euismod ex et efficitur tincidunt. Curabitur nibh magna, tempor at facilisis a, faucibus pulvinar felis. Praesent dictum metus vitae dui commodo eleifend. Morbi ornare pharetra elementum. Nam id tellus augue. Aliquam mattis ligula quis quam molestie iaculis. Maecenas in sagittis purus, eget dignissim erat. Nullam sodales eget ligula ac tristique. Donec placerat enim a libero commodo convallis. Pellentesque iaculis turpis arcu, id feugiat diam tempus at.
          </demo>
        </div>`,
      data() {
        return {
          twoLocales: mockLocales(['en', 'nl']),
          moreThanTwoLocales: mockLocales(['en', 'nl', 'pt', 'fr', 'it'])
        }
      },
      i18n: new VueI18n({
        locale: 'en',
        messages: {
          en: {
            select_language: 'Select language',
          }
        },
      }),
      store: new Vuex.Store(),
  }))
