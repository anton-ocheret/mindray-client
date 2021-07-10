<template>
  <div>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    <portal-target name="modal" />
  </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      layout() {
        return this.$route.meta.layout;
      },
    },
  };
</script>
