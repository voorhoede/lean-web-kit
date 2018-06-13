<template>
  <div :id="item.slug">
    <a :href="`#${item.slug}`">
      <h2>{{ item.title }}</h2>
    </a>
    <template v-if="item.type === 'text'">
      <rich-text :text="item.body" />
    </template>
    <template v-if="item.type === 'image'">
      <responsive-image :image="item.image" />
    </template>
  </div>
</template>

<script>
import ResponsiveImage from './responsive-image'
import RichText from './rich-text'

export default {
  components: { ResponsiveImage, RichText },
  props: ['item'],
}
</script>
