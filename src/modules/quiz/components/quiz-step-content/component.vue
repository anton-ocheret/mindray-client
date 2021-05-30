<template>
  <component
    :is="`content-${content.type}`"
    :content="content.data"
  />
</template>

<script>
  const ContentButtons = () => import(/* webpackChunkName: 'step-content-buttons' */ '@modules/quiz/components/quiz-step-content/components/content-buttons');

  export default {
    name: 'quiz-step-content',
    components: {
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
