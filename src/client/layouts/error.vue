<template>
  <div>
    <page-layout v-if="error.statusCode === 404" :page="notfound" />
  </div>
</template>

<script>
  import notfoundI18n from '../static/data/404.json'
  import { PageLayout } from '../components/'

  export default {
    components: { PageLayout },
    props: ['error'],
    layout: 'default',
    computed: {
      locale() { return this.$i18n.locale },
      notfound() { return notfoundI18n[this.locale] },
    },
  }
</script>
