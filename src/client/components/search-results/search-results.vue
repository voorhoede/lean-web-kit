<template>
  <ol class="search-results">
    <li
      v-for="(result, index) in results"
      :key="index">
      <h2 class="search-results__title">
        <nuxt-link :to="`/${$i18n.locale}/${result.slug}`" @click.native="$emit('close')">{{ result.title }}</nuxt-link>
      </h2>
      <rich-text :text="result.body" />
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
    }
  },
  data () {
    return {
      closeSearchResults: false
    }
  },
  methods: {
    close () {
      this.closeSearchResults = true
    }
  }
}
</script>
