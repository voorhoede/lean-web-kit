<template>
  <header
    v-if="image"
    class="page-header page-header--with-cover-image"
    :class="{ 'image-enhanced' : imageLoaded }"
    :style="`background-image:url('${ imageLoaded ? image.url : smallImageSrc }');`">
    <h1 class="page-header__title">{{ title }}</h1>
    <p class="page-header__subtitle" v-if="subtitle">{{ subtitle }}</p>
  </header>
  <header v-else class="page-header">
    <h1 class="page-header__title">{{ title }}</h1>
    <p class="page-header__subtitle" v-if="subtitle">{{ subtitle }}</p>
  </header>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'image'],
  data () {
    return {
      imageLoaded: false,
    }
  },
  computed: {
    smallImageSrc() { return this.image ? this.image.url + '?w=15' : null }
  },
  mounted () {
    if (this.image) {
      const img = new Image()
      img.src = this.image.url

      img.onload = this.loadEnhancedImage
    }
  },
  methods: {
    loadEnhancedImage () {
      this.imageLoaded = true
    }
  }
}
</script>

<style>
@import '../app-core/variables.css';


</style>
