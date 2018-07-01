<template>
  <div class="responsive-video">
    <figure>
      <fixed-ratio :content="video">
        <lazy-load :url="video.thumbnailUrl">
          <img
            slot-scope="imageSource"
            class="responsive-video__image"
            v-if="!isPlaying && imageSource.computed"
            alt=""
            :src="imageSource.computed"
          />
        </lazy-load>
        <iframe
          v-if="isPlaying"
          :src="videoSource"
          style="width:100%; height:100%;"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          allow="autoplay">
        </iframe>
        <a :href="video.url" v-if="!isPlaying" class="responsive-video__button" @click="play()">
          <span class="a11y-sr-only">Play</span>
          <play-icon class="responsive-video__icon" />
        </a>
      </fixed-ratio>
      <figcaption v-if="video.title">
        <a :href="video.url" target="_blank" rel="noopener">
          {{ video.title }}
        </a>
      </figcaption>
    </figure>
  </div>
</template>

<script>

import FixedRatio from '../fixed-ratio'
import LazyLoad from '../lazy-load'
import PlayIcon from '../../static/images/play.svg'

export default {
  props: ['video'],
  components: { FixedRatio, LazyLoad, PlayIcon },
  computed: {
    videoSource() {
      if (!this.isPlaying) return ''
      switch (this.video.provider) {
        case 'vimeo':
          return this.isPlaying ? `https://player.vimeo.com/video/${this.video.providerUid}?autoplay=1` : ''
          break;
        case 'youtube':
          return this.isPlaying ? `https://www.youtube.com/embed/${this.video.providerUid}?autoplay=1` : ''
          break;
      }
    }
  },
  data () {
    return {
      isPlaying: false
    }
  },
  methods: {
    play() {
      event.preventDefault();
      this.$ga.event({
        eventCategory: 'video',
        eventAction: 'play',
        eventLabel: this.video.url,
        eventValue: 1
      })
      this.isPlaying = true
    }
  },
}
</script>

<style>
.responsive-video {
  position: relative;
}

.responsive-video__image {
  height: 100%;
  width: 100%;
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