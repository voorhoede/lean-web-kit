<template>
  <article class="feature-list">
    <h2 v-if="title" class="feature-list__title">{{ title }}</h2>
    <ul class="feature-list__list">
      <li
        v-for="feature in features"
        :key="feature.id"
        class="feature-list__item">
        <div class="feature-list__item-container">
          <div class="feature-list__item-image">
            <responsive-image :image="feature.image" />
          </div>
          <div class="feature-list__item-text">
            <h3 class="feature-list__item-title">{{ feature.title }}</h3>
            <p class="feature-list__item-text">{{ feature.text }}
            </p>
            <smart-link v-if="feature.callToAction" :item="feature.callToAction" class="feature-list__item-button button button--primary" />
          </div>
        </div>
      </li>
    </ul>
  </article>
</template>

<script>
import ResponsiveImage from '../responsive-image'
import SmartLink from '../smart-link'

export default {
  components: { ResponsiveImage, SmartLink },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    features: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>
@import '../app-core/variables.css';

.feature-list {
  padding-top: var(--spacing-default);
  padding-bottom: var(--spacing-default);
}

.feature-list__list {
  padding-left: 0;
  list-style: none;
}

.feature-list__title {
  text-align: center;
  font-size: var(--font-size-extra-large);
}

.feature-list__item {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--spacing-double);
}

.feature-list__item-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 350px;
}

.feature-list__item:last-child {
  margin-bottom: 0;
}

.feature-list__item-title {
  font-size: var(--font-size-large);
  color: var(--action-color);
}

.feature-list__item-image {
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
}

@media (min-width: 600px) {
  .feature-list__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .feature-list__item {
    flex-basis: 40%;
    margin-bottom: 0;
  }
}

@media (min-width: 1100px) {
  .feature-list__item {
    flex-basis: 33%;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
