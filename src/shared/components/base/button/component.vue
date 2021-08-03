<template>
  <button
    class="base-button"
    :class="[kind, size]"
    type="button"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'base-button',
    inheritAttrs: false,
    props: {
      kind: {
        type: String,
        default: 'default',
      },
      size: {
        type: String,
        default: 'medium',
      },
    },
  };
</script>

<style lang="scss" scoped>
  .base-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    box-shadow: 0px 5px 10px rgba($black, 0.07);

    &.default {
      background-color: $white;
    }

    &.inverse {
      color: $white;
      background-color: $black;
      padding: 12px 18px;
    }

    &.bordered {
      color: $black;
      border: 1px solid $black;
      background-color: transparent;
    }

    &.link {
      box-shadow: none;
      padding: 0;
    }

    &.medium {
      padding: 15px 40px;
      min-height: 22px;

      @media(min-width: $sm) {
        padding: 18px 40px;
      }
    }

    &.small {
      padding: 13px 20px;
      @media(min-width: $sm) {
        padding: 13px 35px;
      }
    }

    &.smallest {
      padding: 0;
    }
  }
</style>
