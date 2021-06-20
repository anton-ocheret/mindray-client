<template>
  <div class="step-footer">
    <p class="app-text app-text--md">{{ data.content.left.text }}</p>
    <p class="app-text app-heading-text--sm step-footer-right">{{ data.content.right.text }}</p>
  </div>
</template>

<script>
  export default {
    name: 'quiz-step-footer',
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .step-footer {
    justify-content: space-between;
  }

  .step-footer-right {
    color: $mantis;
  }
</style>
