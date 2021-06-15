<template>
  <input
    type="text"
    class="base-input"
    :class="[size]"
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
      size: {
        type: String,
        default: 'medium',
      },
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
    transition: box-shadow .17s ease-in-out;

    &:focus {
      outline: none;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .25);
    }

    &.medium {
      padding: 14px 20px;

      @media(min-width: $md) {
        padding: 22px 40px;
      }
    }

    &.small {
      padding: 14px 20px;

      @media(min-width: $md) {
        padding: 17px 40px;
      }
    }
  }
</style>
