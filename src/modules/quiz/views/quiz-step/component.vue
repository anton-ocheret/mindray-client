<template>
  <div class="quiz-step">
    <div class="content">
      <quiz-step-heading
        class="text-center"
        :heading="step.heading"
      />
    </div>
  </div>
</template>

<script>
  import QuizStepHeading from '@modules/quiz/components/quiz-step-heading';

  export default {
    name: 'quiz-step',
    components: { QuizStepHeading },
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
</style>
