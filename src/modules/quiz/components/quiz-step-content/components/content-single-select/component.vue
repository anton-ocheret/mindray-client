<template>
  <div class="single-select">
    <base-select
      :options="[1, 2]"
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
  };
</script>

<style lang="scss" scoped>
  .single-select {
    max-width: $field-max-width;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
