<template>
  <blockquote class="pull-quote">
    <p class="pull-quote__body">{{ quote.body }}</p>
    <footer v-if="quote.authorName" class="pull-quote__footer">
      <responsive-image
        v-if="quote.authorImage"
        :image="quote.authorImage"
        class="pull-quote__image" />
      <span>{{ quote.authorName }}</span>
    </footer>
  </blockquote>
</template>

<script>
import ResponsiveImage from '../responsive-image'

export default {
  components: { ResponsiveImage },
  props: {
    quote: {
      type: Object,
      required: true,
      validator: function({ body }) {
        return body
      },
    },
  },
}
</script>

<style>
.pull-quote__body {
  margin-bottom: .5rem;
}

.pull-quote__footer {
  display: flex;
  align-items: center;
}

.pull-quote__image {
  width: 30px;
  margin: 0;
  margin-right: .5rem;
}
</style>
