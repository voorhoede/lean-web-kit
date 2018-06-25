import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import PageHeader from './'

import '../app-core/index.css'

storiesOf('Page Header', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { PageHeader },
    template: `
      <div>
        <demo title="With title" inset>
          <page-header :title="title" />
        </demo>
        <demo title="With title and subtitle" inset>
        <page-header :title="title" :subtitle="subtitle" />
        </demo>
      </div>`,
    data () {
      return {
        title: 'About us',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea dictumst. Turpis egestas sed tempus urna et pharetra pharetra massa massa.'
      }
    },
  }))
  .add('With background-image', () => ({
    components: { PageHeader },
    data () {
      return {
        title: 'About us',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea dictumst. Turpis egestas sed tempus urna et pharetra pharetra massa massa.',
        image: {
          url: 'https://www.datocms-assets.com/6068/1529677077-photo-1529599087-bcf1dc4a7ae4.jpeg',
        }
      }
    },
    template: `
      <div>
        <demo title="With title and subtitle" inset>
          <page-header :title="title" :subtitle="subtitle" :image="image" />
        </demo>
        <demo title="With title" inset>
          <page-header :title="title" :image="image" />
        </demo>
      </div>`,
  }))