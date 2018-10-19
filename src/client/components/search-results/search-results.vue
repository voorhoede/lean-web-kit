<template>
  <ol class="search-results">
    <li
      v-for="(result, index) in results"
      :key="index">
      <h2 class="search-results__title" @mousedown="onClick(index)">
        <nuxt-link :to="`/${locale}/${result.slug}`">{{ result.title }}</nuxt-link>
      </h2>
      <rich-text :text="result.body" class="search-results__body" />
    </li>
  </ol>
</template>

<script>
import RichText from '../rich-text'

export default {
  components: { RichText },
  props: {
    results: {
      type: Array,
      required: true
    },
  },
  methods: {
    /**
       * Using mousedown event with a router push to make links in the search results work combined
       * with the blur event on the <app-search /> component.
       */
    onClick (index) {
      this.$emit('close')
      this.$router.push({ path: `/${this.locale}/${ this.results[index].slug }` })
    }
  },
  computed: {
    locale () {
      return this.$i18n.locale
    }
  }
}
</script>

<style>
.search-results {
  position: absolute;
  top: calc(100% + var(--spacing-half));
  height: 300px;
  width: 100%;
  padding: var(--spacing-default);
  z-index: 1;
  list-style: none;
  overflow: hidden;
  overflow-y: auto;
  background: var(--background-color);
  border-radius: var(--border-radius-small);
  border: 1px solid var(--text-light-color);
  box-shadow: var(--shadow-small-grey);
}

.search-results .search-results__title {
  font-size: var(--spacing-default);
}

.search-results__highlight {
  background-color: #ffff37;
}

.search-results__body {
  color: var(--text-light-color);
}

@media (min-width: 600px) {
  .search-results {
    width: 300px;
  }
}

@media (min-width: 790px) {
  .search-results {
    width: 400px;
  }
}
</style>
