<template>
  <div>
    <h1>{{ page.title }}</h1>
    <table-of-contents :items="tocItems" />
    <content-section v-for="(section, index) in sections" :key="index" :section="section" />
  </div>
</template>

<script>
import { ContentSection, TableOfContents } from '../components/'
import { getPageData, pick, seoHead } from '../lib/'

export default {
  components: { ContentSection, TableOfContents },
  async asyncData ({ app, params, store }) {
    const { slug } = params
    const page = await getPageData({ slug, locale: app.i18n.locale })
    store.commit('setSlugI18n', page.slugI18n)
    return { page }
  },
  head () {
    return seoHead(this.page.seo)
  },
  computed: {
    sections() { return this.page.sections },
    tocItems() { return this.sections.map(section => pick(section, ['title', 'slug'])) },
  },
}
</script>
