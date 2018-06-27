<template>
  <header class="page-header" :class="image ? 'page-header--with-cover-image' : null" :style="image ? 'background-image:url(' + image.url + ');' : null">
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
  z-index: 1;
}
</style>
