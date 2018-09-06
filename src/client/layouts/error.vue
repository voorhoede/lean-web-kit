<template>
  <page-layout v-if="error.statusCode === 404" :page="page" />
</template>

<script>
  import pageI18n from '../static/data/404.json'
  import { PageLayout } from '../components/'

  export default {
    components: { PageLayout },
    props: ['error'],
    layout: 'default',
    computed: {
      locale() { return this.$i18n.locale },
      page() { return pageI18n[this.locale] },
    },
    head() {
      return {
        title: this.page.title
      }
    }
  }
</script>
