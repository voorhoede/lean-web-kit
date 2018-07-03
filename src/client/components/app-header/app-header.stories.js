import VueI18n from 'vue-i18n'
import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import AppHeader from './'

storiesOf('App header', module)
  .addDecorator(withReadme(readme))
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
        "slug": "careers"
      },
      {
        "title": "FAQ",
        "slug": "fsq"
      },
      {
        "title": "something",
        "slug": "something"
      },
      {
        "title": "something else",
        "slug": "something else"
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
        "slug": "veelgestelde-vragesn"
      },
      {
        "title": "Over ons",
        "slug": "over-osns"
      },
      {
        "title": "Veelgestelde vragen",
        "slug": "veelgesteldse-vragen"
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
        "slug": "careers"
      },
      {
        "title": "FAQ",
        "slug": "fasq"
      },
      {
        "title": "something",
        "slug": "something"
      },
      {
        "title": "something else",
        "slug": "something else"
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
        "slug": "veelgestelde-vragesn"
      },
      {
        "title": "Over ons",
        "slug": "over-osns"
      },
      {
        "title": "Veelgestelde vragen",
        "slug": "veelgesteldse-vragen"
      }
    ],
    "callToAction": {
      "title": "Start Nu"
    }
  }
}
