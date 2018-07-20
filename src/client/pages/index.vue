<template>
  <div>
    <page-layout :page="page" />

    <social-share
      v-if="page.hasShareButton"
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
  
  async asyncData ({ app }) {
    const page = await getPageData({ slug: 'home', locale: app.i18n.locale })
    
    return { page }
  },

  head () {
    return seoHead(this.page.seo)   
  },
}
</script>
