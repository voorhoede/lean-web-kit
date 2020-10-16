<template>
  <nuxt-link :active-class="activeClass" v-if="item.__typename === 'LinkRecord'" :to="localeUrl({ name: 'slug', params: { slug: item.page.slug } })" >
    {{ item.title }}
  </nuxt-link>
  <a v-else :href="item.page.slug" data-outbound="true" target="_blank" rel="noopener">
    {{ item.title }}
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      // validator(item) {
      //   if (typeof item.title !== 'string') {
      //     return false
      //   }
      //   if (item.type === 'page') {
      //     return typeof item.slug === 'string'
      //   } else {
      //     return typeof item.url === 'string'
      //   }
      // }
      required: true,
    },

    activeClass: {
      type: String,
      required: false,
      default: '',
    },
  },

  // data() {
  //   return {
  //     slug: this.item.page.slug
  //   }
  // },
}
</script>
