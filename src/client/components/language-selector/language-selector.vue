<template>
<div
  id="language"
  class="language-selector"
  :class="{'language-selector--dropdown': hasMoreThanTwoLocales}"
>
  <a
    v-if="hasMoreThanTwoLocales"
    class="language-selector__open language-selector__item"
    href="#language">
    {{ currentLocale }}
  </a>
  <ul class="language-selector__list">
    <li class="language-selector__item" v-for="locale in locales" :key="locale.code">
      <nuxt-link v-if="isSlugRoute"
        class="language-selector__link"
        rel="alternate"
        :hreflang="locale.code"
        :to="localePath({ name: 'slug', params: { slug: slugI18n[locale.code] } }, locale.code)"
      >
        {{ locale.name }}
      </nuxt-link>
      <nuxt-link v-else
        class="language-selector__link"
        rel="alternate"
        :hreflang="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['locales'],
  data() {
    return {
      currentLocale: this.$i18n.locale,
    }
  },
  computed: {
    hasMoreThanTwoLocales() { return this.locales.length > 2 },
    isSlugRoute() { return this.$route.name === `slug${this.$i18n.routesNameSeparator}${this.$i18n.locale}` },
    slugI18n() { return this.$store.state.slugI18n },
  },
}
</script>

<style>
@import '../app-core/variables.css';

.language-selector {
  display: inline-block;
  font-size: var(--font-size-small);
}
.language-selector__open {
  display: none;
  padding: var(--spacing-half)
}
.language-selector__open::after {
  content: '▼';
  display: inline-block;
  vertical-align: text-top;
  margin-top: calc(1em - var(--suffix-size));
  opacity: var(--suffix-opacity);
  font-size: var(--suffix-size);
}
.language-selector__list {
  display: flex;
  justify-content: center;
  padding: var(--spacing-half)
}

.language-selector__item {
  margin-right: var(--spacing-half);
  text-transform: uppercase;
  list-style-type: none;
  border-right: 1px solid var(--action-color);
  padding-right: var(--spacing-half);

}
.language-selector__item:last-child {
  border-right: none;
}

.language-selector__link.nuxt-link-active {
  font-weight: bold;
}

@media screen and (min-width: 640px) {
  .language-selector--dropdown {
    align-self: flex-start;
  }
  .language-selector--dropdown .language-selector__open {
    display: inline-block;
  }
  .language-selector--dropdown .language-selector__item {
    border: none;
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

