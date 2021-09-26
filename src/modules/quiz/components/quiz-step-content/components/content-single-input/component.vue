<template>
  <div class="single-input">
    <base-input
      class="app-text app-text--lg"
      v-model="value"
      :placeholder="content.placeholder"
    />
  </div>
</template>

<script>
  import BaseInput from '@shared/components/base/input';

  export default {
    name: 'single-input',
    components: {
      BaseInput,
    },
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
    watch: {
      value(next) {
        this.emitUpdate(next);
      },
    },
    data() {
      return {
        value: '',
      };
    },
    methods: {
      emitUpdate(payload) {
        this.$emit('content-part:updated', payload);
      },
    },
  };
</script>

<style scoped lang="scss">
  .single-input {
    max-width: $field-max-width;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
