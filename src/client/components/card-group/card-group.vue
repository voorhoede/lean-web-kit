<template>
  <ul class="card-list">
    <li
      v-for="card in cards"
      :key="card.id"
      class="card-list__item">

      <article class="card-list__item-content">
        <div class="card-list__item-image" :style="`background-image: url(${card.image.url}?auto=compress&auto=quality&w=700)`"></div>
        <div class="card-list__item-info">
          <h3 class="card-list__item-title">{{ card.title }}</h3>
          <rich-text :text="card.body" class="card-list__item-body" />
          <smart-link :item="card.link" class="card-item__link button button--stealth button--smaller" />
        </div>
      </article>
    </li>
  </ul>
</template>

<script>
import RichText from '../rich-text'
import ResponsiveImage from '../responsive-image'
import SmartLink from '../smart-link'

export default {
  components: { ResponsiveImage, RichText, SmartLink },
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

.card-list__item-content {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.25);
}

.card-list__item-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 1rem;
}

.card-list__item-title {
  margin-bottom: var(--spacing-default);
}

.card-item__link:hover {
  color: var(--action-color);
  border: 0;
}

.card-item__link::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.card-list__item-image {
  padding-bottom: 56.2%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card-list__item-body {
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


