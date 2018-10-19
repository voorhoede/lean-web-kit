<template>
  <div>
    <form
      :action="`/${$i18n.locale}/search/`"
      method="get"
      class="form-search">
      <input
        type="search"
        @input="onChange"
        @focus="onChange"
        @blur="showSearchResults = false"
        spellcheck="false"
        autocomplete="off"
        v-model.trim="searchTerm"
        placeholder="Type to search"
        class="form-control" />
        <search-results
          v-if="showSearchResults"
          @close="onClose"
          :results="searchResults"
          :locale="$i18n.locale" />
    </form>
  </div>
</template>

<script>
import RichText from '../rich-text'
import SearchResults from '../search-results'

const trimCharacters = 50

export default {
  components: { RichText, SearchResults },
  data () {
    return {
      searchTerm: '',
      searchResults: [],
      showSearchResults: false,
      pages: require(`~/static/data/${this.$i18n.locale}/search.json`)
    }
  },
  methods: {
    onClose() {
      this.showSearchResults = false
    },
    onChange () {
      this.searchResults = []

      if (this.searchTerm.length < 3) {
        this.showSearchResults = false
        return
      }

      this.search()

      if (!this.searchResults.length) {
        this.showSearchResults = false
      } else {
        this.showSearchResults = true
      }
    },
    search () {
      this.pages.forEach(page => {
        const index = page.body.indexOf(this.searchTerm)
        if (this.searchTerm.length >= 3 && index !== -1) {
          const body = this.trimResult({ page, index })
          const resultPage = Object.assign({}, page, { body })
          this.searchResults.push(resultPage)
        }
      })
    },
    trimResult({ page, index }) {
      const highlightTerm = page.body.substring(index, index + this.searchTerm.length)
      const trimLeft = index < trimCharacters ? 0 : index - trimCharacters
      const searchResultBody = `...${page.body.slice(trimLeft, index + this.searchTerm.length + trimCharacters)}...`
      return this.highlightResult(searchResultBody, highlightTerm)
    },
    highlightResult(str, highlightTerm) {
      return str.replace(highlightTerm, `<span class="search-results__highlight">${highlightTerm}</span>`)
    }
  },
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
  width: 100%;
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
