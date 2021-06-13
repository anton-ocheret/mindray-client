<template>
  <multiselect
    v-bind="$attrs"
    v-on="$listeners"
    :show-labels="false"
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
