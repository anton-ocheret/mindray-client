<template>
  <button
    type="button"
    class="slide-button"
    @click="$emit('slide-button:click', slideIndex)"
  >
    <img
      class="icon"
      :src="require('@images/icons/icon-search-white.svg')" alt=""
    />
  </button>
</template>

<script>
  export default {
    name: 'slide-button',
    props: {
      slideIndex: {
        type: Number,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .slide-button {
    position: absolute;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 54px;
    height: 54px;
    background-color: rgba($white, .4);
    border-radius: 50%;
    backdrop-filter: blur(4px);
    @media(min-width: $sm) {
      transform: none;
      left: auto;
      top: 10px;
      right: 10px;
      width: 34px;
      height: 34px;
      .icon {
        width: 50%;
      }
    }
    @media(min-width: $lg) {
      display: none;
    }
    &.lg {
      display: none;
      @media(min-width: $lg) {
        display: flex;
        position: relative;
        width: 46px;
        height: 46px;
        transform: none;
        left: auto;
        top: auto;
        bottom: auto;
        right: auto;
        margin-left: 10px;
        .icon {
          width: auto;
        }
      }
    }
  }
</style>
