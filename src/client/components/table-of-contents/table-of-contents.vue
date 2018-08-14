<template>
  <nav class="table-of-contents" :class="{ 'table-of-contents--open' : tableOfContentsIsOpen }">
    <h2 class="a11y-sr-only">{{ $t('table_of_contents') }}</h2>
    <button class="table-of-contents__button" @click="toggleTableOfContents" >{{ $t('table_of_contents') }}
      <span v-if="tableOfContentsIsOpen" class="a11y-sr-only">{{ $t('close_menu') }}</span>
      <span v-else class="a11y-sr-only">{{ $t('open_menu') }}</span>
    </button>
    <ol class="table-of-contents__list">
      <li class="table-of-contents__item" v-for="(item, index) in items" :key="index">
        <a :href="`#${item.slug}`" class="table-of-contents__link"
        :class="{ 'table-of-contents__link--active' : (item.slug === activeItem) }">
          {{ item.title }}
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      activeItem: this.items[0].slug,
      tableOfContentsIsOpen: false,
    }
  },

  mounted () {
    window.addEventListener('scroll', this.updateActiveItem, { passive: true })
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.updateActiveItem)
  },

  methods: {
    updateActiveItem () {
      const sectionsLenght = this.items.length

      for (var i = 0; i < sectionsLenght; i++) {
        const section = document.getElementById(this.items[i].slug)

        if (this.isBelowScroll(section)) {
          this.activeItem = section.id
        }
      }
    },

    isBelowScroll (el) {
      const { top } = el.getBoundingClientRect()
      const sectionInViewOffset = 200

      return top < sectionInViewOffset
    },

    toggleTableOfContents () {
      this.tableOfContentsIsOpen = !this.tableOfContentsIsOpen
    }
  }
}
</script>

<style>
@import '../app-core/variables.css';

.table-of-contents {
  display: block;
  position: relative;
}

.table-of-contents__button {
  position: relative;
  margin-bottom: .3rem;
  padding: var(--spacing-default);
  font-size: var(--font-size-medium);
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
  width: 100%;
  background-color: var(--neutral-color);
  border: none;
}

.table-of-contents__button:before {
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 129 129' xmlns:xlink='http://www.w3.org/1999/xlink' enable-background='new 0 0 129 129'%3E%3Cg%3E%3Cpath d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z'/%3E%3C/g%3E%3C/svg%3E");
  background-position: center;
  background-size: contain;
  transition: all .3s ease-in-out;
  position: absolute;
  top: calc(50% - 15px);
  right: var(--spacing-default);
  content: '';
  width: 30px;
  height: 30px;
}

.table-of-contents--open .table-of-contents__button:before {
  transform: rotate(-180deg);
  transition: all .3s ease-in-out;
}

.table-of-contents__list {
  display: none;
  padding: 0;
}

.table-of-contents--open .table-of-contents__list {
  display: block;
}

.table-of-contents__item {
  list-style-type: none;
  text-transform: uppercase;
}

.table-of-contents__link {
  display: block;
  margin-bottom: .3rem;
  padding: var(--spacing-default);
  color: var(--text-color);
  background-color: var(--neutral-color);
}

.table-of-contents__link:hover,
.table-of-contents__link:focus {
  border-bottom: 0;
  background-color: var(--focus-color);
  color: var(--background-color);
}

@media screen and (min-width: 880px){
  .table-of-contents__title,
  .table-of-contents__button {
    display: none;
  }

  .table-of-contents__list {
    display: block;
    text-align: left;
  }

  .table-of-contents__link {
    display: block;
    padding-bottom: var(--spacing-default);
    padding-left: 0;
    color: var(--text-color);
    background: linear-gradient(to right, currentColor, currentColor);
    background-size: 0% 3px;
    background-position: bottom left;
    background-repeat: no-repeat;
    transition: 1s;
  }

  .table-of-contents__link:hover,
  .table-of-contents__link:focus,
  .table-of-contents__link--active {
    border: none;
    outline: none;
    background-color: transparent;
    background-size: 50% 3px;
  }
   .table-of-contents__link--active {
    color: var(--action-color);
  }

  .table-of-contents__link:hover,
  .table-of-contents__link:focus {
    color: var(--focus-color);
  }

  .table-of-contents__item:first-child .table-of-contents__link {
    padding-top: 0;
  }
}
</style>
