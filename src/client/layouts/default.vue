<template>
  <track-outbound-links>
    <main :id="contentId">
    <app-header :menuI18n="menuI18n" />
      <nuxt/>
    </main>
    <app-footer />
    <lazy-chat />
  </track-outbound-links>
</template>

<script>
import menuI18n from '../static/data/menu.json'
import { AppFooter, AppHeader, LazyChat, TrackOutboundLinks } from '../components/'

export default {
  components: { AppFooter, AppHeader, LazyChat, TrackOutboundLinks },
  data() {
    return {
      menuI18n,
    }
  }
}
</script>

<style>
@import '../components/app-core/index.css';

</style>
