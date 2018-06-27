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
  flex-direction: column;
  align-items: center;
}

.page__content__sidebar {
  width: 300px;
  margin-right: var(--spacing-double);
}

.page__content__main-content {
  max-width: var(--max-width);
}

@media screen and (min-width: 880px) {
  .page__content {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 var(--spacing-default);
    max-width: 920px;
  }

  .page__content__sidebar {
    width: 100%;
    max-width: var(--max-width);
    margin-right: 0;
    margin-bottom: var(--spacing-double);
  }
}
</style>
