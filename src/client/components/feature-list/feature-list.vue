<template>
  <ul class="feature-list">
    <li
      v-for="feature in features"
      :key="feature.id"
      class="feature-list__item">
        <div class="feature-list__item-image">
          <responsive-image :image="feature.image" />
        </div>
        <div class="feature-list__item-text">
          <h3 class="feature-list__item-title">{{ feature.title }}</h3>
          <p class="feature-list__item-body">{{ feature.body }}</p>
        </div>
    </li>
  </ul>
</template>

<script>
import ResponsiveImage from '../responsive-image'
import RichText from '../rich-text'

export default {
  components: { ResponsiveImage, RichText },
  props: {
    features: {
      type: Array,
      require: true,
    },
  }
}
</script>

<style>
.feature-list {
  padding-left: 0;
  list-style: none;
}

.feature-list__item {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
}

.feature-list__item:last-child {
  margin-bottom: 0;
}

.feature-list__item {
  text-align: center;
}

.feature-list__item-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: var(--spacing-default);
}

.feature-list__item-image {
  max-width: 100px;
  margin-left: auto;
  margin-right: auto;
}

.feature-list__item-body {
  margin-bottom: 0;
}

@media (min-width: 600px) {
  .feature-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .feature-list__item {
    flex-basis: 40%;
    margin-bottom: 0;
  }
}

@media (min-width: 800px) {
  .feature-list__item {
    flex-basis: 30%;
  }
}
</style>


