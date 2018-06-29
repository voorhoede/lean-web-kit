<template>
  <header role="banner" class="app-header">
    <nuxt-link :to="localePath('index') + '/'">
      <h1>Lean Web Kit</h1>
    </nuxt-link>
    <a :href="`#${contentId}`">{{ $t('skip_to_content') }}</a>
    <nav>
      <h2 class="a11y-sr-only">{{ menu.title }}</h2>
      <ul class="inline-list">
        <li v-for="(item, index) in menu.items" :key="index">
          <smart-link :item="item" class="app-header__menu-link" />
        </li>
      </ul>
      <language-selector :locales="$i18n.locales" />
      <smart-link v-if="menu.callToAction" :item="menu.callToAction" class="app-header__menu-link" />
    </nav>
  </header>
</template>

<script>
import LanguageSelector from '../language-selector'
import SmartLink from '../smart-link'

export default {
  components: { LanguageSelector, SmartLink },
  props: ['contentId', 'menuI18n'],
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
  border-bottom-color: var(--action-color);
}
</style>
