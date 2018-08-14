<template>
  <div class="social-share">
    <a class="social-share__button" @click.prevent="showOptions" href="#share" role="button">
      <span class="a11y-sr-only">{{ !optionsAreVisible ? $t('show_sharing_options') : $t('hide_sharing_options') }}</span>
      <img class="social-share__icon" src="/images/share.svg">
    </a>

    <div class="social-share__links" id="share">
      <a
        v-for="platform in platforms" :key="platform.name"
        :href="platform.shareUrl({encodedDescription, encodedUrl, title})"
        class="social-share__link"
        :class="{ 'social-share__link--visible' : optionsAreVisible }"
        target="_blank"
        rel="noopener"
        :title="platform.name === 'Email' ?
                $t( 'share_via_email' ) :
                $t( 'share_on_platform', { platform: platform.name })"
        @click="handleClick(platform.name)"
      >
        <img class="social-share__icon" :src="`/images/${platform.icon}`">
      </a>

      <button
        v-if="copyToClipboardIsVisible"
        :class="{ 'social-share__link--visible' : optionsAreVisible }"
        class="social-share__link copy-to-clipboard"
        :title="$t('copy_to_clipboard')"
        @click="copyToClipboard">
        <img class="social-share__icon" src="/images/copy-to-clipboard.svg">
      </button>
    </div>

    <div :class="{ 'social-share__snackbar--visible' : snackbarIsVisible }" class="social-share__snackbar">
      {{ $t('link_copied_to_clipboard') }}
    </div>
  </div>
</template>

<script>
import platforms from './platforms'

export default {
  props: {
    url: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false }
  },

  data () {
    return {
      optionsAreVisible: false,
      snackbarIsVisible: false,
      copyToClipboardIsVisible: true,
      platforms,
    }
  },

  computed: {
    encodedDescription() {
      return process.browser ? encodeURIComponent(this.description) : this.description
    },

    encodedUrl() {
      return process.browser ? encodeURIComponent(this.url) : this.url
    },
  },

  methods: {
    shared (platform) {
      return this.$ga.social({
        socialNetwork: platform,
        socialAction: 'share',
        socialTarget: this.url
      })
    },

    showOptions () {
      if (navigator.share) {
        return navigator.share({
          url: this.url
        }).then(() => this.shared('Native'))
      }

      this.optionsAreVisible = !this.optionsAreVisible
    },

    showSnackbar () {
      this.snackbarIsVisible = true
      window.setTimeout(() => this.snackbarIsVisible = false, 2000)
    },

    hideSharingButtons () {
      this.optionsAreVisible = false
    },

    handleClick (platform) {
      this.shared(platform)

      this.hideSharingButtons()
    },

    copyToClipboard () {
      const el = document.createElement('textarea')
      el.value = this.url
      document.body.appendChild(el)

      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)

      this.showSnackbar()
    },
  },
  mounted () {
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      this.copyToClipboardIsVisible = false
    }
  }
}
</script>

<style>
@import '../app-core/variables.css';

.social-share {
  position: fixed;
  right: var(--spacing-default);
  top: calc(var(--app-header-mobile-height) + var(--spacing-default));
  z-index: var(--layer--raised);
  height: 40px;
  width: 40px;
}

@media screen and (min-width: 640px) {
  .social-share {
    top: calc(var(--app-header-height) + var(--spacing-default));
  }
}

.social-share__button {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--layer--raised);
  padding: 0;
  height: 46px;
  width: 46px;
  border-radius: 50%;
  border: none;
  background-color: var(--action-color);
  outline: none;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  transition: all .3s ease-in-out;
}

.social-share__button:hover,
.social-share__button:focus {
  box-shadow: 1px 5px 15px rgba(0,0,0,.2);
  transform: scale(1.2);
  background-color: var(--focus-color);
}

/* add white layer on buttons for hover effect */

.social-share__button:after,
.social-share__link:after {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: '';
  background-color:var(--background-color);
  border-radius: 50%;
  transition: opacity .25s cubic-bezier(.15,.2,.1,1);
}

.social-share__button:after {
  width: 46px;
  height: 46px;
}

.social-share__link:after {
  width: 36px;
  height: 36px;
}

.social-share__links {
  position: relative;
}

.social-share__link {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: var(--action-color);
  box-shadow: 0px 4px 10px rgba(0,0,0,.2);
  transform: translateY(0px) scale(0);
  transition: all .5s ease;
}

.social-share__link:focus {
  background-color: var(--focus-color);
  outline: none;
}

.social-share__link:hover {
  border-bottom: 0;
}

.social-share__icon {
  width: 20px;
}

.social-share__snackbar {
  opacity: 0;
  position: absolute;
  bottom: -280px;
  left: -215px;
  padding: var(--spacing-half);
  width: 200px;
  border-radius: 30px;
  font-size: var(--font-size-small);
  text-align: center;
  color: var(--background-color);
  background-color: var(--text-color);
  transition: all .5s ease-in-out;
}

.social-share__snackbar--visible {
  opacity: 1;
}

/* apply shared styles to all links */

#share:target .social-share__link,
.social-share__link--visible {
  opacity: 1;
  transition: transform .5s cubic-bezier(0,1.33,.44,.98);
}

/* add styles that are specific for each link delay and translateY */

#share:target .social-share__link:nth-child(1),
.social-share__link--visible:nth-child(1) {
  transition-delay: .5s;
  transform: translateY(60px) scale(1);
}

#share:target .social-share__link:nth-child(2),
.social-share__link--visible:nth-child(2) {
  transition-delay: .4s;
  transform: translateY(105px) scale(1);
}

#share:target .social-share__link:nth-child(3),
.social-share__link--visible:nth-child(3) {
  transition-delay: .3s;
  transform: translateY(150px) scale(1);
}

#share:target .social-share__link:nth-child(4),
.social-share__link--visible:nth-child(4) {
  transition-delay: .2s;
  transform: translateY(195px) scale(1);
}

#share:target .social-share__link:nth-child(5),
.social-share__link--visible:nth-child(5) {
  transition-delay: .1s;
  transform: translateY(240px) scale(1);
}

#share:target .social-share__link:nth-child(6),
.social-share__link--visible:nth-child(6) {
  transform: translateY(285px) scale(1);
}

/* Copy to clipboard is not shown if JS is not enabled */

#share:target .copy-to-clipboard {
  display: none;
}
</style>
