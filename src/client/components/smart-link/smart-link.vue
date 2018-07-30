<template>
  <nuxt-link v-if="item.type === 'page'" :to="pageUrl" >
    {{ item.title }}
  </nuxt-link>
  <a v-else :href="item.url" data-outbound="true" target="_blank" rel="noopener">
    {{ item.title }}
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      validator(item) {
        if (typeof item.title !== 'string') {
          return false
        }
        if (item.type === 'page') {
          return typeof item.slug === 'string'
        } else {
          return typeof item.url === 'string'
        }
      }
    }
  },
  computed: {
    pageUrl() {
      const { item, localePath } = this
      const url =localePath({ name: 'slug', params: { slug: item.slug } })
      return url.endsWith('/') ? url : `${url}/`
    }
  }
}
</script>
