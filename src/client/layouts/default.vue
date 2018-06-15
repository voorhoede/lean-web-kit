<template>
  <div>
    <app-header />
    <nuxt/>
    <app-footer />
  </div>
</template>

<script>
  import { AppFooter, AppHeader } from '../components/'

  export default {
    components: { AppFooter, AppHeader }
  }
</script>

<style>
@import '../assets/core.css'
</style>
