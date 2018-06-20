<template>
  <header role="banner" class="app-header">
    <nuxt-link :to="localePath('index')" class="app-header__identity">
      <img class="app-header__logo" src="/images/wings.svg" alt="" />
      <h1>Lean Web Kit</h1>
    </nuxt-link>
    <a class="a11y-sr-only" :href="`#${contentId}`">{{ $t('skip_to_content') }}</a>
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
      <!-- <language-selector :locales="$i18n.locales" /> -->
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

.app-header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 1rem;
  background-color: #fff;
  opacity: .9;
  box-shadow: 0 2px 15px 0 rgba(214,214,214,.5);
  z-index: 10000;
}

.app-header__identity {
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;
}

.app-header .inline-list {
  display: flex;
}

.app-header__logo {
  height: 50px;
  transform: rotate(35deg);
}

.app-header h1 {
  font-size: 1.125rem;
}

.app-header__menu-link {
  margin: 0 1rem;
  padding-bottom: 1rem;
  font-size: .875rem;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
}

.app-header__menu-link:focus,
.app-header__menu-link:hover {
  border-bottom: 2px solid var(--action-color);
}
</style>
