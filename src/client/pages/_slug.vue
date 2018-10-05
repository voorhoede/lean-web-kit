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
    <app-search :pages="pages" />
  </div>
</template>

<script>
import AppSearch from '../components/app-search'
import { LazyTracking, PageLayout, SocialShare } from '../components/'
import { getPageData, getPagesData, seoHead } from '../lib/'

export default {
  components: { AppSearch, LazyTracking, PageLayout, SocialShare },

  async asyncData ({ app, params, store }) {
    const { slug } = params
    const page = await getPageData({ slug, locale: app.i18n.locale })
    const pages = await getPagesData({ locale: app.i18n.locale })

    store.commit('setSlugI18n', page.slugI18n)
    return { page, pages }
  },

  head () {
    return seoHead(this.page.seo)
  }
}
</script>
