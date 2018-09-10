import Vue from 'vue'
import { googleAnalyticsTrackingId } from '../static/data/app.json'

if (!googleAnalyticsTrackingId) {
  Vue.mixin({
    created() {
      this.$ga = {
        event() { },
        social() { },
      }
    }
  })
}


