<template>
  <header class="page-header" :style="image ? 'background-image:' + image.url + ';' : null">
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
  max-width: 100%;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-header:after {
  content: '';
  width: 40%;
  max-width: 250px;
  border: 1px solid var(--action-color);
}

.page-header__title {
 font-size: 3rem;
 padding: var(--spacing-double) 0 3rem 0;
}

.page-header__subtitle {
  font-size: var(--font-size-medium);
}
</style>