<template>
  <figure>
    <img :alt="image.alt" :src="image.url" />
    <figcaption v-if="image.title">{{ image.title }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: ['image']
}
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
