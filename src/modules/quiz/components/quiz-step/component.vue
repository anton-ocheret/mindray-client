<template>
  <div class="quiz-step">
    <div
      class="wrapper"
      :class="{ 'justify-center': isStepContetnVerticallyCentered }"
    >
      <quiz-step-heading
        :hint="currentStep.content.data.heading.hint"
        :content="currentStep.content.data.heading.content"
      />
      <quiz-step-content
        :type="currentStep.content.type"
        :data="currentStep.content.data.body"
      />
      <quiz-step-navigation
        :previous-step-id="previousStepId"
        :navigation="currentStep.navigation"
        :update-step="updateStep"
      />
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
      currentStep: {
        type: Object,
        required: true,
      },
      updateStep: {
        type: Function,
        required: true,
      },
      previousStepId: {
        type: String,
        default: null,
      },
    },
    computed: {
      isStepContetnVerticallyCentered() {
        return STEP_CONTENT_CENTERED_TYPES.includes(this.currentStep.content.type);
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
