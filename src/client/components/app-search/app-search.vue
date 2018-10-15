<template>
  <div>
    <input
      type="search"
      @input="onChange"
      v-model.trim="searchTerm"
      placeholder="Search site"
      class="app-search" />
    <div class="search-results">
      <div v-if="searchResultsCount">{{ searchResultsCount }} search results found</div>
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
      searchResults: [],
      searchResultsCount: 0
    }
  },
  methods: {
    onChange () {
      this.searchResults = []
      const findSearchTerm = this.pages.forEach(page => {
        const index = page.body.indexOf(this.searchTerm)
        const hasFoundText = index !== -1
        if (this.searchTerm.length >= 3 && hasFoundText) {
          page.body = this.trimSearchResult({ page, index })
          this.searchResults.push(page)
        }
      })
      this.searchResultsCount = this.searchResults.length
    },
    trimSearchResult({ page, index }) {
      console.log(page.title)
      let highlightTerm = page.body.substring(index, index + this.searchTerm.length)
      console.log(highlightTerm)
      highlightTerm = `...${page.body.slice(index - 15, index + 15)}...`
      return highlightTerm
    }
  }
}
</script>
