<template>
  <div class="single-autocomplete">
    <base-autocomplete />
  </div>
</template>

<script>
  import BaseAutocomplete from '@shared/components/base/autocomplete';

  export default {
    name: 'content-single-autocomplete',
    components: {
      BaseAutocomplete,
    },
  };
</script>

<style lang="scss" scoped>
  .single-autocomplete {
    max-width: $field-max-width;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
