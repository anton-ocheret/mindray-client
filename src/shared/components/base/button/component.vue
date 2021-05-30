<template>
  <button
    class="base-button"
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
  };
</script>

<style lang="scss" scoped>
  .base-button {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 22px;
    padding: 15px 40px;
    background-color: $white;
    border-radius: 30px;
    box-shadow: 0px 5px 10px rgba($black, 0.07);

    @media(min-width: $sm) {
      padding: 18px 40px;
    }
  }
</style>
