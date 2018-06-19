<template>
  <main>
    <h1>Lean Web Kit</h1>
    <p>...</p>
    <share-button
      :title="'Test title'"
      :url="'www.voorhoede.nl'"
      :description="'This is the website description'"
    />
  </main>
</template>

<script>
import { ShareButton } from '../components/'

export default {
  components: { ShareButton }
}
</script>

<style>
</style>
