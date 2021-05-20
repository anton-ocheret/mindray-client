<template>
  <div id="app">
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="scss">
  #app {
    color: red;
  }
</style>
