<template>
  <footer role="contentinfo" class="app-footer">
    <nuxt-link :to="localePath('index') + '/'">
      <h1>Lean Web Kit</h1>
    </nuxt-link>
    <div class="app-footer__social">
      <a v-if="social.facebook" :href="social.facebook">
        <img src="/images/facebook.svg" />
        <span class="a11y-sr-only">Facebook</span>
      </a>
      <a v-if="social.twitter" href="social.twitter">
        <img src="/images/twitter.svg" />
        <span class="a11y-sr-only">Twitter</span>
      </a>
      <a v-if="social.googlePlus" href="social.googlePlus">
        <img src="/images/googleplus.svg" />
        <span class="a11y-sr-only">Google Plus</span>
      </a>
      <a v-if="social.instagram" href="social.instagram">
        <img src="/images/instagram.svg" />
        <span class="a11y-sr-only">Instagram</span>
      </a>
      <a v-if="social.youtube" href="social.youtube">
        <img src="/images/youtube.svg" />
        <span class="a11y-sr-only">YouTube</span>
      </a>
      <a v-if="social.linkedin" href="social.linkedin">
        <img src="/images/linkedin.svg" />
        <span class="a11y-sr-only">LinkedIn</span>
      </a>
    </div>  
    <nav>
      <h2 class="a11y-sr-only">{{ menu.title }}</h2>
      <ul class="inline-list">
        <li v-for="item in menu.items" :key="item.slug">
          <nuxt-link :to="localePath({ name: 'slug', params: { slug: item.slug } })"
            class=""
          >
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <section>
      <h2 class="a11y-sr-only">Contact</h2>
      {{ contact.emailAddress }}
      {{ contact.phoneNumber }}
      {{ contact.street }}
      {{ contact.city }}
    </section>
  </footer>
</template>

<script>

import contact from '../../static/data/contact.json'
import social from '../../static/data/social.json'
import menuI18n from '../../static/data/menu.json'

export default {
  props: ['contentId'],
  data () {
    return { menuI18n, contact, social }
  },
  computed: {
    locale() { return this.$i18n.locale },
    menu() { return this.menuI18n[this.locale] },
  },
}
</script>

<style>

.app-footer {
  padding: var(--spacing-default);
  background-color: var(--neutral-color);
}

</style>