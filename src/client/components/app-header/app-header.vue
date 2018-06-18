<template>
  <header role="banner" class="app-header">
    <nuxt-link :to="localePath('index')">
      <h1>Lean Web Kit</h1>
    </nuxt-link>
    <a :href="`#${contentId}`">{{ $t('skip_to_content') }}</a>
    <nav>
      <h2 class="a11y-sr-only">{{ menu.title }}</h2>
      <ul>
        <li v-for="item in menu.items" :key="item.slug">
          <nuxt-link :to="localePath({ name: 'slug', params: { slug: item.slug } })">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
      <language-selector />
    </nav>
  </header>
</template>

<script>
import menuI18n from '../../static/data/menu.json'
import LanguageSelector from '../language-selector'

export default {
  components: { LanguageSelector },
  props: ['contentId'],
  data () {
    return { menuI18n }
  },
  computed: {
    locale() { return this.$i18n.locale },
    menu() { return this.menuI18n[this.locale] },
  },
}
</script>

<style>
.app-header .nuxt-link-active {
  font-weight: bold;
}
</style>
