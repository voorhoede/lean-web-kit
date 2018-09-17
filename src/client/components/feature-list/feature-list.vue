<template>
  <ul class="feature-list">
    <li
      v-for="item in items"
      :key="item.id"
      class="feature-list__item">
      <div class="feature-item">
        <div class="feature-item__image">
          <responsive-image :image="item.image" />
        </div>
        <h3 class="feature-item__title">{{ item.title }}</h3>
        <rich-text :text="item.body" class="feature-item__body" />
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
    items: {
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

.feature-item {
  text-align: center;
}

.feature-item__title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: var(--spacing-default);
}

.feature-item__image {
  max-width: 150px;
  margin-left: auto;
  margin-right: auto;
}

.feature-item__body {
  margin-bottom: 0;
}

@media (min-width: 600px) {
  .feature-list {
    display: flex;
    justify-content: space-between;
  }

  .feature-list__item {
    flex-basis: 33%;
    margin-bottom: 0;
  }
}
</style>


