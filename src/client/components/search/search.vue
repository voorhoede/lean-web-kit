<template>
  <div class="search">
    <vue-fuse
      :keys="keys"
      :list="pages"
      event-name="handleUpdate"
      :default-all="false"
      threshold=0.2
    >
    </vue-fuse>
    <ul class="flat-list search__list">
      <li
        class="search__list-item"
        v-for="result in results"
        :key="result.id">
        {{result.body}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'search',
  data () {
    return {
      results: [],
      keys: ["title", "body"],
      pages: [
        {
          title: "About us",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          id: 1
        },
        {
          title: "Frequently Asked Question",
          body: "Officia deserunt mollit anim id est laborum",
          id: 2
        },
        {
          title: "Contact",
          body: "Enim ad minim veniam, quis nostrud exercitation.",
          id: 3
        },
      ]
    }
  },
  created () {
    this.$on('handleUpdate', results => {
      this.results = results
    })
  }
}
</script>
