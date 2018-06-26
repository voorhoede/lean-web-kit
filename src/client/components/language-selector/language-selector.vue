<template>
  <ul class="language-selector">
    <li class="language-selector__item" v-for="locale in locales" :key="locale.code">
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
  props: ['locales'],
  computed: {
    slugI18n() { return this.$store.state.slugI18n },
    isSlugRoute() { return this.$route.name === `slug${this.$i18n.routesNameSeparator}${this.$i18n.locale}` },
  },
}
</script>

<style>
.language-selector {
  display: flex;
  justify-content: center;
  padding: 0;
}

.language-selector__item {
  text-transform: uppercase;
  list-style-type: none;
}

.language-selector__item:not(:last-child) {
  margin-right: 1rem;
}
</style>

