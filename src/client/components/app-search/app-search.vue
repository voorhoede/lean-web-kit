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
          <p>title: {{ searchResult.title }}</p>
          <p>section title: {{ searchResult.section.title }}</p>
          <p>section body: {{ searchResult.section.body }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import fusejs from 'fuse.js'

export default {
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
        threshold: 0.3,
        minMatchCharLength: 3,
        keys: ['title', 'section.title', 'section.body']
      }

      const fuse = new fusejs(this.pages, options)
      this.searchResults = fuse.search(this.searchTerm)
    }
  }
}
</script>

