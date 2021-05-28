<template>
  <div class="hint">
    <img :src="require('@images/icons/icon-hint.svg')" class="icon" alt="" />
    <div class="content">
      <p
        v-for="(paragraph, index) in hint.content.paragraphs"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quiz-step-heading-hint',
  props: {
    hint: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .hint {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }

  .content {
    display: none;
    position: absolute;
    background-color: white;
  }
</style>
