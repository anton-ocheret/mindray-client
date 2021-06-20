<template>
  <div class="single-autocomplete-multiple">
    <base-autocomplete
      :placeholder="content.placeholder"
      :options="content.options"
      :multiple="true"
      class="app-text"
      v-model="value"
      track-by="name"
      label="name"
    />
  </div>
</template>

<script>
  import BaseAutocomplete from '@shared/components/base/autocomplete';

  export default {
    name: 'content-single-autocomplete-multiple',
    components: {
      BaseAutocomplete,
    },
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      value: null,
    }),
  };
</script>

<style lang="scss" scoped>
  .single-autocomplete-multiple {
    max-width: $field-max-width;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
