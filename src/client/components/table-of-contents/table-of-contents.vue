<template>
  <nav class="table-of-contents">
    <h2 class="a11y-sr-only">{{ $t('table_of_contents') }}</h2>
    
    <ol class="table-of-contents__inline-list">
      <li class="table-of-contents__list-item" v-for="(item, index) in items" :key="index">
        <a :href="`#${item.slug}`" class="table-of-contents__link-item" :class="{ 'active' : (item.slug === currentSection) }">
          {{ item.title }}
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: ['items'],
  data () {
    return {
      currentSection: this.items[0].slug
    }
  },
  mounted () {
    window.addEventListener('scroll', this.getClosestSection)
  },
  
  beforeDestroy () {
    window.removeEventListener('scroll', this.getClosestSection)
  },

  methods: {
    getClosestSection () {
      let sectionsLenght = this.items.length

      for (var i = 0; i < sectionsLenght; i++) {
        let myElement = document.getElementById(this.items[i].slug)

        if (this.isBelowScroll(myElement)) {
          this.currentSection = myElement.id
        }
      }
    },

    isBelowScroll (el) {
      let position = el.getBoundingClientRect()
      
      return position.top < 200 && ((position.top + position.height) > 0)
    }
  }
}
</script>

<style>
.table-of-contents {
  display: block;
}

.table-of-contents__inline-list {
  padding: 0;
  text-align: left;
}

.table-of-contents__list-item {
  list-style-type: none;
  text-transform: uppercase;
}

.table-of-contents__list-item:not(:first-child) .table-of-contents__link-item {
  padding-top: var(--spacing-default);
}

.table-of-contents__link-item {
  display: block;
  padding-bottom: var(--spacing-default);
  color: var(--text-color);
  background: linear-gradient(to right, var(--action-color), var(--action-color));
  background-size: 0% 3px;
  background-position: bottom left;
  background-repeat: no-repeat;
  -webkit-transition: 1s;
          transition: 1s;
}

.table-of-contents__link-item:hover,
.table-of-contents__link-item:focus,
.active {
  border: none;
  outline: none;
  color: var(--action-color);
  background-size: 50% 3px;
}
</style>
