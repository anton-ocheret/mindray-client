<template>
  <div class="single-select">
    <base-select
      :options="[1, 2]"
      v-model="value"
      :placeholder="content.placeholder"
    />
  </div>
</template>

<script>
  import BaseSelect from '@shared/components/base/select';

  export default {
    name: 'content-single-select',
    components: {
      BaseSelect,
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

<style lang="scss">
  .single-select {
    max-width: $field-max-width;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
