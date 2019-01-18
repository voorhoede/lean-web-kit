<template>
  <div class="illustrated-content">
    <div class="media-object">
      <responsive-image :image="image" />
    </div>

    <div class="illustrated-content__body">
      <h3 class="illustrated-content__title">{{ title }}</h3>
      <div class="illustrated-content__text">
        <rich-text :text="text" />
      </div>
    </div>
  </div>
</template>

<script>
  import ResponsiveImage from '../responsive-image'
  import RichText from '../rich-text'

  export default {
    props: {
      title: {
        type: String,
        required: false,
        default: ''
      },
      text: {
        type: String,
        required: false,
        default: ''
      },
      layout: {
        type: String,
        required: false,
        default: ''
      },
      image: {
        type: Object,
        required: true,
      },
    },
    components: { ResponsiveImage, RichText },
  }
</script>
