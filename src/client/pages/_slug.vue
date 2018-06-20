<template>
  <div>
    <h1>{{ page.title }}</h1>
    <table-of-contents v-if="page.hasToc" :items="page.tocItems" />
    <content-section v-for="(section, index) in page.sections" :key="index" :section="section" />
  </div>
</template>

<script>
import { ContentSection, TableOfContents } from '../components/'
import { getPageData, seoHead } from '../lib/'

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
  computed: {},
}
</script>
