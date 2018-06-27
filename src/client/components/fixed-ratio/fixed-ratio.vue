<template>
  <div class="fixed-ratio" :style="{ paddingBottom: `${ratio}%` }">
    <div class="fixed-ratio__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: ['content'],
  computed: {
    ratio() {
      return this.content.height / this.content.width * 100
    }
  },
}

</script>

<style>
.fixed-ratio {
  background-color: var(--neutral-color);
  display: block;
  position: relative;
  height: 0;
  overflow: hidden;
}

.fixed-ratio__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: inherit;
}
</style>