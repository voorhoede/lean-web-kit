<template>
  <header role="banner" class="app-header">
    <a :href="localePath('index')">Lean Web Kit</a>
    <nav>
      <h2 class="a11y-sr-only">{{ menu.title }}</h2>
      <ul>
        <li v-for="item in menu.items" :key="item.slug">
          <nuxt-link :to="localePath({ name: 'slug', params: { slug: item.slug } })">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
      <language-selector />
    </nav>
  </header>
</template>

<script>
import menu from '../../static/data/menu.json'
import LanguageSelector from '../language-selector'

export default {
  components: { LanguageSelector },
  data() {
    return { menu }
  },
}
</script>
