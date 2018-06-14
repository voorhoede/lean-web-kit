<template>
  <ul>
    <li v-for="locale in $i18n.locales" :key="locale.code">
      <strong v-if="locale.code === $i18n.locale">
        {{ locale.name }}
      </strong>
      <nuxt-link v-else
        rel="alternate"
        :hreflang="locale.code"
        :to="switchLocalePath(locale.code)">
        {{ locale.name }}
      </nuxt-link>
    </li>
  </ul>
</template>
