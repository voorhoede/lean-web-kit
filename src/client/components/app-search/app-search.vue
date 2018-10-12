<template>
  <div>
    <input
      type="search"
      @input="onChange"
      v-model.trim="searchTerm"
      placeholder="Search site" />
    <div>
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
        const hasFoundText = page.body.indexOf(this.searchTerm) !== -1
        if (this.searchTerm.length >= 3 && hasFoundText) {
          this.searchResults.push(page)
        }
      })
      this.searchResultsCount = this.searchResults.length
    }
  }
}
</script>
