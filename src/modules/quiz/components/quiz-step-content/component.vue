<template>
  <component
    :is="`content-${content.type}`"
    :content="content.data"
  />
</template>

<script>
  const ContentSingleAutocomplete = () => import(/* webpackChunkName: 'step-content-single-autocomplete' */ '@modules/quiz/components/quiz-step-content/components/content-single-autocomplete');
  const ContentSingleTextarea = () => import(/* webpackChunkName: 'step-content-single-textarea' */ '@modules/quiz/components/quiz-step-content/components/content-single-textarea');
  const ContentSingleSelect = () => import(/* webpackChunkName: 'step-content-single-select' */ '@modules/quiz/components/quiz-step-content/components/content-single-select');
  const ContentSingleInput = () => import(/* webpackChunkName: 'step-content-single-input' */ '@modules/quiz/components/quiz-step-content/components/content-single-input');
  const ContentButtons = () => import(/* webpackChunkName: 'step-content-buttons' */ '@modules/quiz/components/quiz-step-content/components/content-buttons');

  export default {
    name: 'quiz-step-content',
    components: {
      ContentSingleAutocomplete,
      ContentSingleTextarea,
      ContentSingleSelect,
      ContentSingleInput,
      ContentButtons,
    },
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
  };
</script>
