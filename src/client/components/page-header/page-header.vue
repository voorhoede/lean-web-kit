<template>
  <header class="page-header">
    <h1 class="page-header__title">{{ title }}</h1>
    <p class="page-header__subtitle" v-if="subtitle">{{ subtitle }}</p>
  </header>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
}
</script>

<style>

</style>
