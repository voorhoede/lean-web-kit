import Vue from 'vue'
import { googleAnalyticsTrackingId} from '../static/data/app.json'

Vue.mixin({
  created() {
    if (!googleAnalyticsTrackingId) {
      this.$ga = {
        event() { },
        social() { },
      }
    }
  }
})


