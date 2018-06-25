<template>
    <figure class="responsive-image">
      <fixed-ratio :content="image">
        <picture class="responsive-image__picture">
          <!--[if IE 9]><video style="display: none;"><![endif]-->
          <source type="image/webp" media="(min-width: 360px)" :srcset="`${imageSource}?fm=webp`">
          <source type="image/webp" :srcset="`${imageSource}?w=360&fm=webp`">
          <source media="(min-width: 360px)" :srcset="imageSource">
          <source :srcset="`${imageSource}?w=360`">
          <!--[if IE 9]></video><![endif]-->
          <img class="responsive-image__img" :alt="image.alt" :src="imageSource" />
        </picture>
      </fixed-ratio>
      <figcaption v-if="image.title">{{ image.title }}</figcaption>
    </figure>
</template>

<script>

import FixedRatio from '../fixed-ratio'

export default {
  components: { FixedRatio },
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

.responsive-image__img {
  width: 100%;
}

.responsive-image__img:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--neutral-color);
}

.responsive-image__img:after {
  content: attr(alt);
  display: block;
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
}
</style>