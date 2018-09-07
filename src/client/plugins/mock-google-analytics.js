import Vue from 'vue'
import { hotjarId } from '../static/data/app.json'

Vue.mixin({
  created() {
    this.$ga = {
      event () {},
      social() {},
    }
  }
})


