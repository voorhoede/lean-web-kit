import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'

import { isSupported as localStorageSupported } from '../../lib/local-storage.js'

import readme from './readme.md'
import OptIn from './'

import '../app-core/index.css'

storiesOf('Opt-in', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { OptIn },
    template: `
      <div>
        <demo title="Opt-in" inset>
          <div style="box-shadow: 1px 2px 20px #ddd;">
            <opt-in :title="title" :body="body" :name="name" @accept="isAccepted = true" />
          </div>
        </demo>
        <button class="button" @click="revokeAcceptance">
          Revoke Acceptance
        </button>
      </div>`,
    data () {
      return {
        isAccepted: false,
        name: 'demo',
        title: 'About us',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea dictumst. Turpis egestas sed tempus urna et pharetra pharetra massa massa.'
      }
    },
    methods: {
      revokeAcceptance () {
        if (localStorageSupported) {
          localStorage.removeItem(this.name)
        }
      }
    },
    i18n: new VueI18n({
      locale: 'en',
    })
  }))
