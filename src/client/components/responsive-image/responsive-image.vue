<template>
  <figure class="responsive-image" :style="{ maxHeight: `${image.height}px`, maxWidth: `${image.width}px` }">
    <div class="responsive-image__wrapper" :style="{ paddingBottom: `${ratio}%` }">
      <picture class="responsive-image__content">
        <!--[if IE 9]><video style="display: none;"><![endif]-->
        <source type="image/webp" media="(min-width: 360px)" :srcset="`${imageSource}?fm=webp`">
        <source type="image/webp" :srcset="`${imageSource}?w360&fm=webp`">
        <source media="(min-width: 360px)" :srcset="imageSource">
        <source :srcset="`${imageSource}?w360`">
        <!--[if IE 9]></video><![endif]-->
        <img class="responsive-image__image" :alt="image.alt" :src="imageSource" />
      </picture>
    </div>
    <figcaption v-if="image.title">{{ image.title }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: ['image'],
  data() {
    return {
      observer: null,
      setSource: false
    }
  },
  computed: {
    imageSource() {
      return this.setSource ? this.image.url : ''
    },
    ratio() {
      return this.image.height / this.image.width * 100
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
  methods: {
    onIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          this.setSource = true
          observer.unobserve(entry.target)
        }
      })
    },
  },
}
</script>

<style scoped>
.responsive-image {
  margin-bottom: var(--spacing-double);
}

.responsive-image__wrapper {
  background-color: var(--neutral-color);
  display: block;
  position: relative;
  height: 0;
  overflow: hidden;
}

.responsive-image__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: inherit;
}

.responsive-image__image:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--neutral-color);
}

.responsive-image__image:after {
  content: attr(alt);
  display: block;
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
}
</style>