<template>
  <main>
  </main>
</template>

<script>
import { ContentSection, TableOfContents, PageHeader, SocialShare } from '../components/'
import { getPageData, seoHead } from '../lib/'

export default {
  components: { ContentSection, TableOfContents, PageHeader, SocialShare },
  
  async asyncData ({ app, params, store }) {
    const { slug } = params
    const page = await getPageData({ slug, locale: app.i18n.locale })
    store.commit('setSlugI18n', page.slugI18n)
    return { page }
  },

  head () {
    return seoHead(this.page.seo)   
  },

  data () {
    return {
      url: '',
    }
  },

  computed: {
    shareText() { return this.page.seo.description },
    shareTitle() { return this.page.seo.title },
  },

  mounted () {
    this.url = window.location.href
  },

  methods: {
    shared (platform) {
      return this.$ga.social({
        socialNetwork: platform,
        socialAction: 'share',
        socialTarget: this.url
      })
    }
  }
}
</script>

<style>
</style>
