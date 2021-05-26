<template>
  <h1 class="heading">
    {{ heading.text }}
  </h1>
</template>

<script>
  export default {
    name: 'quiz-step-heading',
    props: {
      heading: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .heading {
    position: relative;
  }

  .hint {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: black;
    top: 0;
    right: 0;
  }
</style>
