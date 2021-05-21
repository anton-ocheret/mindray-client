<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
  import '@scss/index.scss';

  export default {
    name: 'app',
    computed: {
      layout() {
        return this.$route.meta.layout;
      },
    },
  };
</script>
