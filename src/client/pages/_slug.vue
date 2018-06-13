<template>
  <main>
    <h1>{{ page.title }}</h1>
    <content-item v-for="(item, index) in page.content" :key="index" :item="item" />
  </main>
</template>

<script>
import { ContentItem } from '../components/'
import { getPageData, seoHead } from '../lib/'

export default {
  components: { ContentItem },
  async asyncData ({ params }) {
    const { slug } = params
    const page = await getPageData({ slug })
    return { page }
  },
  head () {
    return seoHead(this.page.seo)
  },
}
</script>
