<template>
  <div class="multiple-fields">
    <div
      v-for="(field, index) in content.fields"
      class="multiple-fields-item"
      :key="index"
    >
      <component :is="'base-autocomplete'" />
    </div>
  </div>  
</template>

<script>
  import BaseAutocomplete from '@shared/components/base/autocomplete';
  // import BaseTextarea from '@shared/components/base/textarea';
  // import BaseSelect from '@shared/components/base/select';
  // import BaseInput from '@shared/components/base/input';

  export default {
    name: 'multiple-fields',
    components: {
      BaseAutocomplete,
      // BaseTextarea,
      // BaseSelect,
      // BaseInput,
    },
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .multiple-fields {
    max-width: $field-max-width;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
