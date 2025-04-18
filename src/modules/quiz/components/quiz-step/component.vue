<template>
  <div class="quiz-step">
    <div
      class="wrapper"
      :class="{
        'flex-center': isStepContetnVerticallyCentered,
        'text-center': !isStepContentFilledType,
      }"
    >
      <div
        class="wrapper-content"
        :class="{
          'wrapper-white': isStepContentFilledType,
          'text-center': !isStepContentFilledType,
          'flex-center': isStepContetnVerticallyCentered,
        }"
      >
        <quiz-step-heading
          :class="{ 'wrapper-white-heading': isStepContentFilledType }"
          :hint="currentStep.content.data.heading.hint"
          :content="currentStep.content.data.heading.content"
        />
        <quiz-step-content
          :class="{ 'wrapper-white-content': isStepContentFilledType }"
          :type="currentStep.content.type"
          :data="currentStep.content.data.body"
        />
        <quiz-step-footer
          v-if="currentStep.content.data.footer"
          :class="{ 'wrapper-white-footer': isStepContentFilledType }"
          :data="currentStep.content.data.footer"
        />
      </div>
      <quiz-step-navigation
        :previous-step-id="previousStepId"
        :navigation="currentStep.navigation"
        :update-step="updateStep"
        :is-step-valid="isStepValid"
        :is-step-with-validation="isStepWithValidation"
      />
    </div>
  </div>
</template>

<script>
  import QuizStepNavigation from '@modules/quiz/components/quiz-step-navigation';
  import QuizStepHeading from '@modules/quiz/components/quiz-step-heading';
  import QuizStepContent from '@modules/quiz/components/quiz-step-content';
  import QuizStepFooter from '@modules/quiz/components/quiz-step-footer';
  import { STEP_CONTENT_CENTERED_TYPES, STEP_CONTENT_FILLED_TYPES } from '@modules/quiz/constants';

  export default {
    name: 'quiz-step',
    components: {
      QuizStepNavigation,
      QuizStepHeading,
      QuizStepContent,
      QuizStepFooter,
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
      isStepValid: {
        type: Boolean,
        default: true,
      },
      isStepWithValidation: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      isStepContetnVerticallyCentered() {
        return STEP_CONTENT_CENTERED_TYPES.includes(this.currentStep.content.type);
      },
      isStepContentFilledType() {
        return STEP_CONTENT_FILLED_TYPES.includes(this.currentStep.content.type);
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
    }

    @media(min-width: $lg) {
      width: calc(100% - 350px);
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .wrapper-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .wrapper-white {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: $white;
    align-self: baseline;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.07);
    border-radius: 25px;
    border: 1px solid $porcelain;
    min-height: 0;
    @media(min-width: $md) {
      min-height: 420px;
    }
  }

  .wrapper-white-heading {
    flex-shrink: 0;
    padding: 30px 20px 0;
    @media(min-width: $md) {
      padding: 40px 50px 0;
    }
  }

  .wrapper-white-content {
    padding: 0 20px 25px;
    @media(min-width: $md) {
      padding: 0 50px 50px;
      flex-grow: 1;
    }
  }

  .wrapper-white-footer {
    flex-shrink: 0;
    padding: 0 20px;
    min-height: 100px;
    display: flex;
    align-items: center;
    border-top: 1px solid $porcelain;
    @media(min-width: $md) {
      padding: 0 50px;
    }
  }

  .flex-center {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
