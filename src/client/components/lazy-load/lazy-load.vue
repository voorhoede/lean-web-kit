<template>
  <div>
    <slot :computed="imageSource"></slot>
  </div>
</template>

<script>

export default {
  props: {
    url: String,
    rootMargin: {
      default: '0px 0px 0px 0px',
      type: String
    },
    threshold: {
      default: 0,
      type: Number
    }
  },
  // props: ['url'],
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
      rootMargin: this.rootMargin,
      threshold: this.threshold
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