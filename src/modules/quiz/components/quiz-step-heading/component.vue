<template>
  <h1
    v-hint:[hintType]="{
      execute: Boolean(heading.hint),
      propName: 'hintActivatorLeftPosition'
    }"
    class="heading app-heading--lg text-center relative"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-if="heading.hint">
      <template v-for="(word, index) in computedHeadingWordsArray">
        <span :key="index">{{ word | plusSpace }}</span>
      </template>
    </template>
    <template v-else>
      {{ heading.text }}
    </template>

    <template v-if="heading.hint">
      <quiz-step-hint
        :hint="heading.hint"
        :left-position="hintActivatorLeftPosition"
      />
    </template>
  </h1>
</template>

<script>
  import { hint } from '@shared/directives';
  import { plusSpace } from '@shared/filters';
  const QuizStepHint = () => import(/* webpackChunkName: 'quiz-step-heading-hint' */ '@modules/quiz/components/quiz-step-hint');

  export default {
    name: 'quiz-step-heading',
    directives: { hint },
    filters: { plusSpace },
    components: {
      QuizStepHint,
    },
    props: {
      heading: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      hintActivatorLeftPosition: 0,
    }),
    computed: {
      computedHeadingWordsArray() {
        const { text, hint } = this.heading;
        return hint && text.split(' ');
      },
      hintType() {
        return this.heading.hint && this.heading.hint.type;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .heading {
    margin-bottom: 10px;

    @media(min-width: $md) {
      margin-bottom: 20px;
    }
  }
</style>
