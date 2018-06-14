<template>
  <section :id="section.slug">
    <a :href="`#${section.slug}`">
      <h2>{{ section.title }}</h2>
    </a>
    <template v-for="(item, index) in section.items">
      <rich-text v-if="item.type === 'text'"
        :key="index"
        :text="item.body" />
      <responsive-image v-if="item.type === 'image'"
        :key="index"
        :image="item.image" />
    </template>
  </section>
</template>

<script>
import ResponsiveImage from '../responsive-image'
import RichText from '../rich-text'

export default {
  components: { ResponsiveImage, RichText },
  props: ['section'],
}
</script>
