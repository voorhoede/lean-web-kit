<template>
  <figure>
    <fixed-ratio :content="video">
      <img
        v-if="!playing"
        alt=""
        :src="video.thumbnailUrl"
        :width="video.width"
        :height="video.height"
        @click="play()"
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
</template>

<script>

import FixedRatio from '../fixed-ratio'

export default {
  props: ['video'],
  components: { FixedRatio },
  computed: {
    videoSource() {
      return this.playing ? `https://player.vimeo.com/video/${this.video.providerUid}?autoplay=1` : ''
    }
  },
  data () {
    return {
      playing: false
    }
  },
  methods: {
    play() {
      this.playing = true
    }
  },
}
</script>
