<template>
  <div class="buttons-content">
    <base-button
      class="button app-text app-text--lg"
      v-for="(button, index) in content"
      :key="index"
    >
      {{ button.data.content.text }}
      <buttons-list-hint
        v-if="button.data.hint"
        :content="button.data.hint.content"
      />
    </base-button>
  </div>
</template>

<script>
  import BaseButton from '@shared/components/base/button';
  import ButtonsListHint from '@modules/quiz/components/quiz-step-content/components/content-buttons-list/components/buttons-list-hint';

  export default {
    name: 'content-buttons-list',
    components: {
      BaseButton,
      ButtonsListHint,
    },
    props: {
      content: {
        type: Array,
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
