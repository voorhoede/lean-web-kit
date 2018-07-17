<template>
  <div class="lazy-chat">
    <button v-if="!prompt && !loaded"
      class="button lazy-chat__open"
      :class="{
        'lazy-chat__open--pending': pending,
        'lazy-chat__open--prompt': prompt,
      }"
      @click="requestChat"
    >
      <span class="a11y-sr-only">{{ $t('open_chat') }}</span>
    </button>
    <div
      v-if="prompt && !pending"
      role="dialog"
      class="lazy-chat__prompt"
      :aria-label="$t('chat')"
      aria-describedby="lazy-chat__prompt-text"
    >
      <p id="lazy-chat__prompt-text" v-html="$t('prompt_terms_conditions')"></p>
      <button class="button button--primary" @click="loadChat">
        {{ $t('agree') }}
      </button>
      <button class="button" @click="declineChat">
        {{ $t('decline') }}
      </button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      prompt: false,
      pending: false,
      loaded: false
    }
  },
  methods: {
    declineChat () {
      this.prompt = false
    },
    requestChat () {
      this.prompt = true
    },
    loadChat () {
      // set pending
      this.prompt = false
      this.pending = true
      const crisp = import('./crisp.js')
        .then(() => this.loaded = true)
        .catch(() => this.pending = false)
    }
  }
}
</script>

<style>
@import '../app-core/index.css';

.lazy-chat {
  position: fixed;
  bottom: .875rem;
  right: .875rem;
}
.lazy-chat__open {
  width: 3.375rem;
  height: 3.375rem;
  border-radius: 3.375rem;
  background-image: url('/images/chat.svg');
  background-size: 57.5%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: var(--action-color);
}
.lazy-chat__open--pending {
  animation: lazy-chat--loading 2s linear infinite;
}
@keyframes lazy-chat--loading {
    0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
</style>
