<template>
  <div class="lazy-chat">
    <!-- Load third-party script conditionally -->
    <script async type="application/javascript"
      v-if="isAccepted"
      :src="provider.script"
    />
    <button v-if="chatButtonIsShown"
      class="button button--primary lazy-chat__open-button"
      :class="{ 'lazy-chat__open-button--pending': (isAccepted && !isLoaded) }"
      @click="isRequested = true"
    >
      <span class="a11y-sr-only">{{ $t('chat') }}</span>
    </button>
  <opt-in
    v-if="promptIsShown"
    class="lazy-chat__prompt"
    name="terms_conditions"
    :title="$t('chat')"
    :body="$t('prompt_terms_conditions')"
    @accept="loadChat"
    @decline="isRequested = false"
  />
  </div>
</template>

<script>
import * as provider from './providers/crisp'
import OptIn from '../opt-in'

export default {
  components: { OptIn },
  data () {
    return {
      isRequested: false, // user clicks chat button
      isAccepted: false, // user accepts T&C
      isLoaded: false, // script is loaded
      provider,
    }
  },
  methods: {
    loadChat () {
      this.isAccepted = true
      this.provider.onAccepted()

      this.provider.listenToOpener(() => {
        this.isLoaded = true
      })
    },
  },
  computed: {
    chatButtonIsShown () {
      return !this.isRequested || (this.isAccepted && !this.isLoaded)

    },
    promptIsShown () {
      return (this.isRequested && !this.isAccepted)
    }
  },
}
</script>

<style>
@import '../app-core/variables.css';
@import '../app-core/crisp-css-override.css';

.lazy-chat {
  position: fixed;
  bottom: var(--spacing-default);
  right: var(--spacing-default);
  z-index: var(--layer--overlay);
}

.lazy-chat__prompt {
  box-shadow: var(--shadow-wide-grey);
}
</style>
