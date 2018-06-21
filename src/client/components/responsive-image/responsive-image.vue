<template>
  <figure>
    <div class="fixed-ratio">
      <div class="fixed-ratio__content">
        <img :alt="image.alt" :src="image.url" />
      </div>
    </div>
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

.fixed-ratio {
    display: block;
    position: relative;
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
}

.fixed-ratio__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: inherit;
}
</style>