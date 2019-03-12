<script>
export default {
  render (createElement) {
    if (process.browser) {
      return createElement('noscript')
    } else {
      return createElement('noscript', this.$slots.default)
    }
  },
}
</script>
