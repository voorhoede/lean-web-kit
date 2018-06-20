<template>
  <div>
    <app-header :contentId="contentId" />
    <main :id="contentId">
      <nuxt/>
    </main>
    <app-footer />
  </div>
</template>

<script>
import { AppFooter, AppHeader } from '../components/'

export default {
  components: { AppFooter, AppHeader },
  data() {
    return {
      contentId: 'content',
      lastScroll: 0,
    }
  },
  
}
</script>

<style>
@import '../components/app-core/index.css';

</style>
