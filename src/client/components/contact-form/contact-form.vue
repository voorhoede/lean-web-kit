<template>
  <form
    v-if="ownerEmail"
    :action="`https://formspree.io/${ ownerEmail }`"
    class="contact-form"
    method="POST">
    <input type="hidden" name="_cc" :value="userEmail" />
    <input type="hidden" name="_next" :value="nextUrl" />
    <input type="hidden" name="_subject" :value="form.title" />
    <input type="hidden" name="_language" :value="$i18n.locale" />
    <input type="text" name="_gotcha" style="display:none" />

    <h2 class="email-form__title">{{ form.title }}</h2>
    <rich-text v-if="form.body" :text="form.body" class="contact-form__body" />

    <rich-text :id="messageId" :text="form.confirmationMessage" class="alert alert--success contact-form__alert" />

    <div class="form-field">
      <label class="contact-form__label form-label" :for="`${formId}-message`">{{ form.labelMessage }}</label>
      <textarea class="contact-form__control form-control" placeholder="Your message..." :id="`${formId}-message`" name="message" required></textarea>
    </div>

    <div class="form-field">
      <label class="contact-form__label form-label" :for="`${formId}-name`">{{ form.labelName }}</label>
      <input class="contact-form__control form-control" :id="`${formId}-name`" type="text" placeholder="Your name" name="name">
    </div>

    <div class="form-field">
      <label class="contact-form__label form-label" :for="`${formId}-email`">{{ form.labelEmail }}</label>
      <input class="contact-form__control form-control" :id="`${formId}-email`" type="email" v-model="userEmail" placeholder="example@email.com" name="email" required>
    </div>

    <button class="contact-form__submit button button--primary" type="submit">{{ form.labelSubmitButton }}</button>
  </form>
</template>

<script>
import { emailAddress as ownerEmail } from '../../static/data/app.json'
import RichText from '../rich-text'

export default {
  components: { RichText },
  props: {
    form: {
      type: Object,
      required: true,
      validator: function({ title, labelSubmitButton, id}) {
        return (title && labelSubmitButton && id)
      }
    },
  },
  data() {
    return {
      ownerEmail,
      pageUrl: '',
      userEmail: '',
    }
  },
  mounted: function () {
    this.pageUrl = window.location.href.split('#')[0]
  },
  computed: {
    formId() { return `form-${this.form.id}` },
    messageId() { return `${this.formId}-success` },
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

.contact-form__label {
  cursor: pointer;
}

.contact-form__control {
  display: block;
  width: 100%;
}

.contact-form__alert {
  display: none;
  margin-bottom: var(--spacing-double);
}

.contact-form__alert:target {
  display: block;
}

@media (min-width: 600px) {
  .contact-form__control {
    width: 25rem;
  }
}
</style>
