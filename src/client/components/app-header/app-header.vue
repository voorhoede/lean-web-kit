<template>
  <header role="banner" class="app-header">
    <nuxt-link :to="localePath('index')" class="app-header__identity">
      <img class="app-header__logo" src="/images/logo.svg" alt="" />
      <h1 class="app-header__title">{{ appTitle }}</h1>
    </nuxt-link>
    
    <a class="a11y-sr-only" :href="`#${contentId}`">{{ $t('skip_to_content') }}</a>
    
    <nav class="app-header__navigation" :class="{ 'app-header__navigation--open' : showNavigation }">
      <h2 class="a11y-sr-only">{{ menu.title }}</h2>
      <ul class="app-header__inline-list">
        <li v-for="(item, index) in menu.items" :key="index" class="app-header__list-item">
          <smart-link :item="item" class="app-header__menu-link" />
        </li>
      </ul>
      <smart-link v-if="menu.callToAction" :item="menu.callToAction" class="app-header__menu-link" />
      <language-selector :locales="$i18n.locales" />
    </nav>
    
    <button class="app-header__toggle-menu" @click="toggleNavigation" >
      <span class="a11y-sr-only">Toggle navigation</span>
      <svg class="app-header__menu-icon" :class="{ 'is-open': showNavigation }" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
        <g>
          <path class="line line-2" d="M491.318,235.318H20.682C9.26,235.318,0,244.577,0,256s9.26,20.682,20.682,20.682h470.636 c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z"/>
          <path class="line line-1" d="M491.318,78.439H20.682C9.26,78.439,0,87.699,0,99.121c0,11.422,9.26,20.682,20.682,20.682h470.636 c11.423,0,20.682-9.26,20.682-20.682C512,87.699,502.741,78.439,491.318,78.439z"/>
          <path class="line line-3" d="M491.318,392.197H20.682C9.26,392.197,0,401.456,0,412.879s9.26,20.682,20.682,20.682h470.636 c11.423,0,20.682-9.259,20.682-20.682S502.741,392.197,491.318,392.197z"/>
        </g>
      </svg>
    </button>
  </header>
</template>

<script>
import LanguageSelector from '../language-selector'
import SmartLink from '../smart-link'

export default {
  components: { LanguageSelector, SmartLink },
  props: ['contentId', 'menuI18n'],
  data () {
    return {
      isOpen: false,
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    menu() { return this.menuI18n[this.locale] },
    slicedMenu() { return this.sliceMenuItems(this.menu)}
  },
  methods: {
    toggleNavigation () {
      this.showNavigation = !this.showNavigation
    },

    handleClick () {
      console.log('button clicked')
    },

    sliceMenuItems ({ items }) {
      if (this.menu.callToAction || this.$i18n.locales) {
        return items.slice(0, 3)
      }

      return items.slice(0, 5)
    }
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

.app-header__action-button {
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
}

.app-header__action-button:hover {
  cursor: pointer;
  opacity: .9;
}

.app-header__navigation--open .app-header__action-button {
  margin: 0 0 1.5rem 0;
}

.app-header__toggle-menu {
  padding: 0;
  width: 40px;
  height: 40px;
}

.app-header__toggle-menu__icon {
  width: 30px;
  height: auto;
}

.is-open .line-1 {
  transform: rotate(45deg);
  transform-origin: 14% 33%;
}

.is-open .line-2 {
  opacity: 0;
}

.is-open .line-3 {
  transform: rotate(-45deg);
  transform-origin: 10% 63%;
}

.is-open .line,
.line {
  transition: all .2s ease-in-out;
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
    margin: 0 0 0 auto;
  }

  .app-header__list-item {
    margin: 0 1.5rem 0 0;
  }

  .app-header__action-button {
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
