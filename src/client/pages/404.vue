<template>
  <div>
    <error :error="error" />
  </div>
</template>

<script>
import Error from '../layouts/error'

export default {
  components: { Error },
  data () {
    return {
      error: {
        statusCode: 404,
      }
    }
  }
}
</script>
