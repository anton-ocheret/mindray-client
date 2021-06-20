<template>
  <multiselect
    class="base-select"
    v-bind="$attrs"
    v-on="$listeners"
    :show-labels="false"
    :searchable="false"
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
