<template>
  <div class="quiz">
    <quiz-step :step="quiz.data[quiz.navigation.first]" />
  </div>
</template>

<script>
  import { quiz } from '@modules/quiz';
  import QuizStep from '@modules/quiz/components/quiz-step';
  
  export default {
    name: 'Quiz',
    components: { QuizStep },
    data: () => ({ quiz }),
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
