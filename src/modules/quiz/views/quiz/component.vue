<template>
  <div class="quiz">
    <quiz-step
      :key="currentStep.id"
      :current-step="currentStep"
      :update-step="updateStep"
      :previous-step-id="previousStepId"
    />
  </div>
</template>

<script>
  import { quiz } from '@modules/quiz';
  import QuizStep from '@modules/quiz/components/quiz-step';
  
  export default {
    name: 'Quiz',
    components: { QuizStep },
    data: () => ({
      quiz,
    }),
    computed: {
      currentStep() {
        return this.quiz.data[quiz.navigation.current];
      },
      previousStepId() {
        const activeStepIndex = this.quiz.navigation.history.lastIndexOf(this.quiz.navigation.current);
        return this.quiz.navigation.history[activeStepIndex - 1];
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
