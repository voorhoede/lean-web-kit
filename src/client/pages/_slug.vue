<template>
  <div>
    <page-layout :page="page"/>

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
import appConfig from '../static/data/app.json'

export default {
  components: { LazyTracking, PageLayout, SocialShare },

  async asyncData ({ app, params, store }) {
    const { slug } = params
    const page = await getPageData({ slug, locale: app.i18n.locale })
    store.commit('setSlugI18n', page.slugI18n)
    return { page }
  },

  head () {
    return seoHead({ ...this.page.seo, titleTemplate: `%s | ${ appConfig.title }` })
  }
}
</script>
