<template>
  <div class="page-layout">
    <page-header :title="page.title" :subtitle="page.subtitle" :image="page.coverImage" />

    <div class="page-layout__body">
      <div class="page-layout__sidebar" v-if="page.hasToc && page.tocItems.length">
        <table-of-contents :items="page.tocItems" />
      </div>

      <div class="page-layout__content">
        <content-section v-for="(section, index) in page.sections" :key="index" :section="section" :id="section.slug" />
      </div>
    </div>
  </div>
</template>

<script>
import { ContentSection, TableOfContents, PageHeader } from '../'

export default {
  components: { ContentSection, TableOfContents, PageHeader },
  
  props: {
    page: { type: Object, required: true }
  },
}
</script>

<style>
@import '../app-core/index.css';

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
