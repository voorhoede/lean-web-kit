<template>
  <ul>
    <li v-for="locale in $i18n.locales" :key="locale.code">
      <nuxt-link v-if="isSlugRoute"
        rel="alternate"
        :hreflang="locale.code"
        :to="localePath({ name: 'slug', params: { slug: slugI18n[locale.code] } }, locale.code)">
        {{ locale.name }}
      </nuxt-link>
      <nuxt-link v-else
        rel="alternate"
        :hreflang="locale.code"
        :to="switchLocalePath(locale.code)">
        {{ locale.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    slugI18n() { return this.$store.state.slugI18n },
    isSlugRoute() { return this.$route.name === `slug${this.$i18n.routesNameSeparator}${this.$i18n.locale}` },
  },
}
</script>
