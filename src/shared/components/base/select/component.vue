<template>
  <multiselect
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
  import Multiselect from 'vue-multiselect';
  export default {
    name: 'base-select',
    components: {
      Multiselect,
    },
  };
</script>

<style lang="scss" scoped>
</style>
