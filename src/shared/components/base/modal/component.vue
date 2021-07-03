<template>
  <portal
    v-if="opened"
    to="modal"
  >
    <div class="modal">
      <div class="modal-content">
        <slot name="close">
          <img
            alt=""
            class="modal-close"
            :src="require('@images/icons/icon-close-white.svg')"
            @click="close"
          />
        </slot>
        <slot :close="close" :open="open"></slot>
      </div>
    </div>
  </portal>
</template>

<script>
  export default {
    name: 'base-modal',
    props: {
      opened: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      open() {
        this.$emit('base-modal:open');
      },
      close() {
        this.$emit('base-modal:close');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 101;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: rgba($black, .4);
  }
  .modal-content {
    position: relative;
    display: flex;
    border-radius: 12px;
    overflow: hidden;
  }
  .modal-close {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 10;
    width: 24px;
    height: 24px;
  }
</style>
