<template>
  <main>
    <page-header :class="'full-page-header'" :image="pageInfo.image" :title="pageInfo.title" :subtitle="pageInfo.subtitle" />
    <!-- <h1>Lean Web Kit</h1> -->
    <!-- <p>...</p> -->
  </main>
</template>

<script>
import { PageHeader } from '../components'

export default {
  components: { PageHeader },
  data () {
    return {
      pageInfo: {
        image: { src: 'https://www.datocms-assets.com/6068/1531404759-spacex-530585-unsplash.jpg' },
        title: 'Lean Web Kit',
        subtitle: 'We kickstart your projects!'
      }
    }
  }
}
</script>

<style>
</style>
