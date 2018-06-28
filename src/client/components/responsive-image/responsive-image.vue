<template>
    <figure class="responsive-image">
      <fixed-ratio :content="image">
        <lazy-load :url="image.url">
          <picture v-if="imageSource.computed" class="responsive-image__picture" slot-scope="imageSource">
            <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source type="image/webp" media="(min-width: 360px)" :srcset="imageUrl(imageSource.computed, { fm: 'webp' })">
            <source type="image/webp" :srcset="imageUrl(imageSource.computed, { fm: 'webp', width: 360 })">
            <source media="(min-width: 360px)" :srcset="imageUrl(imageSource.computed)">
            <source :srcset="imageUrl(imageSource.computed, { width: 360 })">
            <!--[if IE 9]></video><![endif]-->
            <img class="responsive-image__img" :alt="image.alt" :srcset="imageUrl(imageSource.computed)" />
            <noscript>
              <img class="responsive-image__fallback" :src="image.url" :alt="image.alt" />
            </noscript>
          </picture>
        </lazy-load>
      </fixed-ratio>
      <figcaption class="responsive-image__caption" v-if="image.title">{{ image.title }}</figcaption>
    </figure>
</template>

<script>

import FixedRatio from '../fixed-ratio'
import LazyLoad from '../lazy-load'
import imageUrl from '../../lib/image-url'

export default {
  components: { FixedRatio, LazyLoad },
  props: ['image'],
  methods: {
    imageUrl
  }
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

.responsive-image__fallback {
  position: relative;
  width: 100%;
  z-index: 1;
}
</style>