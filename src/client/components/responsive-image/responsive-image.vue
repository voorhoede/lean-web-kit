<template>
  <figure class="responsive-image">
    <div class="responsive-image__sizer" :style="`max-width:${image.width}px;`">
      <img v-if="image.format === 'svg'" :src="imageUrl({})">
      <fixed-ratio v-else class="responsive-image__canvas" :width="image.width" :height="image.height">
        <lazy-load>
          <picture class="responsive-image__picture" v-if="width || image.format === 'svg'">
            <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source type="image/webp" :srcset="imageUrl({ fm: 'webp', w: width })">
            <source :type="`image/${image.format}`" :srcset="imageUrl({ w: width })">
            <!--[if IE 9]></video><![endif]-->
            <transition name="fade">
              <img class="responsive-image__img" v-show="isLoaded" :alt="image.alt" :src="imageUrl({ w: width })" @load="onLoad"/>
            </transition>
          </picture>
        </lazy-load>
        <no-script>
          <picture class="responsive-image__picture">
            <img class="responsive-image__img" :alt="image.alt" :src="imageUrl({ w: 500 })" />
          </picture>
        </no-script>
      </fixed-ratio>
    </div>
    <figcaption v-if="image.title">
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
  props: {
    image: {
      type: Object,
      required: true,
    },
    widthStep: {
      type: Number,
      default: 100,
    }
  },
  data() {
    return {
      width: undefined,
      isLoaded: false,
    }
  },
  mounted() {
    const pixelRatio = window.devicePixelRatio || 1
    const cssWidth = this.$el.getBoundingClientRect().width
    const width = Math.ceil(cssWidth * pixelRatio / this.widthStep) * this.widthStep
    this.width = Math.min(width, this.image.width)
  },
  methods: {
    imageUrl(options) {
      return imageUrl(this.image.url, options)
    },
    onLoad() {
      this.isLoaded = true
    }
  }
}
</script>

<style>
@import '../app-core/variables.css';

.responsive-image {
  margin-bottom: var(--spacing-double);
}

.responsive-image__sizer {
  margin-left: auto;
  margin-right: auto;
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
</style>
