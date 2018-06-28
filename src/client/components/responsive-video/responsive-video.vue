<template>
  <div class="responsive-video">
    <figure>
      <fixed-ratio :content="video">
        <img
          v-if="!playing"
          alt=""
          :src="video.thumbnailUrl"
          :width="video.width"
          :height="video.height"
        />
        <iframe
          v-if="playing"
          :src="videoSource"
          style="width:100%; height:100%;"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          allow="autoplay">
        </iframe>
      </fixed-ratio>
      <figcaption v-if="video.title">
        <a :href="video.url" target="_blank" rel="noopener">
          {{ video.title }}
        </a>
      </figcaption>
    </figure>
    <button class="responsive-video__button" @click="play()">
      <span class="a11y-sr-only">Play</span>
      <play-icon />
    </button>
  </div>
</template>

<script>

import FixedRatio from '../fixed-ratio'
import PlayIcon from '../../static/images/play.svg'

export default {
  props: ['video'],
  components: { FixedRatio, PlayIcon },
  computed: {
    videoSource() {
      switch(this.video.provider) {
        case 'vimeo':
          return this.playing ? `https://player.vimeo.com/video/${this.video.providerUid}?autoplay=1` : ''
          break;
        case 'youtube':
          return this.playing ? `https://www.youtube.com/embed/${this.video.providerUid}?autoplay=1` : ''
          break;
      }
    }
  },
  data () {
    return {
      playing: false
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
      this.playing = true
    }
  },
}
</script>

<style>
.responsive-video {
  position: relative;
}

.responsive-video__button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  padding: var(--spacing-default);
  background-color: transparent;
  border: none;
}
</style>