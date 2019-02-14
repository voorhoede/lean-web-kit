<template>
  <nuxt-link :active-class="activeClass" v-if="item.type === 'page'" :to="localeUrl(namedRouteObject(item))" >
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
          if (item.isHome) {
            return true
          } else {
            return typeof item.slug === 'string'
          }
        } else {
          return typeof item.url === 'string'
        }
      }
    },
    activeClass: {
      type: String,
      required: false,
      default: '',
    }
  },
  methods: {
    namedRouteObject(item) {
      return item.isHome
        ? { name: 'index' }
        : {
          name: 'slug',
          params: {
            slug: item.slug
          }
        }
    }
  }
}
</script>
