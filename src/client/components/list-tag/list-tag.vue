<template>
  <ol v-if="ordered" class="link-list">
    <slot />
  </ol>

  <ul v-else class="link-list">
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

