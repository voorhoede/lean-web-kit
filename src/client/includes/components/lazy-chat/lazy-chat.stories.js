import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'

import { isSupported as localStorageSupported } from '../../lib/local-storage.js'

import readme from './readme.md'
import LazyChat from './'

storiesOf('Lazy chat', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { LazyChat },
    template: `
    <div>
        <demo title="Lazy Chat" inset>
          <lazy-chat />
        </demo>
        <button class="button" @click="revokeAcceptance">
          Revoke Acceptance
        </button>
      </div>

    `,
    methods: {
      revokeAcceptance () {
        if (localStorageSupported) {
          localStorage.removeItem('terms_conditions')
        }
      }
    },
    i18n: new VueI18n({
      locale: 'en',
    })
  }))
