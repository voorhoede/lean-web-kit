<template>
  <div>
    <app-header :contentId="contentId" :menuI18n="menuI18n" />
    <main :id="contentId">
      <nuxt/>
    </main>
    <app-footer />
  </div>
</template>

<script>
import menuI18n from '../static/data/menu.json'
import { AppFooter, AppHeader } from '../components/'

export default {
  components: { AppFooter, AppHeader },
  data() {
    return {
      contentId: 'content',
      menuI18n,
    }
  },
}
</script>

<style>
@import '../components/app-core/index.css';
</style>
