<template>
  <div class="buttons-content">
    <base-button
      class="button app-text app-text--lg"
      v-for="(button, index) in content.buttons"
      :key="`button${index}`"
      @click="() => handleClick(button)"
    >
      {{ button.data.content.text }}
      <buttons-list-hint
        v-if="button.data.hint"
        :content="button.data.hint.content"
      />
    </base-button>

    <template v-if="content.inputs && content.inputs.length">
      <base-input
        v-for="(input, index) in content.inputs"
        :key="`input${index}`"
        v-bind="input.data.content"
        class="input app-text app-text--lg"
        size="small"
      />
    </template>
  </div>
</template>

<script>
  import emitContentPartUpdate from '@modules/quiz/mixins/emit-content-part-update';
  import ButtonsListHint from '@modules/quiz/components/quiz-step-content/components/content-buttons-list/components/buttons-list-hint';
  import BaseButton from '@shared/components/base/button';
  import BaseInput from '@shared/components/base/input';

  export default {
    name: 'content-buttons-list',
    components: {
      ButtonsListHint,
      BaseButton,
      BaseInput,
    },
    mixins: [emitContentPartUpdate],
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
    methods: {
      handleClick(button) {
        this.emitContentPartUpdate(button.data.content.text);
        this.$nextTick(() => this.$root.$emit('quiz:update-step', button.navigation.next));
      },
    },
  };
</script>

<style lang="scss" scoped>
  .buttons-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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

  .input {
    width: auto;
    border-radius: 30px;
    min-width: 100%;

    @media(min-width: $sm) {
      margin: 10px;
      min-width: 0;
    }
  }
</style>
