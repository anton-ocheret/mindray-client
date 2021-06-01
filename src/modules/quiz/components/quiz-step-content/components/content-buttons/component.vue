<template>
  <div class="buttons-content">
    <base-button
      class="button app-text app-text--lg"
      v-for="button in Object.values(content)"
      :key="button.id"
    >
      {{ button.content.text }}
      <template v-if="button.content.hint">
        <quiz-step-hint
          class="hint"
          position="relative"
          :hint="button.content.hint"
        />
      </template>
    </base-button>
  </div>
</template>

<script>
  import BaseButton from '@shared/components/base/button';
  const QuizStepHint = () => import(/* webpackChunkName: 'quiz-step-heading-hint' */ '@modules/quiz/components/quiz-step-hint');

  export default {
    name: 'content-buttons',
    components: {
      QuizStepHint,
      BaseButton,
    },
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .buttons-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .button {
    margin: 7px;
    min-width: 100%;

    @media(min-width: $sm) {
      margin: 10px;
      min-width: 0;
    }
  }

  ::v-deep .hint {
    margin-left: 10px;

    .activator {
      opacity: .3;
    }
  }
</style>
