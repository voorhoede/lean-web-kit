<template>
  <div>
    <page-layout :page="page" />

    <nuxt-link to="/give-me-a-404">Give me a 404</nuxt-link>

    <social-share
      v-if="page.hasShareButton"
      :url="page.url"
      :title="page.seo.title"
      :description="page.seo.description"
    />

    <lazy-tracking v-if="page.hasHotjar" />
  </div>
</template>

<script>
import { LazyTracking, PageLayout, SocialShare } from '../components/'
import { getPageData, seoHead } from '../lib/'

export default {
  components: { LazyTracking, PageLayout, SocialShare },

  async asyncData ({ app }) {
    const page = await getPageData({ slug: 'home', locale: app.i18n.locale })

    return { page }
  },

  head () {
    return seoHead(this.page.seo)
  },
}
</script>
