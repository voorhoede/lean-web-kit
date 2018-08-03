<template>
  <ol v-if="ordered">
    <slot />
  </ol>

  <ul v-else>
    <slot />
  </ul>
</template>

<script>
export default {
  props: {
    ordered: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
}
</script>

