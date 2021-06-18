<template>
  <component
    :is="`content-${type}`"
    :content="data.content"
  />
</template>

<script>
  const ContentSingleAutocomplete = () => import(/* webpackChunkName: 'step-content-single-autocomplete' */ '@modules/quiz/components/quiz-step-content/components/content-single-autocomplete');
  const ContentMultipleFields = () => import(/* webpackChunkName: 'step-content-multiple-fields' */ '@modules/quiz/components/quiz-step-content/components/content-multiple-fields');
  const ContentSingleTextarea = () => import(/* webpackChunkName: 'step-content-single-textarea' */ '@modules/quiz/components/quiz-step-content/components/content-single-textarea');
  const ContentSingleSelect = () => import(/* webpackChunkName: 'step-content-single-select' */ '@modules/quiz/components/quiz-step-content/components/content-single-select');
  const ContentSingleInput = () => import(/* webpackChunkName: 'step-content-single-input' */ '@modules/quiz/components/quiz-step-content/components/content-single-input');
  const ContentButtonsList = () => import(/* webpackChunkName: 'step-content-buttons-list' */ '@modules/quiz/components/quiz-step-content/components/content-buttons-list');
  const ContentRadioList = () => import(/* webpackChunkName: 'step-content-radio-list' */ '@modules/quiz/components/quiz-step-content/components/content-radio-list');

  export default {
    name: 'quiz-step-content',
    components: {
      ContentSingleAutocomplete,
      ContentMultipleFields,
      ContentSingleTextarea,
      ContentSingleSelect,
      ContentSingleInput,
      ContentButtonsList,
      ContentRadioList,
    },
    props: {
      type: {
        type: String,
        required: true,
      },
      data: {
        type: Object,
        required: true,
      },
    },
  };
</script>
