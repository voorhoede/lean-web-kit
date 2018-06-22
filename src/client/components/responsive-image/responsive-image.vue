<template>
  <figure class="responsive-image">
    <div class="responsive-image__wrapper">
      <picture class="responsive-image__content">
        <!--[if IE 9]><video style="display: none;"><![endif]-->
        <source type="image/webp" media="(min-width: 400px)" :srcset="`${image.url}?fm=webp`">
        <source type="image/webp" :srcset="`${image.url}?w400&h=225&fm=webp`">
        <source media="(min-width: 400px)" :srcset="image.url">
        <source :srcset="`${image.url}?w400&h=225`">
        <!--[if IE 9]></video><![endif]-->
        <img :alt="image.alt" :src="image.url" />
      </picture>
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

.responsive-image__wrapper {
  background-color: var(--neutral-color);
  display: block;
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
}

.responsive-image__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: inherit;
}
</style>