<template>
  <header class="page-header" :class="image ? 'with-cover-image' : null" :style="image ? 'background-image:url(' + image.url + ');' : null">
    <h1 class="page-header__title">{{ title }}</h1>
    <p class="page-header__subtitle" v-if="subtitle">{{ subtitle }}</p>
  </header>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'image'],
}
</script>

<style>
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
  width: 40%;
  max-width: 250px;
  border: 1px solid var(--action-color);
  position: absolute;
  bottom: 0;
}

.page-header__title {
 font-size: 3rem;
 padding: var(--spacing-double) 0;
}

.page-header__subtitle {
  margin-bottom: var(--spacing-double);
  font-weight: 300;
  text-align: center;
  font-size: var(--font-size-medium);
  letter-spacing: .3px;
  line-height: 1.3;
}

@media screen and (min-width: 500px) {
  .page-header__title {
    font-size: 4rem;
  }

  .page-header__subtitle {
    max-width: 80%;
    font-size: var(--font-size-large);
    letter-spacing: .8px;
    line-height: 1.4;
  }
}

.with-cover-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
}

.with-cover-image:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.4);
  width: 100%;
  height: 100%;
}

.with-cover-image:after {
  border: none;
}

.with-cover-image .page-header__title,
.with-cover-image .page-header__subtitle {
  color: var(--background-color);
  z-index: 1;
}
</style>
