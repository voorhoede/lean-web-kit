<template>
  <page-layout :page="page" />
</template>

<script>
import { PageLayout } from '../components/'
import { getPageData, seoHead } from '../lib/'

export default {
  components: { PageLayout },
  
  async asyncData ({ app, params, store }) {
    const page = await getPageData({ slug: 'home', locale: app.i18n.locale })
    
    return { page }
  },

  head () {
    return seoHead(this.page.seo)   
  },
}
</script>
