<template>
  <main class="page">
    <page-header :title="page.title" :subtitle="page.subtitle" />

    <div class="page__content">
      <div class="page__sidebar" v-if="page.hasToc">
        <table-of-contents :items="page.tocItems" />
      </div>

      <div class="page__content__main-content">
        <content-section v-for="(section, index) in page.sections" :key="index" :section="section"  :id="section.slug"/>
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
    top: 80px;
    flex-grow: 1;
    margin: 0 var(--spacing-double) 0 0;
    max-width: 300px;
  }
}
</style>
