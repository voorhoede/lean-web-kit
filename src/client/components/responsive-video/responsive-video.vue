<template>
  <div class="responsive-video">
    <figure>
      <fixed-ratio class="responsive-video__canvas" :width="video.width" :height="video.height">
        <lazy-load>
          <div
            class="responsive-video__background"
            :style="{ backgroundImage: `url(${thumbnailImage})` }"
          >
          </div>
        </lazy-load>
        <iframe
          v-if="isPlaying"
          class="responsive-video__i-frame"
          :src="videoSource"
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

export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
    widthStep: {
      type: Number,
      default: 100,
    }
  },
  components: { FixedRatio, LazyLoad },
  computed: {
    useOptimalImage() {
      const videoArray = this.video.thumbnailUrl.split('_')
      videoArray.pop()
      videoArray.push(`${this.width}.jpg`)
      
      return videoArray.join('_')
    },
    thumbnailImage() {
      return this.video.provider === 'youtube'
        ? this.video.thumbnailUrl.replace('/hqdefault.jpg', '/maxresdefault.jpg')
        : this.useOptimalImage
    },
    videoSource() {
      if (!this.isPlaying) return ''
      switch (this.video.provider) {
        case 'vimeo':
          return `https://player.vimeo.com/video/${this.video.providerUid}?autoplay=1&muted=${this.video.autoplay ? 1 : 0}`
          break;
        case 'youtube':
          return `https://www.youtube.com/embed/${this.video.providerUid}?autoplay=1&mute=${this.video.autoplay ? 1 : 0}`
          break;
        default:
          console.error(`unsupported video provider: ${this.video.provider}`);
          return ''
      }
    }
  },
  data () {
    return {
      isPlaying: this.video.autoplay,
      width: undefined,
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
    const width = Math.ceil(cssWidth * pixelRatio / this.widthStep) * this.widthStep
    this.width = Math.min(width, this.video.width)

    if (this.video.provider === 'vimeo') {
    console.log(this.video.thumbnailUrl, this.thumbnailImage, this.width)
    }
  },
}
</script>

<style>
@import '~/assets/colors.css';

.responsive-video {
  position: relative;
}

.responsive-video__canvas {
  background-color: var(--neutral-color);
}

.responsive-video__background {
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
}

.responsive-video__i-frame {
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