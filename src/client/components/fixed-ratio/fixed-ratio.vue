<template>
  <div class="fixed-ratio" :style="{ paddingBottom: `${ratio}%` }">
    <div class="fixed-ratio__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const dimension = { type: Number, required: true }
export default {
  props: {
    height: dimension,
    width:  dimension,
  },
  computed: {
    ratio() {
      return this.height / this.width * 100
    }
  },
}

</script>

<style>
.fixed-ratio {
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
