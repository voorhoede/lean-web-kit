<template>
  <header role="banner" class="app-header">
    <nuxt-link :to="localePath('index')" class="app-header__identity">
      <img class="app-header__logo" src="/images/logo.svg" alt="" />
      <h1 class="app-header__title">Lean Web Kit</h1>
    </nuxt-link>
    
    <a class="a11y-sr-only" :href="`#${contentId}`">{{ $t('skip_to_content') }}</a>
    
    <nav class="app-header__navigation" :class="{ 'app-header__navigation--open' : menuIsOpen }">
      <h2 class="a11y-sr-only">{{ menu.title }}</h2>
      <ul class="app-header__inline-list">
        <li v-for="(item, index) in slicedMenu" :key="index" class="app-header__list-item">
          <smart-link :item="item" class="app-header__menu-link" />
        </li>
      </ul>
      <smart-link v-if="menu.callToAction" :item="menu.callToAction" class="app-header__call-to-action" />
      <language-selector :locales="$i18n.locales" />
    </nav>
    
    <button class="app-header__toggle-menu" @click="toggleMenu" >
      <span class="a11y-sr-only">Toggle navigation</span>
      <menu-icon :isOpen="menuIsOpen" />
    </button>
  </header>
</template>

<script>
import LanguageSelector from '../language-selector'
import SmartLink from '../smart-link'
import MenuIcon from '../menu-icon'

export default {
  components: { LanguageSelector, SmartLink, MenuIcon },
  props: ['contentId', 'menuI18n'],
  data () {
    return {
      menuIsOpen: false,
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    menu() { return this.menuI18n[this.locale] },
    slicedMenu() { return (this.menu.callToAction || this.$i18n.locales) ? this.menu.items.slice(0, 3) : this.menu.items.slice(0, 5)}
  },
  methods: {
    toggleMenu () {
      this.menuIsOpen = !this.menuIsOpen
    },
  }
}
</script>

<style>
@import '../app-core/index.css';

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 var(--spacing-default);
  width: 100%;
  height: var(--app-header-mobile-height);
  background-color: var(--background-color);
  box-shadow: 0 2px 15px 0 rgba(214,214,214,.5);
}

.app-header__navigation {
  position: absolute;
  top: var(--app-header-mobile-height);
  left: 0;
  display: none;
  width: 100%;
  background-color: var(--background-color);
  box-shadow: 0px 11px 14px rgba(214,214,214,.3);
  transition: all .2s ease-in-out;
}

.app-header__navigation--open {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: var(--spacing-default);
}

.app-header__inline-list {
  margin-bottom: var(--spacing-default);
  padding: 0;
  text-align: center;
}

.app-header__list-item {
  height: auto;
  margin-bottom: var(--spacing-double);
  list-style-type: none;
}

.app-header__menu-link {
  padding: var(--spacing-default) 0;
  color: var(--text-color);
  text-transform: uppercase;
  text-decoration: none;
}

.app-header__menu-link:focus,
.app-header__menu-link:hover {
  cursor: pointer;
  outline: none;
  border-bottom: 3px solid var(--action-color);
}

.app-header__identity {
  display: flex;
  align-items: center;
  color: var(--text-color);
  text-decoration: none;
}

.app-header__identity:hover,
.app-header__identity:focus {
  border: none;
}

.app-header__logo {
  margin-right: .3rem;
  height: 40px;
}

.app-header__title {
  display: none;
  font-size: var(--font-size-default);
  font-weight: lighter;
}

.app-header__call-to-action {
  margin-left: auto;
  padding: 0 var(--spacing-default);
  font-size: var(--font-size-default);
  color: var(--background-color);
  text-transform: uppercase;
  height: 40px;
  background-color: var(--action-color);
  box-shadow: 0 1px 5px #ccc;
  border: none;
  border-radius: 3px;
  line-height: 40px;
}

.app-header__call-to-action:hover {
  cursor: pointer;
  opacity: .9;
}

.app-header__navigation--open .app-header__call-to-action {
  margin: 0 0 1.5rem 0;
}

.app-header__toggle-menu {
  padding: 0;
  width: 40px;
  height: 40px;
}

@media screen and (min-width: 640px) {
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--app-header-height);
  }

  .app-header__navigation {
    display: flex;
    align-items: center;
    position: relative;
    top: 0;
    margin-left: auto;
    padding: 0;
    width: auto;
    background-color: transparent;
    box-shadow: none;
  }

  .app-header__inline-list {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 1.5rem;
    margin-bottom: 0;
  }

  .app-header__list-item {
    margin-bottom: 0;
  }

  .app-header__list-item:not(:last-child) {
    margin-right: 1.5rem;
  }

  .app-header__call-to-action {
    margin-right: 1.5rem;
  }

  .app-header__toggle-menu {
    display: none;
  }
}

@media screen and (min-width: 700px) {
  .app-header__title {
    display: inline-block;
  }
}
</style>
