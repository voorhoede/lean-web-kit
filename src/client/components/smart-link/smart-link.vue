<template>
  <nuxt-link
    v-if="item.page && item.__typename === 'LinkRecord'"
    :active-class="activeClass"
    :to="localeUrl({ name: 'slug', params: { slug: item.page.slug } })"
  >
    {{ item.title || item.page.title }}
  </nuxt-link>
  <a v-else
     :href="item.url"
     data-outbound="true"
     target="_blank"
     rel="noopener noreferrer">
    {{ item.title }}
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    activeClass: {
      type: String,
      required: false,
      default: '',
    }
  },
}
</script>
