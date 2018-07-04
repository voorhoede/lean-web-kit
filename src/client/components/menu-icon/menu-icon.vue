<template>
  <svg class="menu-icon" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
    <g>
      <path class="menu-icon__line" :class="{ 'menu-icon__line-center--rotated' : isOpen }" d="M491.318,235.318H20.682C9.26,235.318,0,244.577,0,256s9.26,20.682,20.682,20.682h470.636 c11.423,0,20.682-9.259,20.682-20.682C512,244.578,502.741,235.318,491.318,235.318z"/>
      <path class="menu-icon__line menu-icon__line-top" :class="{ 'menu-icon__line-top--rotated' : isOpen }" d="M491.318,78.439H20.682C9.26,78.439,0,87.699,0,99.121c0,11.422,9.26,20.682,20.682,20.682h470.636 c11.423,0,20.682-9.26,20.682-20.682C512,87.699,502.741,78.439,491.318,78.439z"/>
      <path class="menu-icon__line menu-icon__line-bottom" :class="{ 'menu-icon__line-bottom--rotated' : isOpen }" d="M491.318,392.197H20.682C9.26,392.197,0,401.456,0,412.879s9.26,20.682,20.682,20.682h470.636 c11.423,0,20.682-9.259,20.682-20.682S502.741,392.197,491.318,392.197z"/>
    </g>
  </svg>
</template>

<script>
export default {
  props: ['isOpen']
}
</script>

<style>
.menu-icon {
  width: 30px;
  height: auto;
}

.menu-icon__line-top--rotated {
  transform: rotate(45deg);
  transform-origin: 14% 33%;
}

.menu-icon__line-center--rotated {
  opacity: 0;
}

.menu-icon__line-bottom--rotated {
  transform: rotate(-45deg);
  transform-origin: 10% 63%;
}

.menu-icon__line,
.menu-icon__line-top--rotated,
.menu-icon__line-center--rotated,
.menu-icon__line-bottom--rotated {
  transition: all .2s ease-in-out;
}
</style>
