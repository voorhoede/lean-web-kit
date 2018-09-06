<template>
  <div class="responsive-video">
    <figure>
      <fixed-ratio class="responsive-video__canvas" :width="canvasWidth" :height="canvasHeight">
        <lazy-load>
          <div class="responsive-video__background">
            <div class="responsive-video__cover" :style="{ backgroundImage: `url(${imageUrl})`, width: coverWidth }"></div>
          </div>
        </lazy-load>
        <iframe
          v-if="isPlaying"
          class="responsive-video__iframe"
          :src="videoUrl"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          allow="autoplay">
        </iframe>
        <a
          v-if="!isPlaying"
          class="responsive-video__button"
          :href="video.url"
          @click.prevent="play">
          <span class="a11y-sr-only">{{ $t('play_video') }}</span>
          <img class="responsive-video__icon" src="/images/play.svg" />
        </a>
      </fixed-ratio>
      <figcaption v-if="video.title">
        <a target="_blank" rel="noopener" :href="video.url" >
          {{ video.title }}
        </a>
      </figcaption>
    </figure>
  </div>
</template>

<script>
import FixedRatio from '../fixed-ratio/fixed-ratio'
import LazyLoad from '../lazy-load/lazy-load'
import imageUrl from '../../lib/image-url'

const binaryBoolean = value => (value) ? 1 : 0

export default {
  components: { FixedRatio, LazyLoad },
  props: {
    video: {
      type: Object,
      required: true,
    },
    autoplay: {
      type: Boolean,
      required: true,
    },
    loop: {
      type: Boolean,
      required: true,
    },
    mute: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return {
      isPlaying: this.autoplay,
      maxRatio: 1.5,
      width: undefined,
    }
  },
  computed: {
    canvasHeight() { 
      // prevent canvas from getting a higher ratio than 3:2 (1.5:1)
      return Math.min(this.video.width * this.maxRatio, this.video.height)
    },
    canvasWidth() {
      return this.video.width
    },
    coverWidth() {
      return `${this.video.width * this.maxRatio / this.video.height * 100}%`
    },
    imageUrl() {
      switch (this.video.provider) {
        case 'vimeo':
          const sizeRegex = /_\d+(x\d+)?\.\w+$/ // match _123.ext and _123x123.ext
          return this.video.thumbnailUrl.replace(sizeRegex, `_${this.width}.jpg`)
          break;
        case 'youtube':
          let preset = '/maxresdefault.jpg'
          if (this.width < 320) {
            preset = '/mqdefault.jpg'
          } else if (this.width < 480) {
            preset = '/hqdefault.jpg'
          }

          return this.video.thumbnailUrl.replace('/hqdefault.jpg', preset)
          break;
        default:
          console.error(`unsupported video provider for cover image: ${this.video.provider}`);
          return ''
      }
    },
    videoUrl() {
      if (!this.isPlaying) return ''
      const { autoplay, loop, mute = autoplay } = this
      const { provider, providerUid } = this.video
      switch (provider) {
        case 'vimeo':
          return `https://player.vimeo.com/video/${providerUid}?autoplay=1&muted=${binaryBoolean(mute)}&loop=${binaryBoolean(loop)}`
          break;
        case 'youtube':
          return `https://www.youtube.com/embed/${providerUid}?autoplay=1&mute=${binaryBoolean(mute)}&loop=${binaryBoolean(loop)}&playlist=${providerUid}`
          break;
        default:
          console.error(`unsupported video provider: ${provider}`);
          return ''
      }
    }
  },
  methods: {
    play() {
      this.$ga.event({
        eventCategory: 'video',
        eventAction: 'play',
        eventLabel: this.video.url,
        eventValue: 1
      })
      this.isPlaying = true
    },
  },
   mounted() {
    const pixelRatio = window.devicePixelRatio || 1
    const cssWidth = this.$el.getBoundingClientRect().width
    this.width = cssWidth * pixelRatio
  },
}
</script>

<style>
@import '../app-core/variables.css';

.responsive-video {
  position: relative;
}

.responsive-video__background {
  position: absolute;
  height: 100%;
  width: 100%;
}

.responsive-video__cover {
  height: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  background-position: center center;
}

.responsive-video__iframe {
  width:100%;
  height:100%;
  position:relative;
}

.responsive-video__button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color .25s ease;
}

.responsive-video__button:hover,
.responsive-video__button:focus {
  border-bottom: none;
  background-color: rgba(0, 0, 0, .25);
}

.responsive-video__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
