<template>
  <div @click="trackOutboundLink">
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    trackOutboundLink (event) {
      const target = event.target
      if (
        // Target is a link
        target.tag = 'a'
        // Target is outbound by checking data-attribute set by `dato.config.js` and in `smart-link` component
        && target.hasAttribute('data-outbound')
      ) {
        this.$ga.query({
          eventCategory: 'outbound',
          eventAction: 'click',
          eventLabel: target.href,
          transport: 'beacon'
        })
      }
    }
  }
}
</script>
