<template>
  <nav>
    <h2>Table of Contents</h2>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <a :href="`#${item.slug}`">
          {{ item.title }}
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: ['items'],
}
</script>
