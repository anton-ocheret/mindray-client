<template>
  <div class="hint-content-text">
    <img
      v-if="toggleHandler"
      class="close"
      :src="require('@images/icons/icon-close.svg')" alt=""
      @click="toggleHandler"
    />
    <p
      class="app-text app-text--xs"
      v-for="(paragraph, index) in content.text"
      :key="index"
    >
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'content-text',
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
  .hint-content-text {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    background-color: $white;
    text-align: left;
    padding: 12px 40px 12px 12px;
    min-width: 200px;

    @media(min-width: $sm) {
      padding: 18px 38px 18px 18px;
      min-width: 350px;
    }
  }

  .close {
    position: absolute;
    top: 13px;
    right: 18px;
    cursor: pointer;
  }
</style>
