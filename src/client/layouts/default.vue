<template>
  <track-outbound-links>
    <skip-links />
    <app-header :menu="menu"/>
    <main id="maincontent">
      <nuxt/>
    </main>
    <app-footer :menu="menu"/>
    <lazy-chat />
  </track-outbound-links>
</template>

<script>
import 'babel-polyfill'

import getDatoData from '~/lib/get-page-data';
import query from './menu.query.graphql'
import { AppFooter, AppHeader, LazyChat, SkipLinks, TrackOutboundLinks } from '../components'

export default {
  components: { AppFooter, AppHeader, LazyChat, SkipLinks, TrackOutboundLinks },
  data() {
    return {
      menu: {},
    }
  },

  async fetch() {
    const locale = this.$i18n.locale
    const { menu } = await getDatoData({
      query,
      locale
    })
    this.menu = menu
  }
}
</script>

<style>
@import '../components/app-core/index.css';
</style>
