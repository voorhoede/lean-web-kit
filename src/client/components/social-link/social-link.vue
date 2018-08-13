<template>
  <a
    :href="url"
    @click="track(url)"
    class="social-link"
    target="_blank"
    rel="noopener">
    <facebook-icon v-if="platform === 'Facebook'" />
    <twitter-icon v-if="platform === 'Twitter'" />
    <instagram-icon v-if="platform === 'Instagram'" />
    <youtube-icon v-if="platform === 'YouTube'" />
    <google-plus-icon v-if="platform === 'Google Plus'" />
    <span class="a11y-sr-only">{{ platform }}}</span>
  </a>
</template>

<script>
import FacebookIcon from '../../static/images/facebook.svg'
import TwitterIcon from '../../static/images/twitter.svg'
import GooglePlusIcon from '../../static/images/googleplus.svg'
import InstagramIcon from '../../static/images/instagram.svg'
import LinkedinIcon from '../../static/images/linkedin.svg'
import YoutubeIcon from '../../static/images/youtube.svg'

export default {
  components: { FacebookIcon, TwitterIcon, GooglePlusIcon, InstagramIcon, LinkedinIcon, YoutubeIcon },
  props: {
    platform: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
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
  },
}
</script>
