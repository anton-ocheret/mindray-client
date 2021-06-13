<template>
  <base-button
    class="quiz-step-back d-lg-flex"
    kind="link"
    size="smallest"
    @click="stepBackHandler"
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
    props: {
      stepBackHandler: {
        type: Function,
        required: true,
      },
    },
    components: {
      BaseButton,
    },
  };
</script>

<style lang="scss" scoped>
  .quiz-step-back {
    position: fixed;
    top: 140px;
    left: 35px;

    @media(min-width: $xl) {
      left: calc(50% - 990px / 2);
      transform: translateX(-100%);
    }
  }

  .app-text {
    margin-left: 15px;
  }
</style>
