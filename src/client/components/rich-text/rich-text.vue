<template>
  <div class="rich-text" v-html="text"></div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.rich-text {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
}

.rich-text p {
  margin-bottom: .8rem;
  line-height: 1.3;
}

.rich-text td {
  padding: var(--spacing-half);
}

.rich-text blockquote {
  position: relative;
  margin: var(--spacing-double) 0;
  padding: 1.3rem 0;
}

.rich-text blockquote:before {
  content: open-quote;
  position: absolute;
  left: 0;
  top: -35px;
  font-size: 6rem;
  font-family: cursive;
}

.rich-text blockquote p {
  margin: 0;
  margin-left: 50px;
  font-size: var(--font-size-medium);
  font-weight: 300;
}

@media screen and (min-width: 450px) {
  .rich-text blockquote {
    margin: var(--spacing-double) 0 var(--spacing-double) 3rem;
    padding: var(--spacing-double) 0;
  }

  .rich-text blockquote:before {
    top: -45px;
    font-size: 8rem;
  }

  .rich-text blockquote p {
    margin-left: 70px;
    font-size: var(--font-size-large);
  }
}
</style>

