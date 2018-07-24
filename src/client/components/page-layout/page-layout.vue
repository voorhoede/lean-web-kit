<template>
  <div class="page-layout">
    <page-header :title="page.title" :subtitle="page.subtitle" :image="page.coverImage" />

    <div class="page-layout__body">
      <div
        v-if="page.hasToc && page.tocItems.length"
        class="page-layout__sidebar"
      >
        <table-of-contents :items="page.tocItems" />
      </div>

      <div class="page-layout__sections">
        <content-section 
          v-for="(section, index) in page.sections" 
          :key="index" 
          :section="section" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContentSection from '../content-section'
import PageHeader from '../page-header'
import TableOfContents from '../table-of-contents'

export default {
  components: { ContentSection, PageHeader, TableOfContents },
  
  props: {
    page: { type: Object, required: true }
  },
}
</script>

<style>
@import '../app-core/index.css';

.page-layout__body {
  margin: 0 auto;
  padding: 0 var(--spacing-default);
  max-width: 920px;
}

.page-layout__sidebar {
  margin: 0 auto var(--spacing-double) auto;
  width: 100%;
  max-width: var(--max-width);
}

@media screen and (min-width: 880px) {
  .page-layout__body {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 var(--spacing-double);
  }

  .page-layout__sidebar {
    position: sticky;
    top: calc(var(--app-header-height) + var(--spacing-double));
    flex-grow: 1;
    margin: 0 var(--spacing-double) 0 0;
    max-width: 300px;
  }
}
</style>
