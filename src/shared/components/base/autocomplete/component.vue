<template>
  <multiselect
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span slot="noResult">По вашему запросу нет вариантов</span>
  </multiselect>
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
