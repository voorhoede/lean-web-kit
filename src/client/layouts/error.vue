<template>
  <page-layout v-if="error.statusCode === 404" :page="errorPage" />
</template>

<script>
  import { PageLayout } from '../components/'
  import getDatoData from "../lib/get-page-data";
  import query from "./_404.query.graphql";

  export default {
    components: { PageLayout },
    props: ['error'],
    layout: 'default',

    data() {
      return {
        errorPage: {}
      }
    },

    async fetch() {
      const locale = this.$i18n.locale
      const { _404Page } = await getDatoData({
        query,
        locale
      })
      this.errorPage = _404Page
    },

    head() {
      return {
        title: this.errorPage.title
      }
    },
  }
</script>
