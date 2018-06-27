<template>
  <header role="banner" class="app-header">
    <nuxt-link :to="localePath('index')" class="app-header__identity">
      <img class="app-header__logo" src="/images/logo.svg" alt="" />
      <h1 class="app-header__title">Lean Web Kit</h1>
    </nuxt-link>
    
    <a class="a11y-sr-only" :href="`#${contentId}`">{{ $t('skip_to_content') }}</a>
    
    <transition name="slide-in">
      <nav class="app-header__navigation" :class="{ 'app-header--open' : showNavigation }">
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
        
        <language-selector v-if="$i18n.locales" :locales="$i18n.locales" />
      </nav>
    </transition>
    <button class="action-button" v-if="action" @click="doSomething">{{ action.title }}</button>
    
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
import menuI18n from '../../static/data/menu.json'
import LanguageSelector from '../language-selector'

export default {
  components: { LanguageSelector },
  props: ['contentId', 'action'],
  data () {
    return { 
      menuI18n,
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
    },

    doSomething () {
      console.log('button clicked')
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
  padding: 0;
  width: 40px;
  height: 40px;
}

.app-header__menu-icon {
  width: 30px;
  height: auto;;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--background-color);
  width: 100%;
  height: 55px;
  box-shadow: 0 2px 15px 0 rgba(214,214,214,.5);
  z-index: 1;
}

.app-header__identity {
  display: flex;
  align-items: center;
  color: var(--text-color);
  text-decoration: none;
}

.app-header__navigation {
  position: absolute;
  top: var(--app-header-height);
  display: none;
  width: 100%;
  background-color: var(--background-color);
  padding: var(--spacing-default);
  box-shadow: 0px 11px 14px rgba(214,214,214,.3);
  transition: all .2s ease-in-out;
}

.app-header__inline-list {
  padding: 0;
  margin-bottom: 2rem;
  text-align: center;
}

.app-header__list-item {
  list-style-type: none;
  padding: var(--spacing-default) 0;
}

.app-header__list-item:hover .app-header__menu-link {
  border-bottom: 2px solid var(--action-color);
}

.app-header__logo {
  height: 50px;
  transform: rotate(35deg);
}

.app-header__title {
  font-size: 1rem;
  font-weight: lighter;
}

.app-header__menu-link {
  padding-bottom: var(--spacing-default);
  color: var(--text-color);
  text-transform: uppercase;
  text-decoration: none;
}

.app-header__menu-link:focus,
.app-header__menu-link:hover {
  border-bottom: 2px solid var(--action-color);
}

.is-open .line-1 {
  transform: rotate(45deg);
  transform-origin: 14% 33%;
}

.is-open .line-2 {
  opacity: 0;
}

.is-open .line-3 {
  transform: rotate(-45deg) ;
  transform-origin: 10% 63%;
}

.is-open .line,
.line {
  transition: all .2s ease-in-out;
}

.app-header--open {
  display: block;
}

@media screen and (min-width: 640px) {
  .app-header__toggle-menu {
    display: none;
  }

  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--app-header-height);
  }

  .app-header__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    margin: 0 var(--spacing-default) 0 auto;
    padding: 0;
    box-shadow: none;
    width: auto;
    background-color: transparent;
    flex-grow: 1;
  }

  .app-header__inline-list {
    display: flex;
    margin: 0;
    margin-left: auto;
    padding: 0 !important;  
  }

  .app-header__list-item {
    margin-right: 1.5rem;
  }
}

.action-button {
  border: none;
  height: 40px;
  padding: 0 2rem;
  margin-right: 1rem;
  background-color: var(--action-color);
  color: var(--background-color);
  text-transform: uppercase;
  box-shadow: 0 1px 5px #ccc;
  border-radius: 3px;
  font-size: 1rem;
  margin-left: auto;
}

.action-button:hover {
  cursor: pointer;
  opacity: .9;
}
</style>
