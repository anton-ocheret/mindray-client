<template>
  <textarea
    class="base-textarea"
    :class="[{ error }]"
    :value="value"
    v-bind="$attrs"
    @input="updateValue"
  ></textarea>
</template>

<script>
  export default {
    name: 'base-textarea',
    props: {
      value: [String, Number],
      error: {
        type: Object,
        default: null,
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
  .base-textarea {
    font-family: inherit;
    display: flex;
    width: 100%;
    border: 1px solid $porcelain;
    box-shadow: 0px 5px 10px 0px rgba($black, .12);
    border-radius: 10px;
    padding: 14px 20px;
    resize: vertical;
    min-height: 200px;
    transition: box-shadow .17s ease-in-out;

    @media(min-width: $md) {
      padding: 22px 40px;
    }

    &:focus {
      outline: none;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .25);
    }

    &.error {
      box-shadow: 0 0 0 2px red;
    }
  }
</style>
