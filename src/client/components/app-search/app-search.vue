<template>
  <div>
    <form :action="`/${$i18n.locale}/search/`" method="get">
      <input
        type="search"
        @input="onChange"
        v-model.trim="searchTerm"
        placeholder="Type to search"
        class="form-control" />
    </form>

    <div class="search-results">
      <div v-if="searchResultsCount">{{ searchResultsCount }} results found</div>
      <ol>
        <li
          v-for="(searchResult, index) in searchResults"
          :key="index">
          <h2 class="search-results__title"><nuxt-link :to="`/${$i18n.locale}/${searchResult.slug}`">{{ searchResult.title }}</nuxt-link></h2>
          <rich-text :text="searchResult.body" />
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import RichText from '../rich-text'

export default {
  components: { RichText },
  props: {
    pages: {
      type: Array,
      required: false
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
      this.pages.forEach(page => {
        const index = page.body.indexOf(this.searchTerm)
        if (this.searchTerm.length >= 3 && index !== -1) {
          const body = this.trimSearchResult({ page, index })
          const resultPage = Object.assign({}, page, { body })
          this.searchResults.push(resultPage)
        }
      })
      this.searchResultsCount = this.searchResults.length
    },
    trimSearchResult({ page, index }) {
      const highlightTerm = page.body.substring(index, index + this.searchTerm.length)
      const searchResultBody = `...${page.body.slice(index - 50, index + 50)}...`
      const highlightSearchResult = searchResultBody.replace(highlightTerm, `<span class="search-results__highlight">${highlightTerm}</span>`)
      return highlightSearchResult
    }
  }
}
</script>

<style>
.search-results__title {
  font-size: 1rem;
}

.search-results__highlight {
  background-color: yellow;
}
</style>
