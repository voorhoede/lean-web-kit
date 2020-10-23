<template>
  <div>
    <page-layout :page="home" />

    <social-share
      v-if="home.hasShareButton"
      :url="this.$route.fullPath"
      :title="home.seo.title"
      :description="home.seo.description"
    />
    <lazy-tracking v-if="home.hasHotjar" />
  </div>
</template>

<script>
import { LazyTracking, PageLayout, SocialShare } from '../components/'
import { seoHead } from '../lib/'
import getDatoData from '~/lib/get-page-data';
import query from './index.query.graphql'

export default {
  components: { LazyTracking, PageLayout, SocialShare },

  async asyncData ({ app }) {
    const locale = app.i18n.locale
    return await getDatoData({
      query,
      variables: {
        locale
      }
    })
  },

  head () {
    return seoHead(this.home.seo)
  },
}
</script>
