<template>
  <div class="page">
    <header class="page__header">
      <h1 class="page__title">{{ page.title }}</h1>
      <p class="page__subtitle" v-if="page.subtitle">{{ page.subtitle }}</p>
    </header>

    <div class="page__content">
      <div class="page__content__sidebar" v-if="page.hasToc">
        <table-of-contents :items="page.tocItems" />
      </div>

      <div class="page__content__main-content">
        <content-section v-for="(section, index) in page.sections" :key="index" :section="section" />
      </div>
    </div>
  </div>
</template>

<script>
import { ContentSection, TableOfContents } from '../components/'
import { getPageData, seoHead } from '../lib/'

export default {
  components: { ContentSection, TableOfContents },
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
.page__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 4rem;
  padding-bottom: 3rem;
}

.page__header::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  width: 300px;
  border-bottom: 1px solid var(--action-color);
}

.page__title {
  margin-bottom: 1rem;
  margin-top: auto;
  font-size: 4rem;
  font-weight: bold;
}

.page__content {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;
}

.page__content__sidebar {
  width: 300px;
}

.page__content__main-content {
  max-width: 600px;
}

@media screen and (max-width: 900px) {
  .page__content {
    flex-direction: column;
    align-items: center;
  }

  .page__content__sidebar {
    width: 100%;
    max-width: 600px;
    margin-bottom: 2rem;
  }
}

@media screen and (max-width: 450px) {
  .page__title {
    font-size: 3rem;
  }
}
</style>

