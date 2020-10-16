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
import { seoHead } from '../lib/'
import getDatoData from '~/lib/get-page-data';
import appConfig from '../static/data/app.json'
import query from "./_slug.query.graphql";

export default {
  components: { LazyTracking, PageLayout, SocialShare },

  // async asyncData ({ app, params, store }) {
  //   const { slug } = params
  //   const page = await getPageData({ slug, locale: app.i18n.locale })
  //   store.commit('setSlugI18n', page.slugI18n)
  //   return { page }
  // },

  async asyncData ({ app, params, store }) {
    const locale = app.i18n.locale
    const { slug } = params
    const page = await getDatoData({
      query,
      variables: {
        locale,
        slug
      }
    })
    store.commit('setSlugI18n', page.slug)
    return { page }
  },

  head () {
    return seoHead({ ...this.page.seo, titleTemplate: `%s | ${ appConfig.title }` })
  }
}
</script>
