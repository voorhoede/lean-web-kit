<template>
  <ul class="inline-list">
    <li v-for="item in items" :key="item.slug">
      <smart-link
        :item="item"
        :class="{
          'button': item.theme === 'button',
          'button button--primary': item.theme === 'primary button'
        }" />
    </li>
  </ul>
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

</style>
