<template>
  <form
    v-if="emailAddress"
    :action="`https://formspree.io/${ emailAddress }`"
    class="contact-form"
    method="POST">
    <input type="hidden" name="_cc" :value="email" />
    <input type="hidden" name="_next" :value="nextUrl" />
    <input type="hidden" name="_subject" :value="form.title" />
    <input type="hidden" name="_language" :value="$i18n.locale" />
    <input type="text" name="_gotcha" style="display:none" />

    <h2 class="email-form__title">{{ form.title }}</h2>
    <rich-text v-if="form.body" :text="form.body" class="contact-form__body" />

    <rich-text :id="messageId" :text="form.confirmationMessage" class="alert alert--success contact-form__alert" />

    <label class="contact-form__label" :for="`name-${labelId}`">{{ form.labelName }}</label>
    <input class="contact-form__name" type="text" placeholder="Your name" :id="`name-${labelId}`" :name="`name-${labelId}`" required>

    <label class="contact-form__label" :for="`email-${labelId}`">{{ form.labelEmail }}</label>
    <input class="contact-form__email" type="text" v-model="email" placeholder="example@email.com" :id="`email-${labelId}`" :name="`email-${labelId}`" required>

    <label class="contact-form__label" :for="`message-${labelId}`">{{ form.labelMessage }}</label>
    <textarea class="contact-form__message" placeholder="Your message..." :id="`message-${labelId}`" :name="`message-${labelId}`" required></textarea>

    <button class="contact-form__submit button button--primary" type="submit">{{ form.labelSubmitButton }}</button>
  </form>
</template>

<script>
import { emailAddress} from '../../static/data/app.json'
import RichText from '../rich-text'

export default {
  components: { RichText },
  props: {
    form: {
      type: Object,
      required: true,
      validator: function(value) {
        if (value.title && value.labelSubmitButton && value.id) {
          return true
        } else {
          return false
        }
      }
    },
  },
  data() {
    return {
      emailAddress,
      pageUrl: '',
      email: '',
    }
  },
  mounted: function () {
    const checkHashInUrl = window.location.href.split('#')
    this.pageUrl = checkHashInUrl.length === 1 ? window.location.href : checkHashInUrl[1]
  },
  computed: {
    labelId() {
      return this.form.id
    },
    messageId() {
      return `form-success-${this.form.id}`
    },
    nextUrl() {
      if (this.form.confirmationPage) {
        return this.localeUrl({ name: 'slug', params: { slug: this.form.confirmationPage.slug } })
      } else {
        return `${this.pageUrl}#${this.messageId}`
      }
    },
  },
}
</script>

<style>
@import '../app-core/index.css';

.contact-form > * {
  display: block;
}

.contact-form__label {
  margin-bottom: var(--spacing-half);
  cursor: pointer;
}

.contact-form__name,
.contact-form__email,
.contact-form__message {
  width: 100%;
  margin-bottom: var(--spacing-double);
}

.contact-form__alert {
  display: none;
  margin-bottom: var(--spacing-double);
}

.contact-form__alert:target {
  display: block;
}

@media (min-width: 600px) {
  .contact-form__name,
  .contact-form__email,
  .contact-form__message {
    width: 25rem;
  }
}

</style>
