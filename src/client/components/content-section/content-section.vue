<template>
  <section class="content-section">
    <a :id="section.slug" class="content-section__scroll-anchor"></a>
    <a :href="`#${section.slug}`">
      <h2 class="content-section__title">{{ section.title }}</h2>
    </a>
    <template v-for="(item, index) in section.items">
      <button-group
        v-if="item.__typename === 'ButtonGroupRecord'"
       :key="index"
       :items="item.links" />
      <contact-form
        v-if="item.form && item.form.__typename === 'ContactFormRecord'"
        :key="index"
        :form="item.form" />
      <download-files
        v-if="item.__typename === 'file_list'"
        :key="index"
        :files="item.files" />
      <email-form
        v-if="item.form && item.form.__typename === 'EmailFormRecord'"
        :key="index"
        :form="item.form"
      />
      <illustrated-content
        v-if="item.__typename === 'IllustratedContentRecord'"
        :key="index"
        :title="item.title"
        :text="item.text"
        :image="item.image"
        :inverse-layout=item.inverseLayout
        :call-to-action="item.callToAction" />
      <feature-list
        v-if="item.__typename === 'FeatureListRecord'"
        :key="index"
        :features="item.features"
        :title="item.title" />
      <link-list
        v-if="item.__typename === 'LinkListRecord'"
        :key="index"
        :links="item.links"
        :ordered="item.ordered" />
      <rich-text
        v-if="item.__typename === 'TextRecord'"
        :key="index"
        :text="item.body"
      />
      <responsive-image
        v-if="item.__typename === 'ImageRecord'"
        :key="index"
        :image="item.image"
      />
      <responsive-video
        v-if="item.__typename === 'VideoRecord'"
        :key="index"
        :video="item.video"
        :autoplay="item.autoplay"
        :loop="item.loop"
        :mute="item.mute"
      />
    </template>
  </section>
</template>

<script>
import ButtonGroup from '../button-group'
import ContactForm from '../contact-form'
import DownloadFiles from '../download-files'
import EmailForm from '../email-form'
import IllustratedContent from '../illustrated-content'
import FeatureList from '../feature-list'
import LinkList from '../link-list'
import ResponsiveImage from '../responsive-image'
import ResponsiveVideo from '../responsive-video'
import RichText from '../rich-text'

export default {
  components: {
    ButtonGroup,
    ContactForm,
    DownloadFiles,
    EmailForm,
    FeatureList,
    IllustratedContent,
    LinkList,
    ResponsiveImage,
    ResponsiveVideo,
    RichText
  },
  props: {
    section: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>
@import '../app-core/variables.css';

:root {
  --app-header-offset: 100px;
}
.content-section__scroll-anchor {
  display: block;
  margin-top: calc(-1 * var(--app-header-offset));
  height: var(--app-header-offset);
  visibility: hidden;
  pointer-events: none;
}

.content-section {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
}

.content-section__title {
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-size: var(--font-size-extra-large);
}

.content-section > .responsive-image {
  margin-bottom: var(--spacing-double);
}
</style>
