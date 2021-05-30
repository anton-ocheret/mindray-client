<template>
  <div class="content-text">
    <img
      class="close"
      :src="require('@images/icons/icon-close.svg')" alt=""
      @click="$emit('hint-content:close')"
    />
    <p
      class="app-text app-text--xs"
      v-for="(paragraph, index) in content.paragraphs"
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
  },
};
</script>

<style lang="scss" scoped>
  .content-text {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    position: absolute;
    background-color: $white;
    top: 0;
    left: 0;
    transform: translate(calc(-100% - 10px), -5px);
    padding: 18px 38px 18px 18px;
    text-align: left;
    min-width: 350px;
  }

  .close {
    position: absolute;
    top: 13px;
    right: 18px;
    cursor: pointer;
  }
</style>
