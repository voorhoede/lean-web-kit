<template>
  <div>
    <input
      type="search"
      @input="onChange"
      v-model.trim="searchTerm"
      placeholder="Search site" />
    <div>
      <ol>
        <li
          v-for="(searchResult, index) in searchResults"
          :key="index">
          <p><nuxt-link :to="`/${$i18n.locale}/${searchResult.slug}`">{{ searchResult.title }}</nuxt-link></p>
          <rich-text :text="searchResult.body" />
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import fusejs from 'fuse.js'
import RichText from '../rich-text'

export default {
  components: { RichText },
  props: {
    pages: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      searchTerm: '',
      searchResults: []
    }
  },
  methods: {
    onChange () {
      const options = {
        threshold: 0.4,
        shouldSort: true,
        minMatchCharLength: 3,
        keys: ['title', 'body']
      }

      const fuse = new fusejs(this.pages, options)
      this.searchResults = fuse.search(this.searchTerm)
    }
  }
}
</script>

