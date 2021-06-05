<template>
  <input
    type="text"
    class="base-input"
    :value="value"
    v-bind="$attrs"
    @input="updateValue"
  />
</template>

<script>
  export default {
    name: 'base-input',
    props: {
      value: [String, Number],
    },
    methods: {
      updateValue(event) {
        this.$emit('input', event.target.value);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .base-input {
    display: flex;
    width: 100%;
    border: 1px solid $porcelain;
    box-shadow: 0px 5px 10px 0px rgba($black, .12);
    border-radius: 10px;
    padding: 14px 20px;

    @media(min-width: $md) {
      padding: 22px 40px;
    }

    &:focus {
      outline: none;
    }
  }
</style>
