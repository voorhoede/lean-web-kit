<template>
  <track-outbound-links>
    <app-header :contentId="contentId" :menuI18n="menuI18n" />
    <main :id="contentId" class="content">
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
      contentId: 'content',
      menuI18n,
    }
  }
}
</script>

<style>
@import '../components/app-core/index.css';

.content {
  background-color: grey;
}
</style>
