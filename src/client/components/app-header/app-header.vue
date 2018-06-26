<template>
  <header role="banner" class="app-header">
    <nuxt-link :to="localePath('index')" class="app-header__identity">
      <img class="app-header__logo" src="/images/logo.svg" alt="" />
      <h1 class="app-header__title">Lean Web Kit</h1>
    </nuxt-link>
    <a class="a11y-sr-only" :href="`#${contentId}`">{{ $t('skip_to_content') }}</a>
    <transition name="slide-in">
      <nav class="app-header__navigation">
        <h2 class="a11y-sr-only">{{ menu.title }}</h2>
        <ul class="app-header__inline-list">
          <li class="app-header__list-item" v-for="item in menu.items" :key="item.slug">
            <nuxt-link :to="localePath({ name: 'slug', params: { slug: item.slug } })"
              class="app-header__menu-link"
            >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
        <language-selector :locales="$i18n.locales" />
      </nav>
    </transition>
    <button class="app-header__toggle-menu" @click="toggleNavigation" >
      <span class="a11y-sr-only">Toggle navigation</span>
      <svg class="menu__icon" :class="{ 'is-open': showNavigation }" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100">
        <g>
          <path class="line line-1" fill="#000000" d="M5 13h90v14H5z"/>
          <path class="line line-2" fill="#000000" d="M5 43h90v14H5z"/>
          <path class="line line-3" fill="#000000" d="M5 73h90v14H5z"/>
        </g>
      </svg>
    </button>
  </header>
</template>

<script>
import menuI18n from '../../static/data/menu.json'
import LanguageSelector from '../language-selector'

export default {
  components: { LanguageSelector },
  props: ['contentId'],
  data () {
    return { 
      menuI18n,
      windowWidth: 0,
      showNavigation: false,
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    menu() { return this.menuI18n[this.locale] },
  },
  methods: {
    toggleNavigation () {
      this.showNavigation = !this.showNavigation
    }
  }

}
</script>

<style>
@import '../app-core/index.css';

.app-header__identity:hover {
  border: none;
}

.app-header__toggle-menu {
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  height: var(--app-header-height);
  box-shadow: 0 2px 15px 0 rgba(214,214,214,.5);
  z-index: 1;
}

.app-header__identity {
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;
}

.app-header__navigation {
  position: absolute;
  top: var(--app-header-height);
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0px 11px 14px rgba(214,214,214,.3);
}

.app-header__inline-list {
  padding: 0;
  margin-bottom: 2rem;
  text-align: center;
}

.app-header__list-item {
  list-style-type: none;
  padding: 1rem 0;
}

.app-header__logo {
  height: 50px;
  transform: rotate(35deg);
}

.app-header__title {
  font-size: 1.125rem;
}

.app-header__menu-link {
  padding-bottom: 1rem;
  color: var(--text-color);
  text-transform: uppercase;
  text-decoration: none;
}

.app-header__menu-link:focus,
.app-header__menu-link:hover {
  border-bottom: 2px solid var(--action-color);
}

.is-open .line-1 {
  transform: rotate(45deg) translateY(0) translateX(0);
  transform-origin: 1em 2.7em;

}

.is-open .line-2 {
  opacity: 0;
}

.is-open .line-3 {
  transform: rotate(-45deg) translateY(0em) translateX(0em);
  transform-origin: 1em 3.7em;
}

.is-open .line,
.line {
  transition: all .2s ease-in-out;
}
</style>
