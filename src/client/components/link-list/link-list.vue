<template>
  <div>
    <h2 v-if="showTitle">{{ title }}</h2>
    <ul class="link-list">
      <li v-for="link in links" :key="link.slug">
        <smart-link :item="link">{{ link.title }}</smart-link>
      </li>
    </ul>
  </div>
</template>

<script>
import SmartLink from '../smart-link'

export default {
  components: {
    SmartLink,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
    showTitle: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: '',
    }
  }
}
</script>
