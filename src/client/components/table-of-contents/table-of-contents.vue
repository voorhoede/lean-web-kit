<template>
  <nav class="table-of-contents" id="table-of-contents">
    <h2 class="a11y-sr-only">{{ $t('table_of_contents') }}</h2>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <a :href="`#${item.slug}`">
          {{ item.title }}
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    handleScroll () {
      const tableOfContents = document.getElementById('table-of-contents')
      
      if (scrollY > 315) {
        tableOfContents.classList.add('fixed-left')
      } else {
        tableOfContents.classList.remove('fixed-left')
      }
    }
  },

  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>

.table-of-contents {
  margin: 0 2rem;
}

.fixed-left {
  position: fixed;
  top: 100px;
  left: 0;
}

.table-of-contents li {
  padding: .7rem 0;
}
</style>
