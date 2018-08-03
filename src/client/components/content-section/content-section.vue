<template>
  <section class="content-section">
    <a :id="section.slug" class="content-section__scroll-anchor"></a>
    <a :href="`#${section.slug}`">
      <h2 class="content-section__title">{{ section.title }}</h2>
    </a>
    <template v-for="(item, index) in section.items">
      <button-group v-if="item.type === 'button_group'"
       :key="index"
       :items="item.links" />
      <rich-text v-if="item.type === 'text'"
        :key="index"
        :text="item.body"
      />
      <responsive-image v-if="item.type === 'image'"
        :key="index"
        :image="item.image"
      />
      <responsive-video v-if="item.type === 'video'"
        :key="index"
        :video="item.video"
        :autoplay="item.autoplay"
        :loop="item.loop"
        :mute="item.mute"
      />
    </template>
  </section>
</template>

<script>
import ButtonGroup from '../button-group'
import ResponsiveImage from '../responsive-image'
import ResponsiveVideo from '../responsive-video'
import RichText from '../rich-text'

export default {
  components: { ButtonGroup, ResponsiveImage, ResponsiveVideo, RichText, },
  props: {
    section: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>
@import '../app-core/variables.css';

:root {
  --app-header-offset: 100px;
}
.content-section__scroll-anchor {
  display: block;
  margin-top: calc(-1 * var(--app-header-offset));
  height: var(--app-header-offset);
  visibility: hidden;
  pointer-events: none;
}

.content-section {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  max-width: var(--max-width);
}

.content-section__title {
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-size: var(--font-size-extra-large);
}

</style>
