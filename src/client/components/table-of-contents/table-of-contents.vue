<template>
  <nav class="table-of-contents" id="table-of-contents">
    <h2 class="a11y-sr-only">{{ $t('table_of_contents') }}</h2>
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

<style>

.table-of-contents {
  margin: 0 2rem;
}

.table-of-contents li {
  padding: .7rem 0;
}
</style>
