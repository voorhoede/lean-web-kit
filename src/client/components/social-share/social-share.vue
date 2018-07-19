<template>
  <div class="social-share">
    <a class="social-share__button" @click.prevent="showOptions" href="#share" role="button">
      <span class="a11y-sr-only">{{ !optionsAreVisible ? $t('show_sharing_options') : $t('hide_sharing_options') }}</span>
      <img class="social-share__icon" src="/images/share.svg">
    </a>

    <div class="social-share__links" id="share">
      <a :href="`https://twitter.com/intent/tweet?text=${title} ${encodedDescription} ${encodedUrl}`"
         :class="{ 'visible' : optionsAreVisible }" 
         class="social-share__link twitter"
         target="_blank"
         rel="noopener"
         :title="$t('share_on_platform', { platform: 'Twitter'} )"
         @click="handleClick('Twitter')">
        <img class="social-share__icon" src="/images/twitter-icon.svg">
      </a>
      
      <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`"
         :class="{ 'visible' : optionsAreVisible }" 
         class="social-share__link facebook"
         target="_blank"
         rel="noopener"
         :title="$t('share_on_platform', { platform: 'Facebook'} )"
         @click="handleClick('Facebook')">
         <img class="social-share__icon" src="/images/facebook-icon.svg">
      </a>

      <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${title}&summary=${encodedDescription}`"
         :class="{ 'visible' : optionsAreVisible }" 
         class="social-share__link linkedin"
         target="_blank"
         rel="noopener"
         :title="$t('share_on_platform', { platform: 'Linkedin'} )"
         @click="handleClick('Linkedin')">
         <img class="social-share__icon" src="/images/linkedin-icon.svg">
      </a>

      <a :href="`whatsapp://send?text=${encodedUrl}`"
         data-action="share/whatsapp/share"
         :class="{ 'visible' : optionsAreVisible }"
         class="social-share__link whatsapp"
         target="_blank"
         rel="noopener"
         :title="$t('share_on_platform', { platform: 'WhatsApp'} )"
         @click="handleClick('WhatsApp')">
         <img class="social-share__icon" src="/images/whatsapp-icon.svg">
      </a>

      <a :href="`mailto:?&subject=${title}&body=${encodedUrl}`"
         :class="{ 'visible' : optionsAreVisible }" 
         class="social-share__link mail"
         target="_blank"
         rel="noopener"
         :title="$t('share_via_email')"
         @click="handleClick('Mail')">
         <img class="social-share__icon" src="/images/mail.svg">
      </a>
      
      <button
        v-if="copyToClipboardIsVisible"
        :class="{ 'visible' : optionsAreVisible }" 
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
@import '../app-core/index.css';

.social-share__snackbar {
  position: absolute;
  bottom: -275px;
  left: -215px;
  padding: var(--spacing-half);
  background-color: var(--text-color);
  text-align: center;
  color: var(--background-color);
  font-size: var(--font-size-small);
  width: 200px;
  opacity: 0;
  border-radius: 30px;
  -webkit-transition: all .5s ease-in-out;
          transition: all .5s ease-in-out;
}

.social-share__snackbar--visible {
  opacity: 1;
}

.social-share {
  position: fixed; 
  right: var(--spacing-default);
  top: calc(var(--app-header-mobile-height) + var(--spacing-default));
  z-index: 1;
  height: 40px;
  width: 40px;
}

@media screen and (min-width: 640px) {
  .social-share {
    top: calc(var(--app-header-height) + var(--spacing-default));
  }
}

.social-share__icon {
  width: 20px;
  height: 20px;
}

.facebook .social-share__icon {
  width: auto;
  height: 20px;
}

.social-share__button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0; 
  left: 0; 
  z-index: 1;
  padding: 0;
  background-color: var(--action-color);
  height: 46px; 
  width: 46px;
  border: none;
  border-radius: 50%;
  outline: none;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  -webkit-transition: all .3s ease-in-out;
          transition: all .3s ease-in-out;
}

.social-share__button:hover,
.social-share__button:focus {
  box-shadow: 1px 5px 15px rgba(0,0,0,.2);
  transform: scale(1.2);
}

.social-share__button:active {
  opacity: .8;
}

.social-share__links {
  position: relative; 
}

.social-share__link:after {
  -webkit-transition: opacity .25s cubic-bezier(.15,.2,.1,1);
          transition: opacity .25s cubic-bezier(.15,.2,.1,1);
  opacity: 0; 
  content: ''; 
  display: block;
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%;
  background-color:var(--background-color); 
  border-radius: 50%;
}

.social-share__link:focus {
  outline: none;
}

.social-share__link:hover:after,
.social-share__link:focus:after,
.social-share__link:active:after {
  opacity: .5;
}

.social-share__link {
  -webkit-transform: translateY(0px) scale(0);
          transform: translateY(0px) scale(0);
  -webkit-transition: all .5s ease;
          transition: all .5s ease;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 5px;
  height: 36px; 
  width: 36px;
  background-color: var(--action-color);
  box-shadow: 0px 4px 10px rgba(0,0,0,.2); 
  border-radius: 50%; 
}

/* apply shared styles to all links */

#share:target .social-share__link,
.visible {
  opacity: 1;
  -webkit-transition: all .5s cubic-bezier(0,1.33,.44,.98);
          transition: all .5s cubic-bezier(0,1.33,.44,.98);
}

/* add styles that are specific for each link delay and translateY */

#share:target .social-share__link:nth-child(1),
.visible:nth-child(1) {
  -webkit-transition-delay: .5s;
          transition-delay: .5s;
  -webkit-transform: translateY(55px) scale(1);
          transform: translateY(55px) scale(1);
}

#share:target .social-share__link:nth-child(2),
.visible:nth-child(2) {
  -webkit-transition-delay: .4s;
          transition-delay: .4s;
  -webkit-transform: translateY(100px) scale(1);
          transform: translateY(100px) scale(1);
}

#share:target .social-share__link:nth-child(3),
.visible:nth-child(3) {
  -webkit-transition-delay: .3s;
          transition-delay: .3s;
  -webkit-transform: translateY(145px) scale(1);
          transform: translateY(145px) scale(1);
}

#share:target .social-share__link:nth-child(4),
.visible:nth-child(4) {
  -webkit-transition-delay: .2s;
          transition-delay: .2s;
  -webkit-transform: translateY(190px) scale(1);
          transform: translateY(190px) scale(1);
}

#share:target .social-share__link:nth-child(5),
.visible:nth-child(5) {
  -webkit-transition-delay: .1s;
          transition-delay: .1s;
  -webkit-transform: translateY(235px) scale(1); 
          transform: translateY(235px) scale(1); 
}

#share:target .social-share__link:nth-child(6),
.visible:nth-child(6) {
  -webkit-transform: translateY(280px) scale(1); 
          transform: translateY(280px) scale(1); 
}

/* Copy to clipboard is not shown if JS is not enabled */

#share:target .copy-to-clipboard {
  display: none;
}
</style>
