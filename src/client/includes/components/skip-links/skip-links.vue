<template>
  <ul class="skip-links">
    <li><a class="skip-links__item" href="#maincontent">{{ 'skip_to_main' | t }}</a></li>
    <li><a class="skip-links__item" href="#mainmenu">{{ 'skip_to_navigation' | t }}</a></li>
    <li><a class="skip-links__item" href="#chat">{{ 'skip_to_chat' | t }}</a></li>
    <li><a class="skip-links__item" href="#footer">{{ 'skip_to_footer' | t }}</a></li>
  </ul>
</template>

<script>
export default {
}
</script>

<style>
@import '../app-core/variables.css';

.skip-links {
  z-index: 11;
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skip-links__item {
  position: absolute;
  display: block;
  top: 10px;
  left: -60000px;
  padding: var(--spacing-half);
  background-color: var(--background-color);
}

.skip-links__item:focus {
  left: 10px;
  border-bottom: 0;
}
</style>
