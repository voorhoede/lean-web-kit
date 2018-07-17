<template>
  <div>
    <page-layout :page="page"/>
    
    <social-share
      v-if="page.sharingButton"
      :url="page.url" 
      :title="page.seo.title" 
      :description="page.seo.description"
    />
  </div>
</template>

<script>
import { PageLayout, SocialShare } from '../components/'
import { getPageData, seoHead } from '../lib/'

export default {
  components: { PageLayout, SocialShare },
  
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
