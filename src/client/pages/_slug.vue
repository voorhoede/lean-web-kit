<template>
  <div class="page" id="page">
    <header class="page-header">
        <h1>{{ page.title }}</h1>
        <p class="page-header__subtitle" v-if="page.subtitle">{{ page.subtitle }}</p>
    </header>

    <table-of-contents v-if="page.hasToc" :items="page.tocItems" />
    <div class="content">
      <content-section v-for="(section, index) in page.sections" :key="index" :section="section" />
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
.page {
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "header header"
    "sidebar content";
}

.page-header {
  grid-area: header;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 4rem;
  padding-bottom: 3rem;
}

.page-header::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  width: 300px;
  border-bottom: 1px solid var(--action-color);
}

.page-header h1 {
  margin-bottom: 1rem;
  margin-top: auto;
  font-size: 4rem;
  font-weight: bold;
}

.table-of-contents {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}
</style>

