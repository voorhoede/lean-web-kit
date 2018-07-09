<template>
  <div class="social-share">
    <button class="social-share__button" @click="showSharingOptions"></button>

    <div class="social-share__links">
      <a :href="`https://twitter.com/home?status=${url}`"
         :class="{ 'visible' : shareButtonsAreVisible }" 
         class="social-share__share-link twitter"
         target="_blank"
         rel="noopener"
         @click="handleClick('Twitter')">
      </a>
      
      <a :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`"
         :class="{ 'visible' : shareButtonsAreVisible }" 
         class="social-share__share-link facebook"
         target="_blank"
         rel="noopener"
         @click="handleClick('Facebook')">
      </a>

      <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}`"
         :class="{ 'visible' : shareButtonsAreVisible }" 
         class="social-share__share-link linkedin"
         target="_blank"
         rel="noopener"
         @click="handleClick('Linkedin')">
      </a>

      <a :href="`whatsapp://send?text=${url}`"
         data-action="share/whatsapp/share"
         :class="{ 'visible' : shareButtonsAreVisible }" 
         class="social-share__share-link whatsapp"
         target="_blank"
         rel="noopener"
         @click="handleClick('WhatsApp')">
      </a>

      <a :href="`mailto:?&subject=${title}&body=${url}`"
         :class="{ 'visible' : shareButtonsAreVisible }" 
         class="social-share__share-link mail"
         target="_blank"
         rel="noopener"
         @click="handleClick('Mail')">
      </a>
      
      <button
        :class="{ 'visible' : shareButtonsAreVisible }" 
        class="social-share__share-link copy-to-clipboard"
        @click="copyToClipboard">
      </button>
    </div>

    <div :class="{ 'snackbar-visible' : snackbarIsVisible }" class="snackbar">{{ copySuccessful ? snackbarSuccessText : snackbarErrorText }}</div>
  </div>
</template>

<script>
export default {
  props: ['url', 'title', 'description'],
  data () {
    return {
      shareButtonsAreVisible: false,
      snackbarSuccessText: 'Link copied to clipboard!',
      snackbarErrorText: 'Copy to clipboard is not supported on iPhone',
      snackbarIsVisible: false,
      copySuccessful: false,
    }
  },
  methods: {
    showSharingOptions () {
      if (navigator.share) {
        return navigator.share({
          url: this.url
        })
      }

      this.shareButtonsAreVisible = !this.shareButtonsAreVisible
    },

    showSnackbar () {
      this.snackbarIsVisible = true
      window.setTimeout(() => this.snackbarIsVisible = false, 2000)
    },

    hideSharingButtons () {
      this.shareButtonsAreVisible = false
    },

    handleClick (plataform) {
      this.$emit('shared', plataform)
      
      this.hideSharingButtons()
    },

    copyToClipboard () {
      if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        return this.showSnackbar()
      }
      
      const el = document.createElement('textarea')
      el.value = this.url
      document.body.appendChild(el)
      
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      
      this.copySuccessful = true
      this.showSnackbar()
    },
  },
}
</script>

<style>
@import '../app-core/index.css';

.snackbar {
  position: absolute;
  bottom: -275px;
  left: -215px;
  background-color: var(--text-color);
  text-align: center;
  color: var(--background-color);
  font-size: var(--font-size-small);
  padding: .5rem;
  width: 200px;
  opacity: 0;
  transition: all .5s ease-in-out;
  border-radius: 30px;
}

.snackbar-visible {
  opacity: 1;
}

.social-share {
  position: absolute; 
  right: var(--spacing-default);
  top: calc(var(--app-header-height) + var(--spacing-default));
  z-index: 1;
  height: 50px;
  width: 50px;
}

.social-share__button {
  position: absolute; 
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath d='M128 174.829c-46.48 0-84.293 37.813-84.293 84.293S81.52 343.415 128 343.415s84.293-37.813 84.293-84.293S174.48 174.829 128 174.829zm0 131.122c-25.825 0-46.829-21.005-46.829-46.829s21.005-46.829 46.829-46.829 46.829 21.005 46.829 46.829-21.004 46.829-46.829 46.829zM384 0c-46.48 0-84.293 37.813-84.293 84.293 0 46.48 37.813 84.293 84.293 84.293s84.293-37.813 84.293-84.293C468.293 37.813 430.48 0 384 0zm0 131.122c-25.825 0-46.829-21.004-46.829-46.829S358.176 37.464 384 37.464s46.829 21.004 46.829 46.829c0 25.824-21.004 46.829-46.829 46.829zM384 343.415c-46.48 0-84.293 37.813-84.293 84.293S337.52 512 384 512s84.293-37.813 84.293-84.293S430.48 343.415 384 343.415zm0 131.122c-25.825 0-46.829-21.004-46.829-46.829s21.005-46.829 46.829-46.829 46.829 21.004 46.829 46.829c0 25.824-21.004 46.829-46.829 46.829z' fill='%23FFF'/%3E%3Cpath fill='%23FFF' d='M170.2875231 210.3301817l157.3471845-101.7687935 20.3466984 31.4585208-157.3471845 101.7687935zM170.2383304 309.8150712l20.3948572-31.4239644 152.980344 99.287672-20.3948572 31.4239644z'/%3E%3C/svg%3E");  background-size: 50%;
  background-position: center center;
  background-repeat: no-repeat;
  top: 0; 
  left: 0; 
  z-index: 10;
  background-color: var(--action-color);
  height: 50px; 
  width: 50px;
  border: none;
  border-radius: 50%;
  outline: none;
  transition: all .3s ease-in-out;
}

.social-share__button:hover,
.social-share__button:focus,
.social-share__button:active {
  box-shadow: 1px 5px 15px rgba(0,0,0,.2);
  transform: scale(1.2);
}

