<template>
  <div>
    <page-layout :page="page"/>

    <social-share
      v-if="page.hasShareButton"
      :url="page.slug"
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

  async asyncData ({ app, params, store }) {
    const locale = app.i18n.locale
    const { slug } = params
    store.commit('setSlugI18n', slug)
    return await getDatoData({
      query,
      variables: {
        locale,
        slug
      }
    })
  },

  head () {
    return seoHead({ ...this.page.seo, titleTemplate: `%s | ${ appConfig.title }` })
  }
}
</script>
