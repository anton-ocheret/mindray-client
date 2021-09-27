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
  import QuizStep from '@modules/quiz/components/quiz-step';

  import { global } from '@shared/mixins/store';
  import { quiz } from '@modules/quiz';
  
  export default {
    name: 'Quiz',
    components: { QuizStep },
    mixins: [global],
    watch: {
      currentStepIndex(nextIndex, prevIndex) {
        this.updateFooterKind({ nextIndex, prevIndex });
        this.handleContetPartUpdate(null);
      },
    },
    data: () => ({
      quiz,
    }),
    computed: {
      currentStep() {
        return this.quiz.data[quiz.navigation.current];
      },
      currentStepIndex() {
        return this.quiz.navigation.history.lastIndexOf(this.quiz.navigation.current);
      },
      previousStepId() {
        return this.quiz.navigation.history[this.currentStepIndex - 1];
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
      handleContetPartUpdate(payload) {
        this.quizUpdateModel({
          id: this.currentStep.id,
          heading: this.currentStep.content.data.heading.content.data.text.main,
          payload,
        });
      },
      handleResultsSend() {
        this.quiz.navigation.history = this.quiz.navigation.history.slice(0, 1);
        this.quizSendResults({ history: this.quiz.navigation.history });
      },
    },
    mounted() {
      this.$root.$on('quiz:update-step', this.updateStep);
      this.$root.$on('content-part:updated', this.handleContetPartUpdate);
      this.$root.$on('quiz:send-data', this.handleResultsSend);
    },
    beforeDestroy() {
      this.$root.$off('quiz:update-step', this.updateStep);
      this.$root.$off('content-part:updated', this.handleContetPartUpdate);
      this.$root.$off('quiz:send-data', this.handleResultsSend);
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
