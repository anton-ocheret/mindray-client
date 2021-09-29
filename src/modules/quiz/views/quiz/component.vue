<template>
  <div class="quiz">
    <quiz-step
      :key="currentStep.id"
      :current-step="currentStep"
      :update-step="updateStep"
      :previous-step-id="previousStepId"
      :is-step-valid="isStepValid"
      :is-step-with-validation="isStepWithValidation"
    />
  </div>
</template>

<script>
  import { clone } from 'ramda';
  import { ROUTE_NAMES } from '@shared/constants';
  import { global } from '@shared/mixins/store';
  import { quiz as initialQuiz } from '@modules/quiz';

  import QuizStep from '@modules/quiz/components/quiz-step';
  
  export default {
    name: 'Quiz',
    components: { QuizStep },
    mixins: [global],
    watch: {
      currentStepIndex(nextIndex, prevIndex) {
        this.updateFooterKind({ nextIndex, prevIndex });
        this.handleContetPartUpdate(null);
        this.quizUpdateHistory(this.quiz.navigation.history);
      },
    },
    data: () => ({
      quiz: clone(initialQuiz),
    }),
    computed: {
      currentStep() {
        return this.quiz.data[this.quiz.navigation.current];
      },
      currentStepIndex() {
        return this.quiz.navigation.history.lastIndexOf(this.quiz.navigation.current);
      },
      previousStepId() {
        return this.quiz.navigation.history[this.currentStepIndex - 1];
      },
      isStepWithValidation() {
        return JSON.stringify(this.currentStep).includes('validations');
      },
    },
    methods: {
      getUpdateHistoryMethodName: (ahead) => ahead ? 'push' : 'pop',
      updateHistory(id, method) {
        this.quiz.navigation.history[method](id);
      },
      updateCurrentStep(stepId) {
        this.quiz.navigation.current = stepId;
      },
      updateStep(stepId, ahead = true) {
        const method = this.getUpdateHistoryMethodName(ahead);
        this.updateHistory(stepId, method);
        this.updateCurrentStep(stepId);
      },
      resetQuiz() {
        this.quiz = clone(initialQuiz);
      },
      handleContetPartUpdate(payload) {
        this.quizUpdateModel({
          id: this.currentStep.id,
          heading: this.currentStep.content.data.heading.content.data.text.main,
          payload,
        });
      },
    },
    mounted() {
      this.$root.$on('quiz:update-step', this.updateStep);
      this.$root.$on('content-part:updated', this.handleContetPartUpdate);
      this.quizUpdateHistory(this.quiz.navigation.history);
    },
    beforeDestroy() {
      this.$root.$off('quiz:update-step', this.updateStep);
      this.$root.$off('content-part:updated', this.handleContetPartUpdate);
    },
    beforeRouteEnter(_, from, next) {
      next((vm) => {
        if (from.name === ROUTE_NAMES.QUIZ_STEP_LAST) {
          vm.resetQuiz();
        }
      });
    },
  };
</script>

<style lang="scss">
  .quiz {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    padding: 130px $padding-mobile-x;

    @media(min-width: $sm) {
      padding: 140px $padding-desktop-x;
    }
  }
</style>
