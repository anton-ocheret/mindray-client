<template>
  <h1 class="heading">
    <span class="app-heading-text--lg" :class="$options.HINT_TEXT_POSITION_ELEMENT.NAME">
      {{ content.data.text.main }}
    </span>
    <span
      v-if="content.data.text.sub"
      class="sub-heading-text app-sub-heading-text--lg"
    >
      {{ content.data.text.sub }}
    </span>
    <heading-hint
      v-if="hint"
      :content="hint.content"
      :text-position-element-class="$options.HINT_TEXT_POSITION_ELEMENT.CLASS"
    />
  </h1>
</template>

<script>
  import HeadingHint from '@modules/quiz/components/quiz-step-heading/components/heading-hint';
  import { HINT_TEXT_POSITION_ELEMENT } from '@modules/quiz/components/quiz-step-heading/constants.js';

  export default {
    name: 'quiz-step-heading',
    components: {
      HeadingHint,
    },
    props: {
      content: {
        type: Object,
        required: true,
      },
      hint: {
        type: Object,
        default: null,
      },
    },
    HINT_TEXT_POSITION_ELEMENT,
  };
</script>

<style lang="scss" scoped>
  .heading {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    @media(min-width: $md) {
      margin-bottom: 20px;
    }
  }
  .sub-heading-text {
    margin-top: 20px;
    @media(min-width: $md) {
      margin-top: 25px;
    }
  }
</style>
