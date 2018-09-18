<template>
  <ul class="card-list">
    <li
      v-for="card in cards"
      :key="card.id"
      class="card-list__item">
      <article class="card-item">
        <div class="card-item__image" :style="`background-image: url(${card.image.url})`"></div>
        <div class="card-item__content">
          <h3 class="card-item__title">{{ card.title }}</h3>
          <rich-text :text="card.body" class="card-item__body" />
          <button-group :items="card.links" />
        </div>
      </article>
    </li>
  </ul>
</template>

<script>
import ButtonGroup from '../button-group'
import RichText from '../rich-text'
import ResponsiveImage from '../responsive-image'

export default {
  components: { ButtonGroup, ResponsiveImage, RichText },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style>
.card-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(var(--spacing-default) * -1);
  padding-left: 0;
  list-style: none;
}

.card-list__item {
  width: 100%;
  padding: 1rem;
}
.card-item {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 2px 38px -4px rgba(0,0,0,0.25)
}

.card-item__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 1rem;
}

.card-item__title {
  margin-bottom: var(--spacing-default);
}

.card-item__image {
  padding-bottom: 56.2%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card-item__body {
  flex-grow: 1;
  font-size: .9rem;
}

@media (min-width: 640px) {
  .card-list__item {
    width: 50%;
  }
}

@media (min-width: 980px) {
  .card-list__item {
    width: 33%;
  }
}
</style>


