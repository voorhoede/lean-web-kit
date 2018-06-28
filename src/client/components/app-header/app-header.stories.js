import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import AppHeader from './'



storiesOf('App header', module)
  .add('Default', () => ({
    components: { AppHeader },
    template: '<app-header :menuI18n="menu" />',
    data () {
      return {
        menu: defaultMenu,
      }
    },
    i18n: new VueI18n({
      locale: 'en',
      messages: {
        en: {
          skip_to_content: 'Skip to content',
        }
      },
    }),
  }))
  .add('With action button', () => ({
    components: { AppHeader },
    template: '<app-header :menuI18n="menu" />',
    data () {
      return {
        menu: menuWithAction,
      }
    },
    i18n: new VueI18n({
      locale: 'en',
      messages: {
        en: {
          skip_to_content: 'Skip to content',
        }
      },
    }),
  }))
  .add('With language selection', () => ({
    components: { AppHeader },
    template: '<app-header :menuI18n="menu" />',
    data () {
      return {
        menu: defaultMenu,
      }
    },
    i18n: new VueI18n({
      locale: 'en',
      messages: {
        en: {
          skip_to_content: 'Skip to content',
        }
      },
    }),
    created() {
      // mock locales required for language selector
      this.$i18n.locales = ['en', 'nl'].map(locale => ({
        code: locale,
        iso: locale,
        name: locale,
      }))
  }
}))
.add('With action button and language selection', () => ({
  components: { AppHeader },
  template: '<app-header :menuI18n="menu" />',
  data () {
    return {
      menu: menuWithAction,
    }
  },
  i18n: new VueI18n({
    locale: 'en',
    messages: {
      en: {
        skip_to_content: 'Skip to content',
      }
    },
  }),
  created() {
    // mock locales required for language selector
    this.$i18n.locales = ['en', 'nl'].map(locale => ({
      code: locale,
      iso: locale,
      name: locale,
    }))
  }
}))

const defaultMenu = {
  "en": {
    "title": "Site menu",
    "items": [
      {
        "title": "About Us",
        "slug": "about-us"
      },
      {
        "title": "Portfolio",
        "slug": "faq"
      },
      {
        "title": "Careers",
        "slug": "about-us"
      },
      {
        "title": "FAQ",
        "slug": "faq"
      },
      {
        "title": "About Us",
        "slug": "about-us"
      },
      {
        "title": "FAQ",
        "slug": "faq"
      }
    ],
  },
  "nl": {
    "title": "Site menu",
    "items": [
      {
        "title": "Over ons",
        "slug": "over-ons"
      },
      {
        "title": "Veelgestelde vragen",
        "slug": "veelgestelde-vragen"
      },
      {
        "title": "Over ons",
        "slug": "over-ons"
      },
      {
        "title": "Veelgestelde vragen",
        "slug": "veelgestelde-vragen"
      },
      {
        "title": "Over ons",
        "slug": "over-ons"
      },
      {
        "title": "Veelgestelde vragen",
        "slug": "veelgestelde-vragen"
      }
    ],
  }
}

const menuWithAction = {
  "en": {
    "title": "Site menu",
    "items": [
      {
        "title": "About Us",
        "slug": "about-us"
      },
      {
        "title": "Portfolio",
        "slug": "faq"
      },
      {
        "title": "Careers",
        "slug": "about-us"
      },
      {
        "title": "FAQ",
        "slug": "faq"
      },
      {
        "title": "About Us",
        "slug": "about-us"
      },
      {
        "title": "FAQ",
        "slug": "faq"
      }
    ],
    "callToAction": {
      "title": "Start Now"
    }
  },
  "nl": {
    "title": "Site menu",
    "items": [
      {
        "title": "Over ons",
        "slug": "over-ons"
      },
      {
        "title": "Veelgestelde vragen",
        "slug": "veelgestelde-vragen"
      },
      {
        "title": "Over ons",
        "slug": "over-ons"
      },
      {
        "title": "Veelgestelde vragen",
        "slug": "veelgestelde-vragen"
      },
      {
        "title": "Over ons",
        "slug": "over-ons"
      },
      {
        "title": "Veelgestelde vragen",
        "slug": "veelgestelde-vragen"
      }
    ],
    "callToAction": {
      "title": "Start Nu"
    }
  }
}