<template>
  <header
    role="banner"
    class="app-header"
    :class="{ 'app-header--sticky' : menu.isSticky }"
  >
    <nuxt-link :to="localeUrl('index')" class="app-header__identity">
      <img class="app-header__logo" src="/images/logo.svg" alt="" width="32" height="40" />

      <h1 class="app-header__title">Lean Web Kit<br>
        <span class="app-header__subtitle">a Voorhoede product</span>
      </h1>
    </nuxt-link>

    <a tabindex="-1" class="a11y-sr-only" :href="`#${contentId}`">{{ $t('skip_to_content') }}</a>

    <nav class="app-header__menu" :class="{ 'app-header__menu--open' : menuIsOpen }">
      <h2 class="a11y-sr-only">{{ menu.title }}</h2>

      <ul class="app-header__menu-list">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="app-header__menu-item"
        >
          <smart-link
            class="app-header__menu-link"
            :item="item"
            @click.native="closeMenu"
          />
        </li>
      </ul>

      <smart-link
        v-if="menu.callToAction"
        class="button button--primary app-header__button app-header__button--desktop"
        :item="menu.callToAction"
      />

      <language-selector :locales="$i18n.locales" class="app-header__language-selector"/>
    </nav>

    <span class="app-header__button-on-mobile">
      <smart-link
      v-if="menu.callToAction"
      class="button button--primary app-header__button"
      :item="menu.callToAction"
      @click.native="closeMenu" />
    </span>

    <button class="app-header__menu-button" @click="toggleMenu" >
      <span v-if="menuIsOpen" class="a11y-sr-only">{{ $t('close_menu') }}</span>
      <span v-else class="a11y-sr-only">{{ $t('open_menu') }}</span>

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
  props: {
    contentId: { type: String, required: true },
    menuI18n: { type: Object, required: true },
  },

  data () {
    return {
      menuIsOpen: false,
    }
  },

  computed: {
    locale() { return this.$i18n.locale },
    menu() { return this.menuI18n[this.locale] },
    menuItems() { return (this.menu.callToAction || this.$i18n.locales) ? this.menu.items.slice(0, 3) : this.menu.items.slice(0, 5)}
  },

  methods: {
    toggleMenu () {
      this.menuIsOpen = !this.menuIsOpen
    },
    closeMenu () {
      if (this.menuIsOpen) {
        this.menuIsOpen = false
      }
    }
  }
}
</script>

<style>
@import '../app-core/variables.css';

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing-half);
  width: 100%;
  height: var(--app-header-mobile-height);
  background-color: var(--background-color);
  box-shadow: 0 2px 15px 0 rgba(214,214,214,.5);
}

.app-header--sticky {
  position: sticky;
  top: 0;
  left: 0;
  z-index: var(--layer--overlay);
}

.app-header__menu {
  display: none;
  position: absolute;
  top: var(--app-header-mobile-height);
  left: 0;
  width: 100%;
  background-color: var(--background-color);
  box-shadow: 0px 8px 10px rgba(214,214,214,.3);
  transition: all .2s ease-in-out;
}

.app-header__menu--open {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-default) 0;
}

.app-header__menu-list {
  margin: 0 0 var(--spacing-default) 0;
  padding: 0;
  text-align: center;
}

.app-header__menu-item {
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
  color: var(--text-color);
  border-bottom: 3px solid var(--focus-color);
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

.app-header__subtitle {
  font-size: var(--font-size-small);
  white-space: nowrap;
}

.app-header__button {
  margin-right: var(--spacing-default);
  white-space: nowrap;
}

.app-header__button--desktop {
  display: none;
}

.app-header__button-on-mobile {
  margin-left: auto;
}

.app-header__menu-button {
  padding: 0;
  background-color: transparent;
  width: 40px;
  height: 40px;
}

@media screen and (min-width: 790px) {
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--app-header-height);
  }

  .app-header__menu {
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

  .app-header__button-on-mobile {
    display: none;
  }

  .app-header__button--desktop {
    display: inline-block;
    margin-left: 0;
  }

  .app-header__menu-list {
    display: flex;
    justify-content: flex-end;
    margin: 0 1.5rem 0 auto;
  }

  .app-header__menu-item {
    margin-bottom: 0;
  }

  .app-header__menu-item:not(:last-child) {
    margin-right: 1.5rem;
  }

  .app-header__menu-button {
    display: none;
  }

  .app-header__language-selector {
    margin-right: var(--spacing-default);
  }
}

@media screen and (min-width: 700px) {
  .app-header__title {
    display: inline-block;
  }
}
</style>
