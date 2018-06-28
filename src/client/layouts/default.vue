<template>
  <div>
    <app-header 
      :contentId="contentId" 
      :menuI18n="menuI18n" 
      :appTitle="app.title"
    />

    <main :id="contentId">
      <nuxt/>
    </main>
    <app-footer />
  </div>
</template>

<script>
  import { AppFooter, AppHeader } from '../components/'
  import menuI18n from '../static/data/menu.json'
  import app from '../static/data/app.json'

  export default {
    components: { AppFooter, AppHeader },
    data() {
      return {
        contentId: 'content',
        menuI18n,
        app,
      }
    },
  }
</script>

<style>
@import '../components/app-core/index.css';
</style>
