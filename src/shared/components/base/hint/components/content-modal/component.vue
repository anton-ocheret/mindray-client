<template>
  <div class="hint-content-modal">
    <img
      alt=""
      class="img"
      :src="require('@images/hint-modal.jpg')"
    />
    <img
      v-if="toggleHandler"
      alt=""
      class="close"
      :src="require('@images/icons/icon-close-white.svg')"
      @click="toggleHandler"
    />
    <div class="modal-text">
      <p
        class="app-text app-text--md"
        v-for="(paragraph, index) in content.text"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-modal',
  props: {
    content: {
      type: Object,
      required: true,
    },
    toggleHandler: {
      type: Function,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
  .hint-content-modal {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    max-width: 470px;
    width: calc(100% - 30px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.07);
    border-radius: 25px;
    border: 1px solid $porcelain;
    background-color: $white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }

  .modal-text {
    text-align: left;
    padding: 20px;
  }
  
  .img {
    width: 100%;
    height: auto;
  }

  .close {
    position: absolute;
    top: 13px;
    right: 18px;
    cursor: pointer;
  }
</style>
