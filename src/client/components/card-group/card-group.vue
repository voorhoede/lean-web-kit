<template>
  <ul class="card-list">
    <li
      v-for="card in cards"
      :key="card.id"
      class="card-list__item">

      <article class="card-item">
        <div class="card-item__image" :style="`background-image: url(${card.image.url}?auto=compress&auto=quality&w=700)`"></div>
        <div class="card-item__content">
          <h3 class="card-item__title">
            <nuxt-link
              v-if="card.link && card.link.type === 'page'"
              :to="localeUrl({ name: 'slug', params: { slug: card.link.slug } })"
              class="card-item__link">
              {{ card.title }}
            </nuxt-link>
          </h3>
          <rich-text :text="card.body" class="card-item__body" />
          <span v-if="card.link" class="card-item__call-to-action button">{{ card.link.title }}</span>
        </div>
      </article>
    </li>
  </ul>
</template>

<script>
import RichText from '../rich-text'
import ResponsiveImage from '../responsive-image'

export default {
  components: { ResponsiveImage, RichText },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
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
  min-width: 250px;
  padding: 1rem;
}

.card-item {
  position: relative;
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

.card-item__link:hover {
  color: var(--action-color);
  border: 0;
}

.card-item__link::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.card-item:hover .card-item__call-to-action {
  color: var(--background-color);
  background-color: var(--action-color);
  border: 1px solid var(--action-color);
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


