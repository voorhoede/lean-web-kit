<template>
  <footer role="contentinfo" class="app-footer">
    <div class="app-footer__container">
      <div>
        <nuxt-link :to="localePath('index') + '/'" class="app-footer__identity">
          <img class="app-footer__logo" src="/images/logo.svg" alt="" />
          <h1 class="app-footer__title">Lean Web Kit</h1>
        </nuxt-link>
        <div class="app-footer__social">
          <a class="app-footer__social-link" v-if="social.facebook" :href="social.facebook" @click="track(social.facebook)">
            <facebook-icon />
            <span class="a11y-sr-only">Facebook</span>
          </a>
          <a class="app-footer__social-link" v-if="social.twitter" :href="social.twitter" @click="track(social.twitter)">
            <twitter-icon />
            <span class="a11y-sr-only">Twitter</span>
          </a>
          <a class="app-footer__social-link" v-if="social.googlePlus" :href="social.googlePlus" @click="track(social.googlePlus)">
            <google-plus-icon />
            <span class="a11y-sr-only">Google Plus</span>
          </a>
          <a class="app-footer__social-link" v-if="social.instagram" :href="social.instagram" @click="track(social.instagram)">
            <instagram-icon />
            <span class="a11y-sr-only">Instagram</span>
          </a>
          <a class="app-footer__social-link" v-if="social.youtube" :href="social.youtube" @click="track(social.youtube)">
            <youtube-icon />
            <span class="a11y-sr-only">YouTube</span>
          </a>
          <a class="app-footer__social-link" v-if="social.linkedin" :href="social.linkedin" @click="track(social.linkedin)">
            <linkedin-icon />
            <span class="a11y-sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
      <div class="app-footer__content">
        <nav class="app-footer__nav">
          <h2 class="a11y-sr-only">{{ menu.title }}</h2>
          <ul class="flat-list">
            <li class="app-footer__nav-item" v-for="item in menu.items" :key="item.slug">
              <nuxt-link :to="localePath({ name: 'slug', params: { slug: item.slug } })"
                class="app-footer__nav-link"
              >
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <section class="app-footer__contact">
          <h2 class="app-footer__section-title">Contact</h2>
          <span class="app-footer__contact-line"><a :href="`mailto:${contact.emailAddress}`" class="app-footer__contact-link">{{ contact.emailAddress }}</a></span>
          <span class="app-footer__contact-line app-footer__contact-line--emphasis"><a :href="`tel:${contact.phoneNumber}`" class="app-footer__contact-link">{{ contact.phoneNumber }}</a></span>
          <span class="app-footer__contact-line">{{ contact.street }}</span>
          <span class="app-footer__contact-line">{{ contact.city }}</span>
        </section>
      </div>
    </div>
    <div class="app-footer__copywright">
      {{ appConfig.title }} {{ new Date().getFullYear() }} - All rights reserved
    </div>
  </footer>
</template>

<script>

import appConfig from '../../static/data/app.json'
import contact from '../../static/data/contact.json'
import social from '../../static/data/social.json'
import menuI18n from '../../static/data/menu.json'

import FacebookIcon from '../../static/images/facebook.svg'
import TwitterIcon from '../../static/images/twitter.svg'
import GooglePlusIcon from '../../static/images/googleplus.svg'
import InstagramIcon from '../../static/images/instagram.svg'
import LinkedinIcon from '../../static/images/linkedin.svg'
import YoutubeIcon from '../../static/images/youtube.svg'


export default {
  props: ['contentId'],
  components: { FacebookIcon, TwitterIcon, GooglePlusIcon, InstagramIcon, LinkedinIcon, YoutubeIcon },
  data () {
    return { appConfig, menuI18n, contact, social }
  },
  computed: {
    locale() { return this.$i18n.locale },
    menu() { return this.menuI18n[this.locale] },
  },
  methods: {
    track(url) {
      this.$ga.event({
        eventCategory: 'outbound',
        eventAction: 'click',
        eventLabel: url,
        eventValue: 1
      })
    }
  }
}
</script>

<style>

.app-footer {
  padding: var(--spacing-double) var(--spacing-default) var(--spacing-default);
  background-color: var(--neutral-color);
}

.app-footer__container {
  margin-bottom: var(--spacing-double);
}

.app-footer__identity {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-double);
  color: var(--text-color);
  text-decoration: none;
}

.app-footer__identity:hover,
.app-footer__identity:focus {
  border: none;
}

.app-footer__logo {
  margin-right: .3rem;
  height: 32px;
}

.app-footer__title {
  color: var(--text-color);
  font-size: var(--font-size-medium);
  text-align: center;
}

.app-footer__section-title {
  margin-bottom: var(--spacing-default);
  text-transform: uppercase;
  font-size: var(--font-size-medium);
}

.app-footer__social {
  margin-bottom: var(--spacing-double);
  text-align: center;
}

.app-footer__social-link {
  margin: 0 var(--spacing-half);
}

.app-footer__social-link:hover,
.app-footer__social-link:focus {
  border-bottom: none;
}

.app-footer__social-link:hover path,
.app-footer__social-link:focus path {
  fill: var(--action-color);
  transition: all 250ms ease;
}

.app-footer__nav {
  margin-bottom: var(--spacing-double);
}

@media (min-width: 480px) {
  .app-footer__nav {
    margin-bottom: 0;
  }
}

.app-footer__nav-link {
  color: var(--text-color);
  font-size: var(--font-size-small);
  line-height: 2rem;
}

.app-footer__copywright {
  font-size: var(--font-size-small);
  text-align: center;
}

.app-footer__contact-line {
  display: block;
  font-size: var(--font-size-small);
  line-height: 1.5rem;
}

.app-footer__contact-line--emphasis {
  font-weight: bold;
}

.app-footer__contact-link {
  color: var(--text-color);
  font-size: var(--font-size-small);
}

@media (min-width: 400px) {
  .app-footer__content {
    display: flex;
    justify-content: space-between;
  }

  .app-footer__contact {
    text-align: right;
  }
}


@media (min-width: 480px) {
  .app-footer__content {
    display: flex;
    justify-content: space-evenly;
  }
}

@media (min-width: 960px) {
  .app-footer__container {
    display: flex;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
  }

  .app-footer__container > div {
    flex: 1 0 50%;
  }
  
  .app-footer__social {
    margin-bottom: 0;
  }

  .app-footer__content {
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-default) 3rem;
    border-left: 2px solid var(--text-color);
  }

  .app-footer__contact {
    text-align: center;
  }
}

</style>