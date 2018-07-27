<template>
  <div @click="trackOutboundLink">
    <app-header :contentId="contentId" :menuI18n="menuI18n" />
    <main :id="contentId">
      <nuxt/>
    </main>
    <app-footer />
    <lazy-chat />
  </div>
</template>

<script>
import menuI18n from '../static/data/menu.json'
import { AppFooter, AppHeader, LazyChat } from '../components/'

export default {
  components: { AppFooter, AppHeader, LazyChat },
  data() {
    return {
      contentId: 'content',
      menuI18n,
    }
  },
  methods: {
    trackOutboundLink (event) {
      const target = event.target
      if (
        target.hasAttribute('data-outbound')
        && ('ga' in window)
        && (typeof window.ga === 'function')
      ) {
        console.log(target.href)
        window.ga('send', 'event', 'outbound', 'click', target.href, { 'transport': 'beacon' })
      }
    }
  }
}
</script>

<style>
@import '../components/app-core/index.css';

</style>
