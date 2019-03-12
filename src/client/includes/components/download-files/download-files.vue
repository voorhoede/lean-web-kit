<template>
  <ul class="download-files">
    <li v-for="item in files" :key="item.id">
      <a
        :href="item.file.url"
        :download="`${item.title}.${item.file.format}`"
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
      validator: function(files) {
        const requiredProps = ['title', 'file', 'id']
        return files.every(file => requiredProps.every(prop => file.hasOwnProperty(prop)))
      }
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
  vertical-align: middle;
  text-align: center;
  font-size: .65em;
  line-height: .6em; /* arrow offset top */
  border-bottom: .125em solid currentColor;
}

.download-files__link:hover::after {
  border-bottom: none;
}
</style>
