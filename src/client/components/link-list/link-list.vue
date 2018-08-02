<template>
<div>
<h2>Link list!!!</h2>
<ul>
  <li v-for="link in links" :key="link.id">
    {{ link }}
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
    }
  }
}
</script>
