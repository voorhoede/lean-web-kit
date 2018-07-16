<template>
  <page-layout v-if="page" :page="page" />
</template>

<script>
import { PageLayout } from '../components/'
import { getPageData, seoHead } from '../lib/'

export default {
  components: { PageLayout },
  
  async asyncData ({ app, params, store }) {
    const { slug } = params
    const page = await getPageData({ slug, locale: app.i18n.locale })
    store.commit('setSlugI18n', page.slugI18n)
    return { page }
  },

  head () {
    return seoHead(this.page.seo)   
  },
}
</script>
