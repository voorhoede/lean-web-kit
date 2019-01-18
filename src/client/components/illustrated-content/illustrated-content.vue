<template>
  <div class="illustrated-content">
    <div class="media-object">
      <div>
        <responsive-image :image="image" />
      </div>
    </div>

    <div class="illustrated-content__body">
      <div>
        <h3 class="illustrated-content__title">some title</h3>
        <div class="illustrated-content__text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</div>
      </div>
    </div>
  </div>
</template>

<script>
  import ResponsiveImage from '../responsive-image'

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
    components: { ResponsiveImage },
  }
</script>

<style>
  .illustrated-content {

  }
</style>

