<template>
  <div class="smart-links">
    <smart-link v-for="item in items"
    :key="item.slug"
    :item="item"
    :class="{
      'button': true,
      'button--primary': item.theme === 'primary'
    }" />
  </div>
</template>

<script>
import SmartLink from '../smart-link'
export default {
  components: {
    SmartLink
  },
  props: {
    items: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>
@import '../app-core/variables.css';

.smart-links > *:not(:first-child) {
  margin-left: 1rem;
}
</style>
