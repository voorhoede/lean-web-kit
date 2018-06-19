<template>
  <header role="banner" class="app-header">
    <nuxt-link :to="localePath('index')">
      <h1>Lean Web Kit</h1>
    </nuxt-link>
    <a :href="`#${contentId}`">{{ $t('skip_to_content') }}</a>
    <nav>
      <h2 class="a11y-sr-only">{{ menu.title }}</h2>
      <ul class="inline-list">
        <li v-for="item in menu.items" :key="item.slug">
          <nuxt-link :to="localePath({ name: 'slug', params: { slug: item.slug } })"
            class="app-header__menu-link"
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
      <language-selector :locales="$i18n.locales" />
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
@import '../app-core/index.css';

.app-header__menu-link {
  text-decoration: none;
}

.app-header__menu-link {
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
}

.app-header__menu-link:focus,
.app-header__menu-link:hover {
  color: var(--action-color);
}

.app-header__menu-link.nuxt-link-active {
  font-weight: bold;
  border-bottom-color: var(--action-color);
}
</style>
