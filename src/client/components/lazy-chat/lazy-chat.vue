<template>
  <div class="lazy-chat">
    <!-- Load third-party script conditionally -->
    <script async type="application/javascript"
      v-if="isAccepted"
      :src="provider.script"
      @load="onLoaded"
    />
    <button v-if="chatButtonIsShown"
      class="button button--primary lazy-chat__open-button"
      @click="handleClick"
      type="button"
      :class="{ 'lazy-chat__open-button--pending': (isAccepted && !isLoaded) }"
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
    @decline="onDeclined"
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
      this.provider.onSessionLoaded(() => {
        this.isLoaded = true
      })
      this.track('Accepted Opt In')
      this.provider.onChatOpened(() => this.track('Opened chat'))
      this.provider.onChatClosed(() => this.track('Closed chat'))
    },
    onDeclined () {
      this.isRequested = false
      this.isAccepted = false
      this.track('Declined opt-in')
    },
    onLoaded () {
      this.provider.onLoaded()
    },
    handleClick () {
      this.isRequested = true
      this.track('Started chat')
    },
    track (eventLabel) {
      this.$ga.event({
        eventCategory: 'chat',
        eventAction: 'click',
        eventLabel
      })
    }
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
@import './providers/crisp.css';

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
