<template>
  <nav class="table-of-contents">
    <h2 class="a11y-sr-only">{{ $t('table_of_contents') }}</h2>
    
    <ol class="table-of-contents__inline-list">
      <li class="table-of-contents__list-item" v-for="(item, index) in items" :key="index">
        <a class="table-of-contents__link-item" :href="`#${item.slug}`">
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
.table-of-contents__inline-list {
  padding: 0;
  text-align: center;
}

.table-of-contents__list-item {
  list-style-type: none;
  text-transform: uppercase;
}

.table-of-contents__link-item {
  display: block;
  padding: var(--spacing-default) 0;
  background: linear-gradient(to right, var(--action-color), var(--action-color)) no-repeat;
  background-size: 0% 3px;
  background-position: bottom;
  transition: 1s;
  color: var(--text-color);
}

.table-of-contents__link-item:hover,
.table-of-contents__link-item:focus{
  border: none;
  outline: none;  
  background-size: 50% 3px;
}

@media screen and (min-width: 640px) {
  .table-of-contents {
    margin: 0 var(--spacing-double);
  }

  .table-of-contents__inline-list {
    text-align: left;
  }

  .table-of-contents__link-item {
    background-position: bottom left;
  }
}
</style>
