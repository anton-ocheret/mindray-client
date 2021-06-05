<template>
  <div class="single-textarea">
    <base-textarea
      class="app-text app-text--lg"
      :placeholder="content.placeholder"
    />
  </div>
</template>

<script>
  import BaseTextarea from '@shared/components/base/textarea';

  export default {
    name: 'single-input',
    components: {
      BaseTextarea,
    },
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  .single-textarea {
    max-width: $field-max-width;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
