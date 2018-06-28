<template>
  <footer role="contentinfo" class="app-footer">
    <nuxt-link :to="localePath('index') + '/'">
      <h1>Lean Web Kit</h1>
    </nuxt-link>
    <nav>
      <h2 class="a11y-sr-only">{{ menu.title }}</h2>
      <ul class="inline-list">
        <li v-for="item in menu.items" :key="item.slug">
          <nuxt-link :to="localePath({ name: 'slug', params: { slug: item.slug } })"
            class=""
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <section>
      <h2 class="a11y-sr-only">Contact</h2>
      {{ contact.emailAddress }}
      {{ contact.phoneNumber }}
      {{ contact.street }}
      {{ contact.city }}
    </section>
  </footer>
</template>

<script>

import contact from '../../static/data/contact.json'
import menuI18n from '../../static/data/menu.json'

export default {
  props: ['contentId'],
  data () {
    return { menuI18n, contact }
  },
  computed: {
    locale() { return this.$i18n.locale },
    menu() { return this.menuI18n[this.locale] },
  },
}
</script>

<style>

.app-footer {
  padding: var(--spacing-default);
  background-color: var(--neutral-color);
}

</style>