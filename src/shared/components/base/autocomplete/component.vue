<template>
  <multiselect
    class="base-autocomplete"
    :class="[$attrs.multiple && 'multiple']"
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
