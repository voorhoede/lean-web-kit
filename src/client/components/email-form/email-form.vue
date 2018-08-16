<template>
  <form
    v-if="emailAddress"
    :action="`https://formspree.io/${ emailAddress }`"
    class="email-form"
    method="POST">
    <input type="hidden" name="_next" :value="nextUrl" />
    <input type="hidden" name="_subject" :value="form.title" />
    <input type="hidden" name="_language" :value="$i18n.locale" />
    <input type="text" name="_gotcha" style="display:none" />

    <h2 class="email-form__title">{{ form.title }}</h2>
    <rich-text :id="messageId" :text="form.confirmationMessage" class="alert alert--success email-form__alert" />
    <rich-text v-if="form.body" :text="form.body" class="email-form__body" />

    <div class="form-field">
      <label v-if="form.labelEmail" :for="`${formId}-email`" class="email-form__label form-label">{{ form.labelEmail }}</label>
      <input :id="`${formId}-email`" class="email-form__control form-control" type="email" name="email" placeholder="email@example.com" required>
      <button class="email-form__submit button button--primary" type="submit">{{ form.labelSubmitButton }}</button>
    </div>
  </form>
</template>

<script>
import { emailAddress } from '../../static/data/app.json'
import RichText from '../rich-text'

export default {
  components: { RichText },
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      emailAddress,
      pageUrl: ''
    }
  },
  mounted: function () {
    this.pageUrl = window.location.href.split('#')[0]
  },
  computed: {
    formId() {
      return `form-${this.form.id}`
    },
    messageId() {
      return `form-${this.form.id}-success`
    },
    nextUrl() {
      if (this.form.confirmationPage) {
        return this.localeUrl({ name: 'slug', params: { slug: this.form.confirmationPage.slug } })
      } else {
        return `${this.pageUrl}#${this.messageId}`
      }
    }
  }
}
</script>

<style>
@import '../app-core/index.css';

.email-form__title {
  margin-bottom: 1rem;
}

.email-form__control {
  margin-right: var(--spacing-half);
  margin-bottom: var(--spacing-default);
}

.email-form__label {
  cursor: pointer;
}

.email-form__alert {
  display: none;
  margin-bottom: var(--spacing-default);
}

.email-form__alert:target {
  display: block;
}

.email-form__alert p:last-child {
  margin-bottom: 0;
}

.email-form__body {
  margin-bottom: var(--spacing-default);
}

.email-form__body > *:last-child {
  margin-bottom: 0;
}
</style>
