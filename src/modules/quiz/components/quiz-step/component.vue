<template>
  <div class="quiz-step">
    <div
      class="wrapper"
      :class="{ 'justify-center': isStepContetnVerticallyCentered }"
    >
      <quiz-step-heading :heading="step.heading" />
      <quiz-step-content :content="step.content" />
      <quiz-step-navigation :navigation="step.navigation" />
    </div>
  </div>
</template>

<script>
  import QuizStepNavigation from '@modules/quiz/components/quiz-step-navigation';
  import QuizStepHeading from '@modules/quiz/components/quiz-step-heading';
  import QuizStepContent from '@modules/quiz/components/quiz-step-content';
  import { STEP_CONTENT_CENTERED_TYPES } from '@modules/quiz/constants';

  export default {
    name: 'quiz-step',
    components: {
      QuizStepNavigation,
      QuizStepHeading,
      QuizStepContent,
    },
    props: {
      step: {
        type: Object,
        required: true,
      },
    },
    computed: {
      isStepContetnVerticallyCentered() {
        return STEP_CONTENT_CENTERED_TYPES.includes(this.step.content.type);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .quiz-step {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-grow: 1;
    position: relative;
    max-width: 1340px;
    z-index: 2;


    @media(min-width: $md) {
      max-width: 990px;
      width: calc(100% - 350px);
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .justify-center {
    justify-content: center;
  }
</style>
