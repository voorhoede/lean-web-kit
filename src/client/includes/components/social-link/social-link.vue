<template>
  <a
    :href="url"
    @click="track(url)"
    class="social-link"
    target="_blank"
    rel="noopener">
    <facebook-icon v-if="platform === 'Facebook'" />
    <google-plus-icon v-if="platform === 'Google Plus'" />
    <instagram-icon v-if="platform === 'Instagram'" />
    <linkedin-icon v-if="platform === 'LinkedIn'" />
    <twitter-icon v-if="platform === 'Twitter'" />
    <youtube-icon v-if="platform === 'YouTube'" />
    <span class="a11y-sr-only">{{ platform }}}</span>
  </a>
</template>

<script>
import FacebookIcon from '../../static/images/facebook.svg'
import GooglePlusIcon from '../../static/images/googleplus.svg'
import InstagramIcon from '../../static/images/instagram.svg'
import LinkedinIcon from '../../static/images/linkedin.svg'
import TwitterIcon from '../../static/images/twitter.svg'
import YoutubeIcon from '../../static/images/youtube.svg'

export default {
  components: { FacebookIcon, GooglePlusIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon },
  props: {
    platform: { type: String, required: true },
    url: { type: String, required: true },
  },
  methods: {
    track(url) {
      this.$ga.event({
        eventCategory: 'outbound',
        eventAction: 'click',
        eventLabel: url,
        eventValue: 1
      })
    },
  },
}
</script>
