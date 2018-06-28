<template>
  <main class="page">
    <page-header :title="page.title" :subtitle="page.subtitle" />

    <div class="page__content">
      <div class="page__content__sidebar" v-if="page.hasToc">
        <table-of-contents :items="page.tocItems" />
      </div>

      <div class="page__content__main-content">
        <content-section v-for="(section, index) in page.sections" :key="index" :section="section" />
      </div>
    </div>
  </main>
</template>

<script>
import { ContentSection, TableOfContents, PageHeader } from '../components/'
import { getPageData, seoHead } from '../lib/'

export default {
  components: { ContentSection, TableOfContents, PageHeader },
  async asyncData ({ app, params, store }) {
    const { slug } = params
    const page = await getPageData({ slug, locale: app.i18n.locale })
    store.commit('setSlugI18n', page.slugI18n)
    return { page }
  },
  head () {
    return seoHead(this.page.seo)
  },
  computed: {},
}
</script>

<style>
@import '../components/app-core/index.css';

.page__content {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0 var(--spacing-default);
  max-width: 920px;
}

.page__content__sidebar {
  display: none;
}

@media screen and (min-width: 880px) {
  .page__content {
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 var(--spacing-double);
  }

  .page__content__sidebar {
    display: block;
    flex-grow: 1;
    margin-right: var(--spacing-double);
    max-width: 300px;
  }
}
</style>
