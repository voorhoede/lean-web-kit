<template>
    <list-tag :ordered="ordered">
      <li v-for="link in links" :key="link.slug">
        <smart-link :item="link">{{ link.title }}</smart-link>
      </li>
    </list-tag>
</template>

<script>
import ListTag from '../list-tag'
import SmartLink from '../smart-link'

export default {
  components: {
    ListTag,
    SmartLink,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
    ordered: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
}
</script>
