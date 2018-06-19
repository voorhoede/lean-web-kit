import VueI18n from 'vue-i18n'
import loremIpsum from 'lorem-ipsum'
import { storiesOf } from '@storybook/vue'
import TableOfContents from './'

storiesOf('Table of contents', module)
  .add('Default', () => ({
      components: { TableOfContents },
      template: `
        <article>
          <h1>Article with sections</h1>
          <table-of-contents :items="items" />
          <section v-for="(item, index) in items" :key="index" :id="item.slug">
            <h2>{{ item.title }}</h2>
            <p>{{ body }}</p>
          </section>
        </article>
      `,
      data() {
        return {
          items: [
            { slug: 'section-1', title: 'Section 1' },
            { slug: 'section-2', title: 'Section 2' },
            { slug: 'section-3', title: 'Section 3' },
            { slug: 'section-4', title: 'Section 4' },
          ],
          body: loremIpsum({ count: 10, units: 'sentences' })
        }
      },
      i18n: new VueI18n({
        locale: 'en',
        messages: {
          en: {
            table_of_contents: 'Table of Contents',
          }
        },
      })
  }))
