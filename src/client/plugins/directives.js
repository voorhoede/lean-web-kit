import Vue from 'vue'

Vue.directive('test', {
  inserted(el, binding) {
    if(process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'development') {
      el.setAttribute("data-test", binding.arg)
    }
  }
})
