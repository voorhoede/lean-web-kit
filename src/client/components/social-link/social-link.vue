<template>
  <a
    :key="link.id"
    :href="link.url"
    @click="track(link.url)"
    class="social-link"
    target="_blank"
    rel="noopener">
    <facebook-icon v-if="link.platform === 'Facebook'" />
    <twitter-icon v-if="link.platform === 'Twitter'" />
    <instagram-icon v-if="link.platform === 'Instagram'" />
    <youtube-icon v-if="link.platform === 'YouTube'" />
    <google-plus-icon v-if="link.platform === 'Google Plus'" />
    <span class="a11y-sr-only">{{ link.platform }}}</span>
  </a>
</template>

<script>
import appConfig from '../../static/data/app.json'

import FacebookIcon from '../../static/images/facebook.svg'
import TwitterIcon from '../../static/images/twitter.svg'
import GooglePlusIcon from '../../static/images/googleplus.svg'
import InstagramIcon from '../../static/images/instagram.svg'
import LinkedinIcon from '../../static/images/linkedin.svg'
import YoutubeIcon from '../../static/images/youtube.svg'

export default {
  components: { FacebookIcon, TwitterIcon, GooglePlusIcon, InstagramIcon, LinkedinIcon, YoutubeIcon },
  data () {
    return { appConfig }
  },
  props: {
    platform: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  }
}
</script>
