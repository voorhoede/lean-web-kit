<template>
  <footer role="contentinfo" class="app-footer">
    <div>
      <nuxt-link :to="localePath('index') + '/'">
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
              class=""
            >
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <section class="app-footer__contact">
        <h2 class="a11y-sr-only">Contact</h2>
        <span class="app-footer__contact-line">{{ contact.emailAddress }}</span>
        <span class="app-footer__contact-line">{{ contact.phoneNumber }}</span>
        <span class="app-footer__contact-line">{{ contact.street }}</span>
        <span class="app-footer__contact-line">{{ contact.city }}</span>
      </section>
    </div>
  </footer>
</template>

<script>

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
    return { menuI18n, contact, social }
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
  padding: var(--spacing-double) var(--spacing-default);
  background-color: var(--neutral-color);
}

.app-footer__title {
  margin: 0 0 var(--spacing-double);
  color: var(--text-color);
  font-size: var(--font-size-medium);
  text-align: center;
}

.app-footer__nav-item {
  line-height: 1.5rem;
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

.app-footer__contact-line {
  display: block;
  line-height: 1.5rem;
}

@media (min-width: 480px) {
  .app-footer__content {
    display: flex;
    justify-content: space-evenly;
  }
}

@media (min-width: 960px) {
  .app-footer {
    display: flex;
    justify-content: space-evenly;
  }

  .app-footer__content {
    width: 65%
  }

  .app-footer__social {
    margin-bottom: 0;
  }
}

</style>