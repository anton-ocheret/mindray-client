<template>
  <div class="multiple-fields">
    <div
      v-for="(field, index) in content"
      class="multiple-fields-item"
      :key="index"
    >
      <component
        :is="`base-${field.type}`"
        class="app-text app-text--lg"
        v-bind="field.data"
      />
    </div>
  </div>  
</template>

<script>
  import BaseAutocomplete from '@shared/components/base/autocomplete';
  import BaseTextarea from '@shared/components/base/textarea';
  import BaseSelect from '@shared/components/base/select';
  import BaseInput from '@shared/components/base/input';

  export default {
    name: 'multiple-fields',
    components: {
      BaseAutocomplete,
      BaseTextarea,
      BaseSelect,
      BaseInput,
    },
    props: {
      content: {
        type: Array,
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

  .multiple-fields-item {
    margin-bottom: 15px;

    @media(min-width: $md) {
      margin-bottom: 25px;
    }

    &:last-of-type {
      margin: 0;
    }
  }
</style>
