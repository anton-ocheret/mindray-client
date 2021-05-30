<template>
  <div class="quiz-step">
    <div class="content-wrapper">
      <quiz-step-heading :heading="step.heading" />
      <quiz-step-content :content="step.content" />
    </div>
  </div>
</template>

<script>
  import QuizStepHeading from '@modules/quiz/components/quiz-step-heading';
  import QuizStepContent from '@modules/quiz/components/quiz-step-content';

  export default {
    name: 'quiz-step',
    components: {
      QuizStepHeading,
      QuizStepContent,
    },
    props: {
      step: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .quiz-step {
    position: relative;
    display: flex;
    width: 100%;

    @media(min-width: $md) {
      max-width: 990px;
      width: calc(100% - 350px);
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
