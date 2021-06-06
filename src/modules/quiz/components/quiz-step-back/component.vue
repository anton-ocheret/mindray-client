<template>
  <base-button
    class="quiz-step-back"
    kind="link"
    size="smallest"
  >
    <img :src="require('@images/icons/icon-back.svg')" class="icon" alt="" />
    <span class="app-text app-text--sm">
      Назад
    </span>
  </base-button>
</template>

<script>
  import BaseButton from '@shared/components/base/button';

  export default {
    name: 'quiz-step-back',
    components: {
      BaseButton,
    },
  };
</script>

<style lang="scss" scoped>
  .quiz-step-back {
    position: absolute;
    top: 0;
    left: 0;
  }

  .app-text {
    margin-left: 15px;
  }
</style>
