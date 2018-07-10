<template>
  <section class="content-section" :id="section.slug">
    <a :href="`#${section.slug}`">
      <h2 class="content-section__title">{{ section.title }}</h2>
    </a>
    <template v-for="(item, index) in section.items">
      <rich-text v-if="item.type === 'text'"
        :key="index"
        :text="item.body" />
      <responsive-image v-if="item.type === 'image'"
        :key="index"
        :image="item.image" />
      <responsive-video v-if="item.type === 'video'"
        :key="index"
        :video="item.video" />
    </template>
  </section>
</template>

<script>
import ResponsiveImage from '../responsive-image'
import ResponsiveVideo from '../responsive-video'
import RichText from '../rich-text'

export default {
  components: { ResponsiveImage, ResponsiveVideo, RichText },
  props: ['section'],
}
</script>

<style>

.content-section {
  margin: 0 auto 4rem;
  max-width: var(--max-width);
}

.content-section__title {
  margin-bottom: var(--spacing-double);
  color: var(--text-color);
  font-size: var(--font-size-extra-large);
}

</style>