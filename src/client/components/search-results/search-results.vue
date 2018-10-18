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
    locale: {
      type: String,
      required: true
    }
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
  }
}
</script>

<style>
.search-results__body {
  color: var(--text-light-color);
}
</style>
