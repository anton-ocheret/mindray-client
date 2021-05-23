<template>
  <div class="quiz-step">
    {{ id }}
  </div>
</template>

<script>
  export default {
    name: 'quiz-step',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
  };
</script>
