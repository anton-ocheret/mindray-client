<template>
  <div class="text-left relative">
    <input
      type="text"
      class="base-input"
      :class="[size, { error }, $vnode.data.staticClass]"
      :value="value"
      v-bind="$attrs"
      @input="updateValue"
    />
    <span
      v-if="error"
      class="error-message app-text app-text--sm"
    >{{ error.message }}</span>
  </div>
</template>

<script>
  export default {
    name: 'base-input',
    inheritAttrs: false,
    props: {
      value: [String, Number],
      size: {
        type: String,
        default: 'medium',
      },
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

    &.error {
      box-shadow: 0 0 0 2px red;
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

  .error-message {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% + 4px));
    color: red;
  }
</style>