.social-share__links {
  position: relative; 
}

.social-share__share-link:after {
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

.social-share__share-link:focus {
  outline: none;
}

.social-share__share-link:hover:after,
.social-share__share-link:focus:after,
.social-share__share-link:active:after {
  opacity: .3;
}

.social-share__share-link {
  transform: translateY(0px) scale(0);
  transition: all .5s ease;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 7px;
  height: 36px; 
  width: 36px;
  background-color: var(--action-color);
  background-size: 50% 50%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 10px rgba(0,0,0,.2); 
  border-radius: 50%; 
}

.visible {
  opacity: 1;
  transition: all .5s cubic-bezier(0,1.33,.44,.98);
}

.visible:nth-child(1) {
  transition-delay: .5s;
  transform: translateY(65px) scale(1);
}

.visible:nth-child(2) {
  transition-delay: .4s;
  transform: translateY(110px) scale(1);
}

.visible:nth-child(3) {
  transition-delay: .3s;
  transform: translateY(155px) scale(1);
}

.visible:nth-child(4) {
  transition-delay: .2s;
  transform: translateY(200px) scale(1);
}

.visible:nth-child(5) {
  transition-delay: .1s;
  transform: translateY(245px) scale(1); 
}

.visible:nth-child(6) {
  transform: translateY(290px) scale(1); 
}

.facebook {
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='42' viewBox='0 0 22 42' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.67822371 22.2466386h4.60878427v18.8495699c0 .3721765.30351312.673703.67814159.673703h7.81439523c.3746285 0 .6781416-.3015265.6781416-.673703V22.3354812h5.2982583c.3444907 0 .634372-.2568197.6737072-.5967713l.8046875-6.9394345c.0220901-.1909015-.0387604-.3821294-.1673593-.5253871-.128681-.1433394-.3128747-.2254107-.5061836-.2254107h-6.1027816V9.69845133c0-1.31126521.7106608-1.97623894 2.1126024-1.97623894h3.9901792c.3746284 0 .6781416-.30168971.6781416-.67370299V.67867948c0-.37217644-.3035132-.67370299-.6781416-.67370299h-5.4991223C15.0229139.00310011 14.9367707 0 14.8098142 0c-.9541448 0-4.270699.18608822-6.89055258 2.58043418C5.01650684 5.23380254 5.42004133 8.41068169 5.51644945 8.9615224v5.086792H.67814159C.30351312 14.0483144 0 14.349841 0 14.7220174v6.8508366c.00008212.3720948.30359524.6737846.67822371.6737846z' fill='%23FFF' fill-rule='nonzero'/%3E%3C/svg%3E");
}

.whatsapp {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath d='M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0zm148.96 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z' fill='%23FFF'/%3E%3C/svg%3E");
}

.linkedin {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 430.117 430.117'%3E%3Cpath d='M430.117 261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707-25.473 0-40.632 17.142-47.301 33.724-2.432 5.928-3.058 14.179-3.058 22.477V420.56h-92.219s1.242-251.285 0-277.32h92.21v39.309c-.187.294-.43.611-.606.896h.606v-.896c12.251-18.869 34.13-45.824 83.102-45.824 60.673-.001 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.251 0 57.463c0 26.619 20.038 47.94 50.959 47.94h.616c32.159 0 52.159-21.317 52.159-47.94-.606-27.212-20-47.905-51.551-47.905zM5.477 420.56h92.184V143.24H5.477v277.32z' fill='%23FFF'/%3E%3C/svg%3E");
}

.mail {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 485.211 485.211'%3E%3Cpath d='M485.211 363.906c0 10.637-2.992 20.498-7.785 29.174L324.225 221.67l151.54-132.584c5.895 9.355 9.446 20.344 9.446 32.219v242.601zM242.606 252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651c-10.524 0-20.271 2.905-28.889 7.642l210.844 184.5zm58.787-11.162l-48.809 42.734c-2.855 2.487-6.41 3.729-9.978 3.729-3.57 0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667 415.23c9.299 5.834 20.197 9.329 31.983 9.329h363.911c11.784 0 22.687-3.495 31.983-9.329L301.393 241.631zM9.448 89.085C3.554 98.44 0 109.429 0 121.305v242.602c0 10.637 2.978 20.498 7.789 29.174l153.183-171.44L9.448 89.085z' fill='%23FFF'/%3E%3C/svg%3E");
}

.twitter {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 612 612' width='512' height='512'%3E%3Cpath d='M612 116.258c-22.525 9.981-46.694 16.75-72.088 19.772 25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z' fill='%23FFF'/%3E%3C/svg%3E");
}

.copy-to-clipboard {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 498.018 498.018' width='512' height='512'%3E%3Cpath d='M293.502 452.25H76.564V141.781h33.23v-45.76H68.128c-20.125 0-36.49 16.363-36.49 36.479v329.03c0 20.149 16.332 36.488 36.481 36.488h233.828c20.149 0 36.479-16.332 36.479-36.488v-9.733h-44.925v.453z' fill='%23FFF'/%3E%3Cpath d='M460.099 68.342L398.033 6.265C393.979 2.213 388.589 0 382.884 0H196.081c-20.125 0-36.49 16.364-36.49 36.488V365.51c0 20.15 16.332 36.49 36.49 36.49H429.9c20.148 0 36.48-16.332 36.48-36.49V83.49c0-5.722-2.227-11.105-6.281-15.148zm-38.644 287.896H204.51V45.769h150.856v40.136c0 14.305 11.631 25.944 25.936 25.944h40.153v244.389z' fill='%23FFF'/%3E%3C/svg%3E");
}
</style>
