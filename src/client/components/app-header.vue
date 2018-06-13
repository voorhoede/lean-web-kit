<template>
  <header role="banner" class="app-header">
    <a href='/'>Lean Web Kit</a>
    <nav>
      <h2 class="a11y-sr-only">{{ menu.title }}</h2>
      <ul>
        <li v-for="item in menu.items" :key="item.slug">
          <nuxt-link :to="`/${item.slug}/`">{{ item.title }}</nuxt-link>
        </li>
    </ul>
    </nav>
  </header>
</template>

<script>
import menu from '../static/data/menu.json'

export default {
  data() {
    return { menu }
  }
}
</script>
