<template>
  <multiselect
    :options="['1', '2']"
  />
</template>

<script>
   import Multiselect from 'vue-multiselect';

  export default {
    name: 'base-autocomplete',
    components: {
      Multiselect,
    },
  };
</script>

<style>
  @import './component.scss';
  .single-autocomplete {
    width: 100%;
  }
</style>
