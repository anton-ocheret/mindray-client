<template>
  <div id="app">
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
  import '@scss/index.scss';

  export default {
    name: 'app',
  };
</script>
