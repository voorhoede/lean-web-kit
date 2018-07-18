<template>
  <div class="lazy-chat">
    <!-- Load third-party script conditionally -->
    <script async
      v-if="isAccepted"
      :src="provider.script"
      @load="onLoaded"
    />
    <button v-if="chatButtonIsShown"
      class="button button--primary lazy-chat__open-button"
      :class="{ 'button--pending': (isAccepted && !isLoaded) }"
      @click="isRequested = true"
    >
      {{ $t('chat') }}
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
import * as provider from './crisp.js'
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
    },
    onLoaded () {
      this.isLoaded = true
      this.provider.onLoaded()
    }
  },
  computed: {
    chatButtonIsShown () {
      return !this.isRequested || (this.isAccepted && !this.isLoaded)

    },
    promptIsShown () {
      return (this.isRequested && !this.isAccepted)
    }
  }
}
</script>

<style>
@import '../app-core/index.css';

.lazy-chat {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

.lazy-chat__prompt {
  box-shadow: var(--shadow-wide-grey);
}
</style>
