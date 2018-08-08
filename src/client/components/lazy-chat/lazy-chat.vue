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
      :class="{ 'loading': (isAccepted && !isLoaded) }"
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
    },
    onLoaded () {
      this.provider.onLoaded()
      this.isLoaded = true
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

.lazy-chat {
  position: fixed;
  bottom: var(--spacing-default);
  right: var(--spacing-default);
  z-index: var(--layer--overlay);
}

.lazy-chat__prompt {
  box-shadow: var(--shadow-wide-grey);
}

.lazy-chat__open-button {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  padding: 0;
  margin-right: -1px;
  margin-bottom: -1px;
  position: relative;
}

.lazy-chat__open-button:before {
  content: '';
  display: inline-block;
  margin-left: 0;
  margin-bottom: -6px;
  width: 32px;
  height: 26px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 369.982 369.982'%3E%3Cpath d='M314.821 47.893c-34.797-28.139-80.904-43.636-129.83-43.636S89.958 19.754 55.161 47.894C19.59 76.661 0 115.142 0 156.249c0 41.108 19.59 79.591 55.161 108.356 34.797 28.141 80.904 43.639 129.83 43.639 4.981 0 10-.166 14.995-.496l31.509 51.959c2.213 3.648 6.134 5.916 10.399 6.018.097.002.191.002.29.002 4.155 0 8.051-2.068 10.376-5.529l66.711-99.326c32.727-28.33 50.711-65.371 50.711-104.621 0-41.11-19.589-79.591-55.161-108.358zm-13.917 195.78l-58.183 86.332-25.372-41.838c-2.279-3.76-6.348-6.018-10.686-6.018-.419 0-.84.021-1.262.062-6.752.684-13.619 1.029-20.412 1.029-88.22 0-159.991-56.97-159.991-126.994 0-70.023 71.771-126.992 159.991-126.992 88.22 0 159.991 56.969 159.991 126.992.002 32.639-15.652 63.686-44.076 87.427z' fill='%23FFF'/%3E%3C/svg%3E");
  background-position: center !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
}

.loading:before {
  animation: button__spinner 2s linear infinite;
  background-image: url('/images/spinner.png');
  margin-bottom: 0 !important;
}

@keyframes button__spinner {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}

#crisp-chatbox[data-last-operator-face="false"] span[data-is-ongoing="false"] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 369.982 369.982'%3E%3Cpath d='M314.821 47.893c-34.797-28.139-80.904-43.636-129.83-43.636S89.958 19.754 55.161 47.894C19.59 76.661 0 115.142 0 156.249c0 41.108 19.59 79.591 55.161 108.356 34.797 28.141 80.904 43.639 129.83 43.639 4.981 0 10-.166 14.995-.496l31.509 51.959c2.213 3.648 6.134 5.916 10.399 6.018.097.002.191.002.29.002 4.155 0 8.051-2.068 10.376-5.529l66.711-99.326c32.727-28.33 50.711-65.371 50.711-104.621 0-41.11-19.589-79.591-55.161-108.358zm-13.917 195.78l-58.183 86.332-25.372-41.838c-2.279-3.76-6.348-6.018-10.686-6.018-.419 0-.84.021-1.262.062-6.752.684-13.619 1.029-20.412 1.029-88.22 0-159.991-56.97-159.991-126.994 0-70.023 71.771-126.992 159.991-126.992 88.22 0 159.991 56.969 159.991 126.992.002 32.639-15.652 63.686-44.076 87.427z' fill='%23FFF'/%3E%3C/svg%3E") !important;
}

#crisp-chatbox > div > a > span:last-child {
  background-color: var(--action-color) !important;
}

@media screen and (min-width: 560px) {
  .lazy-chat__open-button {
    width: 60px;
    height: 60px;
    margin-right: 8px;
    margin-bottom: 4px;
  }

  .lazy-chat__open-button:before {
    margin-left: -2px;
    margin-bottom: -6px;
    width: 33px;
    height: 28px;
  }
}
</style>
