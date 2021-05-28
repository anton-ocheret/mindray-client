<template>
  <h1
    v-hint:text="{
      self: computedSelf,
      execute: Boolean(heading.hint),
    }"
    class="app-heading--lg"
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
      <quiz-step-hint :hint="heading.hint" />
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
    computed: {
      computedHeadingWordsArray() {
        const { text, hint } = this.heading;
        return hint && text.split(' ');
      },
      computedSelf() {
        return this;
      },
    },
  };
</script>

<style lang="scss" scoped></style>
