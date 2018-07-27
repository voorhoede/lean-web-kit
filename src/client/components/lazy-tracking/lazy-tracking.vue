<template>
  <div class="lazy-tracking">
    <!-- Load third-party script conditionally -->
    <script async type="application/javascript"
      v-if="isAccepted"
      :src="provider.script"
      @load="onLoaded"
    />
    <opt-in
      v-if="promptIsShown"
      class="lazy-tracking__prompt"
      name="terms_conditions"
      :title="$t('tracking')"
      :body="$t('prompt_terms_conditions')"
      @accept="loadTracking"
      @decline="isRequested = false"
    />
  </div>
</template>

<script>
import * as provider from './providers/hotjar'
import OptIn from '../opt-in'

export default {
  components: { OptIn },
  data () {
    return {
      isRequested: false,
      isAccepted: false, // user accepts T&C
      isLoaded: false, // script is loaded
      provider,
    }
  },
  mounted () {
    if ('doNotTrack' in navigator && navigator.doNotTrack === "1") {
      this.isRequested = false
    } else {
      this.isRequested = true
    }
  },
  destroyed () {
    this.onDestroyed()
  },
  methods: {
    loadTracking () {
      this.isAccepted = true
      this.provider.onAccepted()
    },
    onLoaded () {
      this.isLoaded = true
      this.provider.onLoaded()
    },
    onDestroyed () {
      this.provider.onDestroyed()
    }
  },
  computed: {
    promptIsShown () {
      return (this.isRequested && !this.isAccepted)
    }
  }
}
</script>

<style>
@import '../app-core/variables.css';

.lazy-tracking__prompt {
  position: fixed; /* prompt is only visible element of component */
  bottom: var(--spacing-default);
  left: var(--spacing-default);
  right: var(--spacing-default);
  box-shadow: var(--shadow-wide-grey);
  z-index: var(--layer--popup);
}
</style>
