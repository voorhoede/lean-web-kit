<template>
    <list-tag
      :ordered="ordered"
      class="link-list">
      <li v-for="(link, index) in links" :key="index">
        <smart-link :item="link" active-class="link-list__link--active">{{ link.title }}</smart-link>
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

<style>
.link-list__link--active {
  font-weight: bold;
}
</style>

