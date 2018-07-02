<template>
  <figure class="responsive-image">
    <fixed-ratio class="responsive-image__canvas" :width="image.width" :height="image.height">
      <lazy-load>
        <picture class="responsive-image__picture">
          <!--[if IE 9]><video style="display: none;"><![endif]-->
          <source type="image/webp" media="(min-width: 360px)" :srcset="imageUrl({ width: 800, fm: 'webp' })">
          <source type="image/webp" :srcset="imageUrl({ fm: 'webp', width: 360 })">
          <source :type="`image/${image.format}`" media="(min-width: 360px)" :srcset="imageUrl({ width: 800 })">
          <source :type="`image/${image.format}`" :srcset="imageUrl({ width: 360 })">
          <!--[if IE 9]></video><![endif]-->
          <img class="responsive-image__img" :alt="image.alt" :srcset="imageUrl({ width: 360 })" />
        </picture>
      </lazy-load>
      <no-script>
        <picture class="responsive-image__picture">
          <img class="responsive-image__img" :alt="image.alt" :src="imageUrl({ width: 360 })" />
        </picture>
      </no-script>
    </fixed-ratio>
    <figcaption class="responsive-image__caption" v-if="image.title">
      {{ image.title }}
    </figcaption>
  </figure>
</template>

<script>
import FixedRatio from '../fixed-ratio'
import LazyLoad from '../lazy-load'
import NoScript from '../no-script'
import imageUrl from '../../lib/image-url'

export default {
  components: { FixedRatio, LazyLoad, NoScript },
  props: ['image'],
  methods: {
    imageUrl(options) {
      return imageUrl(this.image.url, options)
    },
  }
}
</script>

<style scoped>
.responsive-image {
  margin-bottom: var(--spacing-double);
}

.responsive-image__canvas {
  background-color: var(--neutral-color);
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

.responsive-image__caption {
  margin-top: var(--spacing-half);
  text-align: center;
}
</style>