<template>
  <div>
    <form
      :action="`/${$i18n.locale}/search/`"
      method="get"
      class="form-search">
      <input
        type="search"
        @input="onChange"
        @click="onChange"
        v-model.trim="searchTerm"
        placeholder="Type to search"
        class="form-control" />
        <search-results
          v-if="showSearchResults"
          @close="onClose"
          :results="searchResults" />
    </form>
  </div>
</template>

<script>
import RichText from '../rich-text'
import SearchResults from '../search-results'

export default {
  components: { RichText, SearchResults },
  data () {
    return {
      searchTerm: '',
      searchResults: [],
      showSearchResults: false,
      pages: require(`~/static/data/search-${this.$i18n.locale}.json`)
    }
  },
  methods: {
    onClose() {
      this.showSearchResults = false
    },
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
      if (this.searchTerm === '' || this.searchResultsCount === 0) {
        this.showSearchResults = false
      } else {
        this.showSearchResults = true
      }
    },
    trimSearchResult({ page, index }) {
      const highlightTerm = page.body.substring(index, index + this.searchTerm.length)
      const searchResultBody = `...${page.body.slice(index - 50, index + 50)}...`
      return this.highlightSearchResult(searchResultBody, highlightTerm)
    },
    highlightSearchResult(str, highlightTerm) {
      return str.replace(highlightTerm, `<span class="search-results__highlight">${highlightTerm}</span>`)
    }
  },
  computed: {
    searchResultsCount () {
      return this.searchResults.length
    }
  }
}
</script>

<style>
.form-search {
  position: relative;
}

.search-results {
  list-style: none;
  padding: var(--spacing-default);
  position: absolute;
  top: calc(100% + var(--spacing-half));
  height: 300px;
  width: 400px;
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
  background-color: yellow;
}
</style>
