<template>
  <nav>
    <h2>{{ $t('table_of_contents') }}</h2>
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
