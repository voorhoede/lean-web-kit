  <template>
  <footer role="contentinfo" class="app-footer">
    <div class="app-footer__container">
      <div>
        <nuxt-link :to="localeUrl('index')" class="app-footer__identity">
          <img class="app-footer__logo" src="/images/logo.svg" alt="" width="32" height="40" />
          <h1 class="app-footer__title">{{ appConfig.title }}</h1>
        </nuxt-link>

      <ul class="app-footer__social">
        <li
          v-for="link in appConfig.socialLinks"
          :key="link.id"
          class="app-footer__social-item">
          <social-link
          :platform="link.platform"
          :url="link.url"
          class="app-footer__social-link" />
        </li>
      </ul>

      </div>
      <div class="app-footer__content">
        <nav class="app-footer__nav">
          <h2 class="a11y-sr-only">{{ menu.title }}</h2>
          <ul class="flat-list">
            <li class="app-footer__nav-item"
              v-for="(item, index) in menu.items" :key="index"
            >
              <smart-link class="app-footer__nav-link" :item="item">
                {{ item.title }}
              </smart-link>
            </li>
          </ul>
        </nav>
        <section class="app-footer__contact">
          <h2 class="app-footer__section-title">{{ $t('contact') }}</h2>
          <div class="app-footer__section-body" v-html="appConfig.contact"/>
        </section>
      </div>
    </div>
    <div class="app-footer__copyright">
      {{ appConfig.title }} {{ year }} - All rights reserved
    </div>
  </footer>
</template>

<script>
import appConfig from '../../static/data/app.json'
import menuI18n from '../../static/data/menu.json'

import SmartLink from '../smart-link'
import SocialLink from '../social-link'

export default {
  components: { SmartLink, SocialLink },
  props: ['contentId'],
  data () {
    return { appConfig, menuI18n, }
  },
  computed: {
    locale() { return this.$i18n.locale },
    menu() { return this.menuI18n[this.locale] },
    year() { return new Date().getFullYear() },
  },
}
</script>

<style>
@import '../app-core/variables.css';

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

.app-footer__section-body {
  font-size: var(--font-size-small);
  line-height: 1.5rem;
}

.app-footer__social {
  margin-bottom: var(--spacing-double);
  text-align: center;
  list-style: none;
}

.app-footer__social-item {
  display: inline-block;
}

.app-footer__social-link {
  margin-left: var(--spacing-half);
  margin-right: var(--spacing-half);
}

.app-footer__social-link:hover,
.app-footer__social-link:focus {
  border-bottom: none;
}

.app-footer__social-link:hover path,
.app-footer__social-link:focus path {
  fill: var(--focus-color);
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

.app-footer__copyright {
  font-size: var(--font-size-small);
  text-align: center;
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
