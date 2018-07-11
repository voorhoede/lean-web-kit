<template>
  <main class="page">
    <page-header :title="page.title" :subtitle="page.subtitle" :image="page.coverImage" />

    <div class="page__content">
      <div class="page__sidebar" v-if="page.hasToc && page.tocItems.length">
        <table-of-contents :items="page.tocItems" />
      </div>

      <div class="page__content__main-content">
        <content-section v-for="(section, index) in page.sections" :key="index" :section="section"  :id="section.slug"/>
      </div>
    </div>

    <social-share
      :url="url"
      :title="shareTitle"
      :description="shareText"
      @shared='shared'
    />
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
@import '../components/app-core/index.css';

.page__content {
  margin: 0 auto;
  padding: 0 var(--spacing-default);
  max-width: 920px;
}

.page__sidebar {
  margin: 0 auto var(--spacing-double) auto;
  width: 100%;
  max-width: var(--max-width);
}

@media screen and (min-width: 880px) {
  .page__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 var(--spacing-double);
  }

  .page__sidebar {
    position: sticky;
    top: calc(var(--app-header-height) + var(--spacing-double));
    flex-grow: 1;
    margin: 0 var(--spacing-double) 0 0;
    max-width: 300px;
  }
}
</style>
