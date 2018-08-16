<template>
  <ul class="download-files">
    <li
      v-for="item in files"
      :key="item.id"
      class="download-files__item">
      <a
        :href="item.file.url"
        :download="`${item.slug}.${item.file.format}`"
        class="download-files__link">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    files: {
      type: Array,
      required: true,
      validator: function(data) {
        const obj = data[0]
        return obj.title && obj.file && obj.file.url && obj.file.format && obj.slug && obj.id
      },
    },
  },
}
</script>

<style>
.download-files__link::after {
  content: '↓';
  speak: none; /* don't try to pronounce an arrow */
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-left: .25em;
  padding-left: .0625em; /* arrow offset left */
  vertical-align: middle;
  font-size: .625em;
  line-height: .75em; /* arrow offset top */
  border-bottom: .125em solid currentColor;
}

.download-files__link:hover::after {
  content: '↓';
  border-bottom: none;
}
</style>
