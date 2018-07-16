<template>
  <div>
    <page-layout :page="page"/>
    <social-share :url="url" :title="shareTitle" :description="shareText" @shared='shared' />
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

  methods: {
    shared (platform) {
      return this.$ga.social({
        socialNetwork: platform,
        socialAction: 'share',
        socialTarget: this.url
      })
    }
  },

  computed: {
    shareText() { return this.page.seo.description },
    shareTitle() { return this.page.seo.title },
  },

  data () {
    return {
      url: '',
    }
  },

  mounted () {
    this.url = window.location.href
  }
}
</script>
