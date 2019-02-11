<template>
  <article
    :class="{'illustrated-content--inverse-layout': inverseLayout }"
    class="illustrated-content">
      <responsive-image class="illustrated-content__image" :image="image" />
      <div
        :class="{'illustrated-content__text--inverse-layout': inverseLayout }"
        class="illustrated-content__text">
        <h2 v-if="title" class="illustrated-content__title-secondary h2-secondary">{{ title }}</h2>
        <rich-text :text="text" class="illustrated-content__body" />
        <smart-link v-if="Object.keys(callToAction).length" :item="callToAction" class="illustrated-content__button button button--primary" />
      </div>
  </article>
</template>
<script>
  import ResponsiveImage from '../responsive-image'
  import RichText from '../rich-text'
  import SmartLink from '../smart-link'

  export default {
  components: {
    ResponsiveImage,
    RichText,
    SmartLink
  },
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
      image: {
        type: Object,
        required: true,
      },
      callToAction: {
        type: Object,
        default () {
          return {}
        }
      },
      inverseLayout: {
        type: Boolean,
        default: false,
      },
    }
  }
</script>

<style>
@media (min-width: 720px) {
  .illustrated-content {
    display: flex;
  }

  .illustrated-content--inverse-layout {
    flex-direction: row-reverse;
  }

  .illustrated-content__text {
    align-self: center;
    width: 50%;
    padding-left: var(--spacing-double);
  }

  .illustrated-content__text--inverse-layout {
    padding-left: 0;
    padding-right: var(--spacing-double);
  }

  .illustrated-content__image {
    width: 50%;
  }
}
</style>
