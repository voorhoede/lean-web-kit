<template>
  <div class="language-selector" :class="{ 'language-selector--dropdown' : hasMoreThanTwoLocales }">
    <button class="language-selector__current-locale" v-if="hasMoreThanTwoLocales">{{ currentLocale }}</button>
    
    <ul class="language-selector__list">
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
  </div>
</template>

<script>
export default {
  props: ['locales'],
  computed: {
    slugI18n() { return this.$store.state.slugI18n },
    isSlugRoute() { return this.$route.name === `slug${this.$i18n.routesNameSeparator}${this.$i18n.locale}` },
    hasMoreThanTwoLocales() { return this.locales.length > 2 }
  },
  data () {
    return {
      currentLocale: 'en',
    }
  }
}
</script>

<style>

.language-selector {
  display: inline-block;
}

.language-selector__list {
  display: flex;
  justify-content: center;
  padding: var(--spacing-half) .7rem;
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

.language-selector__current-locale {
  display: none;
}

@media screen and (min-width: 640px) {
  .language-selector--dropdown {
    align-self: flex-start;
  }

  .language-selector--dropdown .language-selector__current-locale {
    display: block;
    font-size: var(--font-size-default);
    text-transform: uppercase;
    color: var(--action-color);
    padding: var(--spacing-half) .7rem;
  }

  .language-selector--dropdown:hover .language-selector__current-locale {
    border-bottom: 3px solid var(--action-color);
  }

  .language-selector--dropdown .language-selector__list {
    display: none;
    background-color: var(--background-color);
    box-shadow: 1px 2px 8px #ddd;
    align-self: baseline;
    padding: 0;
  }

  .language-selector--dropdown:hover .language-selector__list,
  .language-selector--dropdown:active .language-selector__list {
    display: block;
  }

  .language-selector:hover .language-selector--dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .language-selector--dropdown .language-selector__item {
    margin: 0;
    border-right: 0;
    padding-right: 0;
  }

  .language-selector--dropdown .language-selector__link:hover {
    background-color: var(--action-color);
    color: var(--background-color);
  }

  .language-selector--dropdown .language-selector__link {
    text-align: center;
    display: block;
    padding: var(--spacing-half) .7rem;
  }

  .language-selector--dropdown .language-selector__link:hover,
  .language-selector--dropdown .language-selector__link:active {
    background-color: var(--action-color);
    color: var(--background-color);
  }  
}

</style>