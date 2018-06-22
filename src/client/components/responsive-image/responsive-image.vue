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
        <img class="responsive-image__image" :alt="image.alt" :src="image.url" />
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

.responsive-image__image:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--neutral-color);
}

.responsive-image__image:after {
  content: attr(alt);
  display: block;
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
}
</style>