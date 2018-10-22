<template>
  <track-outbound-links>
    <skip-links />
    <app-header :menuI18n="menuI18n" />
    <main id="maincontent">
      <nuxt/>
    </main>
    <app-footer />
    <lazy-chat />
  </track-outbound-links>
</template>

<script>
import menuI18n from '../static/data/menu.json'
import { AppFooter, AppHeader, LazyChat, SkipLinks, TrackOutboundLinks } from '../components'

export default {
  components: { AppFooter, AppHeader, LazyChat, SkipLinks, TrackOutboundLinks },
  data() {
    return {
      menuI18n,
    }
  },
}
</script>

<style>
@import '../components/app-core/index.css';
</style>
