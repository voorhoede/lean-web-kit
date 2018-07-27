<template>
  <header v-if="image"
          class="page-header page-header--with-cover-image"
          :class="{ 'image-enhanced' : imageLoaded }"
          :style="`background-image:url('${ imageLoaded ? image.url : smallImageSrc }');`"
  >
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

.page-header {
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-double) var(--spacing-default);
  position: relative;
}

.page-header:after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 40%;
  max-width: 250px;
  border: 1px solid var(--action-color);
}

.page-header__title {
  padding: var(--spacing-double) 0;
  font-size: 3rem;
}

.page-header__subtitle {
  margin-bottom: var(--spacing-double);
  font-weight: 300;
  text-align: center;
  font-size: var(--font-size-medium);
  line-height: 1.3;
}

@media screen and (min-width: 500px) {
  .page-header__title {
    font-size: 4rem;
  }

  .page-header__subtitle {
    max-width: 80%;
    font-size: var(--font-size-large);
    letter-spacing: .5px;
    line-height: 1.4;
  }
}

.page-header--with-cover-image {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

.page-header--with-cover-image:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.4);
  width: 100%;
  height: 100%;
}

.page-header--with-cover-image:after {
  border: none;
}

.page-header--with-cover-image .page-header__title,
.page-header--with-cover-image .page-header__subtitle {
  color: var(--background-color);
  z-index: var(--layer--raised);
}
</style>
