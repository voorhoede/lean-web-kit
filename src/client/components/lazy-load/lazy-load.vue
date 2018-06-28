<template>
  <div>
    <slot :computed="imageSource"></slot>
  </div>
</template>

<script>

export default {
  props: ['url'],
  data() {
    return {
      observer: null,
      setSource: false
    }
  },
  computed: {
    imageSource() {
      return this.setSource ? this.url : ''
    }
  },
  mounted() {
    const config = {
      root: undefined,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0
    };

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(this.onIntersection, config)
      this.observer.observe(this.$el)
    } else {
      this.setSource = true
    }
  },
  unmounted() {
    observer.unobserve(this.$el)
  },
  methods: {
    onIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          this.setSource = true
          observer.unobserve(entry.target)
        }
      })
    }
  }
}

</script>