<template>
  <figure>
    <a :href="video.url" target="_blank" rel="noopener" @click="play()">
      <img alt="" :src="video.thumbnailUrl" :width="video.width" :height="video.height" />
    </a>
    <figcaption v-if="video.title">{{ video.title }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: ['video'],
  methods: {
    play() { console.log('@todo: load & play video') }
  },
}
</script>
