<template>
  <ul class="language-selector">
    <li class="language-selector__item" v-for="locale in locales" :key="locale.code">
      <nuxt-link v-if="isSlugRoute"
        class="language-selector__link"
        rel="alternate"
        :hreflang="locale.code"
        :to="localePath({ name: 'slug', params: { slug: slugI18n[locale.code] } }, locale.code)">
        {{ locale.name }}
      </nuxt-link>
      <nuxt-link v-else
        class="language-selector__link"
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
  margin-right: var(--spacing-half);
  text-transform: uppercase;
  list-style-type: none;
}

.language-selector__item:not(:last-child) {
  border-right: 1px solid var(--action-color);
  padding-right: var(--spacing-half);
}

.language-selector__link {
  font-size: var(--font-size-small);
}
</style>

